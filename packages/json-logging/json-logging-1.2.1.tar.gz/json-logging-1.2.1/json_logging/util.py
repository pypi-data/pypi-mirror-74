# coding=utf-8
import logging
import os
import sys
from datetime import datetime
from logging import Logger, StreamHandler

import json_logging
import inspect


def is_env_var_toggle(var_name):
    enable_json_setting = str(os.getenv(var_name)).lower()
    _env_toggle = enable_json_setting.lower() in ['true', '1', 'y', 'yes']
    return _env_toggle


def get_library_logger(logger_name):
    """

    :param logger_name: name
    :return: logger
    """
    # noinspection PyUnresolvedReferences
    if logger_name in logging.Logger.manager.loggerDict:
        return logging.getLogger(logger_name)

    logger = logging.getLogger(logger_name)
    logger.setLevel(logging.DEBUG)
    # add stdout output in case parent have no handlers
    if len(logger.parent.handlers) == 0:
        logger.addHandler(StreamHandler(sys.stdout))

    return logger


def update_formatter_for_loggers(loggers_iter, formatter):
    """
    :param formatter:
    :param loggers_iter:
    """
    for logger in loggers_iter:
        if not isinstance(logger, Logger):
            raise RuntimeError("%s is not a logging.Logger instance", logger)
        for handler in logger.handlers:
            if not isinstance(handler.formatter, formatter):
                handler.formatter = formatter()


# noinspection PyPep8
def parse_int(input_int, default):
    # noinspection PyBroadException
    try:
        integer = int(input_int)
    except:
        integer = default
    return integer


def validate_subclass(subclass, superclass):
    """

    :param subclass
    :param superclass
    :return: bool
    """
    if not issubclass(subclass, superclass):
        raise RuntimeError(str(subclass) + ' is not a subclass of ' + str(superclass))

    return True


_epoch = datetime(1970, 1, 1)


def epoch_nano_second(datetime_):
    return int((datetime_ - _epoch).total_seconds()) * 1000000000 + datetime_.microsecond * 1000


def iso_time_format(datetime_):
    return '%04d-%02d-%02dT%02d:%02d:%02d.%03dZ' % (
        datetime_.year, datetime_.month, datetime_.day, datetime_.hour, datetime_.minute, datetime_.second,
        int(datetime_.microsecond / 1000))


if hasattr(sys, '_getframe'):
    currentframe = lambda _no_of_go_up_level: sys._getframe(_no_of_go_up_level)
else:  # pragma: no cover
    # noinspection PyBroadException
    def currentframe(_no_of_go_up_level):
        """Return the frame object for the caller's stack frame."""
        try:
            raise Exception
        except Exception:
            return sys.exc_info()[_no_of_go_up_level - 1].tb_frame.f_back


class RequestUtil(object):
    """
        util for extract request's information
    """

    def __new__(cls, *args, **kw):
        if not hasattr(cls, '_instance'):
            request_adapter_class = kw['request_adapter_class']
            response_adapter_class = kw['response_adapter_class']

            validate_subclass(request_adapter_class, json_logging.RequestAdapter)
            validate_subclass(response_adapter_class, json_logging.ResponseAdapter)

            cls._instance = object.__new__(cls)

            cls._instance.request_adapter_class = request_adapter_class
            cls._instance.response_adapter_class = response_adapter_class
            cls._instance.request_adapter = request_adapter_class()
            cls._instance.response_adapter = response_adapter_class()
            cls._instance.is_support_global_request_object = request_adapter_class.support_global_request_object()
            cls._instance.create_correlation_id_if_not_exists = json_logging.CREATE_CORRELATION_ID_IF_NOT_EXISTS

        return cls._instance

    def get_correlation_id(self, request=None,within_formatter=False):
        """
        Gets the correlation id from the header of the request. \
        It tries to search from json_logging.CORRELATION_ID_HEADERS list, one by one.\n
        If found no value, new id will be generated by default.\n
        :param request: request object
        :return: correlation id string
        """
        # _logger.debug("Getting correlation", extra={'correlation_id': '-'})
        #
        if request is None:
            if self.is_support_global_request_object:
                request = self.request_adapter_class.get_current_request()
            else:
                request = self.get_request_from_call_stack()

            if request is None:
                return json_logging.EMPTY_VALUE

        # _logger.debug("Attempt to get correlation from request context", extra={'correlation_id': '-'})
        correlation_id = self.request_adapter.get_correlation_id_in_request_context(request)
        if correlation_id is not None:
            return correlation_id

        correlation_id = self._get_correlation_id_in_request_header(self.request_adapter, request)
        # exists = json_logging.CREATE_CORRELATION_ID_IF_NOT_EXISTS
        if correlation_id is None and self.create_correlation_id_if_not_exists:
            correlation_id = str(json_logging.CORRELATION_ID_GENERATOR())
            self.request_adapter.set_correlation_id(request, correlation_id)

        return correlation_id if correlation_id else json_logging.EMPTY_VALUE

    def get_request_from_call_stack(self, within_formatter=False):
        """

        :return: get request object from call stack
        """
        """
            python 3 call stack frame
            00 get_request_from_call_stack [util.py:225]
            01 get_correlation_id [util.py:177]
            02 format [__init__.py:333]
            03 format [__init__.py:830]
            04 emit [__init__.py:980]
            05 handle [__init__.py:855]
            06 callHandlers [__init__.py:1487]
            07 handle [__init__.py:1425]
            08 _log [__init__.py:1415]
            09 info [__init__.py:1279]
            10 logging statement
        """
        module = inspect.getmodule(inspect.currentframe().f_back)

        class_type = self.request_adapter_class.get_request_class_type()
        no_of_go_up_level = 11 if within_formatter else 1

        # FIXME: find out the depth of logging call stack in Python 2.7
        f = currentframe(no_of_go_up_level)
        while True:
            f_locals = f.f_locals
            if 'request' in f_locals:
                if isinstance(f_locals['request'], class_type):
                    return f_locals['request']

            if 'req' in f_locals:
                if isinstance(f_locals['req'], class_type):
                    return f_locals['req']

            for key in f_locals:
                if key not in {'request', 'req'} and isinstance(f_locals[key], class_type):
                    return f_locals[key]
            if f.f_back is not None:
                f = f.f_back
            else:
                break
        return None

    @staticmethod
    def _get_correlation_id_in_request_header(request_adapter, request):
        for header in json_logging.CORRELATION_ID_HEADERS:
            value = request_adapter.get_http_header(request, header)
            if value is not None:
                return value
        return None
