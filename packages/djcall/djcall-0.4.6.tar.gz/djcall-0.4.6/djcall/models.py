import itertools
import logging
import os
import sys
import traceback

from django.contrib.postgres.fields import JSONField
from django.db import close_old_connections
from django.db import models
from django.db import transaction
from django.db.models import signals
from django.utils import timezone
from django.utils.module_loading import import_string
from django.utils.translation import gettext_lazy as _

from picklefield.fields import PickledObjectField

try:
    import uwsgi
except ImportError:
    uwsgi = None


logger = logging.getLogger('djcall')


def _cv(v):
    """Clean a value for logger output"""
    return str(v).strip().replace('\n', ' ').replace('\r', '')[:16].encode(
        'ascii', 'ignore').decode('utf8')


def spooler(env):
    """
    uWSGI spooler callback

    We'll try to mimic what django does for requests
    """
    args = ', '.join([f'{k}={_cv(v)}' for k, v in env.items()])
    logger.debug(f'spooler(_cv({args}))')

    pk = env[b'call']

    # this is required otherwise some postgresql exceptions blow
    close_old_connections()

    call = Call.objects.filter(pk=pk).select_related('caller').first()

    success = getattr(uwsgi, 'SPOOL_OK', True)
    if call:
        if call.caller.status == call.caller.STATUS_CANCELED:
            logger.info(
                f'Call(id={pk}).caller canceled !'
                ' removing from uWSGI spooler'
            )
            call.status = call.STATUS_CANCELED
            call.save()
            close_old_connections()  # cleanup
            return success

        try:
            call.call()
        except Exception:
            max_attempts = call.caller.max_attempts
            close_old_connections()  # cleanup

            if max_attempts and call.caller.call_set.count() >= max_attempts:
                return success
            raise  # will trigger retry from uwsgi
    else:
        logger.exception(
            f'Call(id={pk}) not found in db ! removing from uWSGI spooler')

    logger.debug(f'spooler(_cv({args})): closing on success')
    close_old_connections()  # cleanup
    return success


if uwsgi:
    uwsgi.spooler = spooler


def get_spooler_path(name):
    if not uwsgi:
        return name

    if hasattr(name, 'encode'):
        name = name.encode('ascii')

    for spooler in uwsgi.spoolers:
        if hasattr(spooler, 'encode'):
            spooler = spooler.encode('ascii')
        if spooler.endswith(name):
            logger.debug(f'get_spooler_path({name}) = {spooler})')
            return spooler

    logger.debug(f'get_spooler_path({name}) ?= {name})')
    return name


def prune(**kwargs):
    keep = kwargs.get('keep', 10000)
    keep_qs = Call.objects.order_by('created')[:keep]
    drop_qs = Call.objects.exclude(
        pk__in=keep_qs.values_list('pk', flat=True)
    )
    drop_qs._raw_delete(drop_qs.db)


class Metadata(models.Model):
    STATUS_CREATED = 0
    STATUS_SPOOLED = 1
    STATUS_STARTED = 2
    STATUS_SUCCESS = 3
    STATUS_RETRYING = 4
    STATUS_FAILURE = 5
    STATUS_UNSPOOLABLE = 6
    STATUS_CANCELED = 7

    created = models.DateTimeField(
        default=timezone.now,
        db_index=True,
        editable=False,
    )
    spooled = models.DateTimeField(null=True, editable=False)
    started = models.DateTimeField(null=True, editable=False)
    ended = models.DateTimeField(null=True, editable=False)
    parent = models.ForeignKey(
        'self',
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        editable=False,
    )

    def save_status(self, status, commit=True):
        self.status = getattr(self, f'STATUS_{status}'.upper())

        ended = (
            self.STATUS_FAILURE,
            self.STATUS_SUCCESS,
            self.STATUS_RETRYING,
        )

        if self.status in ended:
            self.ended = timezone.now()
        elif self.status == self.STATUS_STARTED:
            self.started = timezone.now()
        elif self.status == self.STATUS_SPOOLED:
            self.spooled = timezone.now()

        if commit:
            self.save()
            if not transaction.get_connection().in_atomic_block:
                transaction.commit()

    class Meta:
        abstract = True


class Caller(Metadata):
    """
    SECURITY WARNING: never trust user input for kwargs or callback !
    """
    STATUS_CHOICES = (
        (Metadata.STATUS_CREATED, _('Created')),
        (Metadata.STATUS_SPOOLED, _('Spooled')),
        (Metadata.STATUS_STARTED, _('Started')),
        (Metadata.STATUS_SUCCESS, _('Success')),
        (Metadata.STATUS_RETRYING, _('Retrying')),
        (Metadata.STATUS_FAILURE, _('Failure')),
        (Metadata.STATUS_UNSPOOLABLE, _('Unspoolable')),
        (Metadata.STATUS_CANCELED, _('Canceled')),
    )

    status = models.IntegerField(
        choices=STATUS_CHOICES,
        db_index=True,
        default=0,
        editable=False,
    )
    old_kwargs = PickledObjectField(null=True)
    kwargs = JSONField(null=True)
    callback = models.CharField(
        max_length=255,
        db_index=True,
    )
    max_attempts = models.IntegerField(default=0)
    spooler = models.CharField(max_length=100, null=True, blank=True)
    priority = models.IntegerField(null=True, blank=True)
    signal_number = models.IntegerField(null=True, blank=True)

    class Meta:
        verbose_name = _('Caller')

    def __str__(self):
        if hasattr(self.kwargs, 'items'):
            args = ', '.join([f'{k}={_cv(v)}' for k, v in self.kwargs.items()])
        else:
            args = ''
        return f'{self.callback}({args})'

    @property
    def python_callback(self):
        parts = self.callback.split('.')
        i = self.callback.count('.')
        errs = []
        while i:
            try:
                modname = '.'.join(parts[:i + 1])
                mod = import_string(modname)
            except ImportError as err:
                errs.append('{}: {}'.format(modname, err))
                i -= 1
                if not i:
                    logger.warning(
                        'could not resolve python_callback!'
                        " errors: {}, cwd: {}".format(errs, os.getcwd()))
                    raise
            else:
                ret = mod
                while 0 < i < self.callback.count('.'):
                    ret = getattr(ret, parts[len(parts) - i])
                    i -= 1
                return ret

    def python_callback_call(self):
        return self.python_callback(**self.kwargs)

    def call(self):
        if not self.pk:
            self.save()
        call = Call.objects.create(caller=self)
        call.call()
        return call

    @property
    def running(self):
        return self.status in (
            Metadata.STATUS_SPOOLED,
            Metadata.STATUS_STARTED,
            Metadata.STATUS_RETRYING,
        )

    def spool(self, spooler=None):
        logger.debug(f'{self}.spool()')
        if spooler:
            self.spooler = spooler
        self.save_status('spooled')
        call = Call.objects.create(caller=self)

        if uwsgi:
            arg = {b'call': str(call.pk).encode('ascii')}
            if self.spooler:
                arg[b'spooler'] = get_spooler_path(self.spooler)
            if self.priority:
                arg[b'priority'] = self.priority

            def spool():
                logger.debug(f'uwsgi.spool({arg})')
                try:
                    uwsgi.spool(arg)
                except Exception:
                    tt, value, tb = sys.exc_info()
                    call.exception = '\n'.join(
                        traceback.format_exception(tt, value, tb))
                    call.save_status('unspoolable')
                    logger.exception(
                        f'{self} -> Call(id={call.pk}).spool():'
                        f' uwsgi.spool exception !'
                    )
                    # uwsgi does not seem to reprint logger.exception
            transaction.on_commit(spool)
        else:
            call.call()

        logger.debug(f'{self}.spool(): success')
        return self


def default_kwargs(sender, instance, **kwargs):
    if instance.kwargs is None:
        instance.kwargs = dict()


signals.post_save.connect(default_kwargs, sender=Caller)


class Call(Metadata):
    STATUS_CHOICES = (
        (Metadata.STATUS_CREATED, _('Created')),
        (Metadata.STATUS_SPOOLED, _('Spooled')),
        (Metadata.STATUS_STARTED, _('Started')),
        (Metadata.STATUS_SUCCESS, _('Success')),
        (Metadata.STATUS_FAILURE, _('Failure')),
        (Metadata.STATUS_UNSPOOLABLE, _('Unspoolable')),
        (Metadata.STATUS_CANCELED, _('Canceled')),
    )

    caller = models.ForeignKey(Caller, on_delete=models.CASCADE)
    result = PickledObjectField(null=True, protocol=-1)
    exception = models.TextField(default='', editable=False)
    status = models.IntegerField(
        choices=STATUS_CHOICES,
        db_index=True,
        default=0,
        editable=False,
    )
    parent = models.ForeignKey(
        'self',
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        editable=False,
    )

    class Meta:
        verbose_name = _('Call')

    def __init__(self, *args, **kwargs):
        if 'caller' not in kwargs and 'callback' in kwargs:
            kwargs['caller'] = Caller(
                callback=kwargs.pop('callback'),
                max_attempts=kwargs.pop('max_attempts'),
                kwargs=kwargs.pop('kwargs'),
            ).objects.create()

        if 'spooler' in kwargs:
            self.spooler = get_spooler_path(kwargs['spooler'])

        super().__init__(*args, **kwargs)

    def call(self):
        logger.debug(f'{self.caller} -> Call(id={self.pk}).call(): begin')
        self.save_status('started')
        self.caller.save_status('started')

        sid = transaction.savepoint()
        try:
            self.result = self.caller.python_callback_call()
        except Exception:
            tt, value, tb = sys.exc_info()
            transaction.savepoint_rollback(sid)
            self.exception = '\n'.join(
                traceback.format_exception(tt, value, tb))

            max_attempts = self.caller.max_attempts
            self.save_status('failure')
            if max_attempts and self.caller.call_set.count() >= max_attempts:
                self.caller.save_status('failure')
            else:
                self.caller.save_status('retrying')

            logger.exception(
                f'{self.caller} -> Call(id={self.pk}).call(): exception')
            raise
        else:
            transaction.savepoint_commit(sid)

        self.save_status('success')
        self.caller.save_status('success')
        logger.info(f'{self.caller} -> Call(id={self.pk}).call(): success')


class CronManager(models.Manager):
    def register_signals(self):
        if not uwsgi:
            return

        def executor(signal_number):
            close_old_connections()
            result = Caller.objects.get(
                signal_number=signal_number
            ).call()
            close_old_connections()
            return result

        callers = Caller.objects.annotate(
            crons=models.Count('cron')
        ).prefetch_related('cron_set').exclude(crons=0)

        signal_number = 1
        for caller in callers:
            caller.signal_number = signal_number
            caller.save()

            uwsgi.register_signal(
                caller.signal_number,
                caller.spooler or 'worker',
                executor,
            )

            logger.debug(
                f'uwsgi.register_signal({signal_number}, {caller.callback})')

            signal_number += 1

        transaction.commit()
        return callers

    def add_crons(self):
        if not uwsgi:
            return

        callers = self.register_signals()
        for caller in callers:
            for cron in caller.cron_set.all():
                cron.add_cron()


class Cron(models.Model):
    caller = models.ForeignKey(Caller, on_delete=models.CASCADE)
    minute = models.CharField(max_length=50, default='*')
    hour = models.CharField(max_length=50, default='*')
    day = models.CharField(max_length=50, default='*')
    month = models.CharField(max_length=50, default='*')
    weekday = models.CharField(max_length=50, default='*')

    objects = CronManager()

    def get_matrix(self):
        args = [
            str(self.minute),
            str(self.hour),
            str(self.day),
            str(self.month),
            str(self.weekday),
        ]

        for i, arg in enumerate(args):
            if arg.startswith('-'):
                args[i] = [int(arg)]
            elif arg == '*':
                args[i] = [-1]
            elif arg[:2] == '*/':
                # "*/5" => -5.
                args[i] = [0 - int(arg[2:])]
            elif '-' in arg:
                n, m = arg.split('-')
                args[i] = list(range(int(n), int(m) + 1))
            else:
                args[i] = [int(arg)]

        return list(itertools.product(*args))

    def add_cron(self):
        for args in self.get_matrix():
            logger.debug(
                f'{self.caller} add cron : {args} '
                f'signal {self.caller.signal_number}')
            uwsgi.add_cron(self.caller.signal_number, *args)


def setup():
    caller = Caller.objects.filter(callback='djcall.models.prune').first()
    if not caller:
        caller = Caller.objects.create(
            callback='djcall.models.prune',
            kwargs=dict(keep=10000),
        )

    cron = Cron.objects.filter(caller=caller).first()
    if not cron:
        cron = Cron.objects.create(caller=caller, hour=4, minute=0)
    Cron.objects.add_crons()
