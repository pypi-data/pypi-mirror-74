import itertools
import os
import sys

AUTO_DEBUG = os.getenv('XPYTHON_DEBUG')
RECORD_INTERPLEVEL_TRACEBACK = True

def strerror(errno):
    """Translate an error code to a unicode message string."""
    from pypy.module._codecs.locale import str_decode_locale_surrogateescape
    utf8, lgt = str_decode_locale_surrogateescape(os.strerror(errno))
    return utf8, lgt

class OperationError(Exception):
    """Interpreter-level exception that signals an exception that should be
    sent to the application level.

    OperationError instances have three attributes (and no .args),
    w_type, _w_value and _application_traceback, which contain the wrapped
    type and value describing the exception, and a chained list of
    PyTraceback objects making the application-level traceback.
    """

    _w_value = None
    _application_traceback = None
    _context_recorded = False

    def __init__(self, w_type, w_value, tb=None):
        self.setup(w_type, w_value)
        self._application_traceback = tb

    def setup(self, w_type, w_value=None):
        assert w_type is not None
        self.w_type = w_type
        self._w_value = w_value
        self.debug_excs = []

    def clear(self, space):
        # XXX remove this method.  The point is that we cannot always
        # hack at 'self' to clear w_type and _w_value, because in some
        # corner cases the OperationError will be used again: see
        # test_interpreter.py:test_with_statement_and_sys_clear.
        pass

    def match(self, space, w_check_class):
        "Check if this application-level exception matches 'w_check_class'."
        return space.exception_match(self.w_type, w_check_class)

    def _async(self, space):
        "Check if this is an exception that should better not be caught."
        return (self.match(space, space.w_SystemExit) or
                self.match(space, space.w_KeyboardInterrupt))
        # note: an extra case is added in OpErrFmtNoArgs

    def __str__(self):
        "Convenience for tracebacks."
        s = self._w_value
        space = getattr(self.w_type, 'space', None)
        if space is not None:
            if self.__class__ is not OperationError and s is None:
                s, lgt = self._compute_value(space)
            try:
                s = space.text_w(s)
            except Exception:
                pass
        return '[%s: %s]' % (self.w_type, s)

    def __repr__(self):
        "NOT_RPYTHON"
        return 'OperationError(%s)' % (self.w_type)

    def errorstr(self, space, use_repr=False):
        "The exception class and value, as a string."
        if not use_repr:    # see write_unraisable()
            self.normalize_exception(space)
        w_value = self.get_w_value(space)
        if space is None:
            # this part NOT_RPYTHON
            exc_typename = str(self.w_type)
            exc_value = str(w_value)
        else:
            exc_typename = space.text_w(
                space.getattr(self.w_type, space.newtext('__name__')))
            if space.is_w(w_value, space.w_None):
                exc_value = ""
            else:
                try:
                    if use_repr:
                        exc_value = space.text_w(space.repr(w_value))
                    else:
                        exc_value = space.text_w(space.str(w_value))
                except OperationError:
                    # oups, cannot __str__ the exception object
                    exc_value = ("<exception %s() failed>" %
                                 ("repr" if use_repr else "str"))
        if not exc_value:
            return exc_typename
        else:
            return '%s: %s' % (exc_typename, exc_value)

    def record_interpreter_traceback(self):
        """Records the current traceback inside the interpreter.
        This traceback is only useful to debug the interpreter, not the
        application."""
        if RECORD_INTERPLEVEL_TRACEBACK:
            self.debug_excs.append(sys.exc_info())

    def normalize_exception(self, space):
        """Normalize the OperationError.  In other words, fix w_type and/or
        w_value to make sure that the __class__ of w_value is exactly w_type.
        """
        #
        # This method covers all ways in which the Python statement
        # "raise X, Y" can produce a valid exception type and instance.
        #
        # In the following table, 'Class' means a subclass of BaseException
        # and 'inst' is an instance of either 'Class' or a subclass of it.
        #
        # The flow object space only deals with non-advanced case.
        #
        #  input (w_type, w_value)... becomes...                advanced case?
        # ---------------------------------------------------------------------
        #  (Class, None)              (Class, Class())                no
        #  (Class, inst)              (inst.__class__, inst)          no
        #  (Class, tuple)             (Class, Class(*tuple))          yes
        #  (Class, x)                 (Class, Class(x))               no
        #  (inst, None)               (inst.__class__, inst)          no
        #
        w_type = self.w_type
        w_value = self.get_w_value(space)

        if space.exception_is_valid_obj_as_class_w(w_type):
            # this is for all cases of the form (Class, something)
            if space.is_w(w_value, space.w_None):
                # raise Type: we assume we have to instantiate Type
                w_value = space.call_function(w_type)
                w_type = self._exception_getclass(space, w_value)
            else:
                w_valuetype = space.exception_getclass(w_value)
                if space.exception_issubclass_w(w_valuetype, w_type):
                    # raise Type, Instance: let etype be the exact type of value
                    w_type = w_valuetype
                else:
                    if space.isinstance_w(w_value, space.w_tuple):
                        # raise Type, tuple: assume the tuple contains the
                        #                    constructor args
                        w_value = space.call(w_type, w_value)
                    else:
                        # raise Type, X: assume X is the constructor argument
                        w_value = space.call_function(w_type, w_value)
                    w_type = self._exception_getclass(space, w_value)
            if self._application_traceback:
                from pypy.interpreter.pytraceback import PyTraceback
                from pypy.module.exceptions.interp_exceptions import W_BaseException
                tb = self._application_traceback
                if (isinstance(w_value, W_BaseException) and
                    isinstance(tb, PyTraceback)):
                    # traceback hasn't escaped yet
                    w_value.w_traceback = tb
                else:
                    # traceback has escaped
                    space.setattr(w_value, space.newtext("__traceback__"),
                                  self.get_w_traceback(space))
        else:
            # the only case left here is (inst, None), from a 'raise inst'.
            w_inst = w_type
            w_instclass = self._exception_getclass(space, w_inst)
            if not space.is_w(w_value, space.w_None):
                raise oefmt(space.w_TypeError,
                            "instance exception may not have a separate value")
            w_value = w_inst
            w_type = w_instclass

        self.w_type = w_type
        self._w_value = w_value

    def _exception_getclass(self, space, w_inst, what="exceptions"):
        w_type = space.exception_getclass(w_inst)
        if not space.exception_is_valid_class_w(w_type):
            raise oefmt(space.w_TypeError,
                        "%s must derive from BaseException, not %N",
                        what, w_type)
        return w_type

    def write_unraisable(self, space, where, w_object=None,
                         with_traceback=False, extra_line=''):
        # Note: since Python 3.5, unraisable exceptions are always
        # printed with a traceback.  Setting 'with_traceback=False'
        # only asks for a different format, starting with the message
        # "Exception Xxx ignored".
        if w_object is None:
            objrepr = ''
        else:
            try:
                objrepr = space.text_w(space.repr(w_object))
            except OperationError:
                objrepr = "<object repr() failed>"
        #
        try:
            try:
                self.normalize_exception(space)
            except OperationError:
                pass
            w_t = self.w_type
            w_v = self.get_w_value(space)
            w_tb = self.get_w_traceback(space)
            if where or objrepr:
                if with_traceback:
                    first_line = 'From %s%s:\n' % (where, objrepr)
                else:
                    first_line = 'Exception ignored in: %s%s\n' % (
                        where, objrepr)
            else:
                # Note that like CPython, we don't normalize the
                # exception here.  So from `'foo'.index('bar')` you get
                # "Exception ValueError: 'substring not found' in x ignored"
                # but from `raise ValueError('foo')` you get
                # "Exception ValueError: ValueError('foo',) in x ignored"
                first_line = ''
            space.appexec([space.newtext(first_line),
                           space.newtext(extra_line),
                           w_t, w_v, w_tb],
            """(first_line, extra_line, t, v, tb):
                import sys
                sys.stderr.write(first_line)
                if extra_line:
                    sys.stderr.write(extra_line)
                import traceback
                traceback.print_exception(t, v, tb)
            """)
        except OperationError:
            pass   # ignored

    def get_w_value(self, space):
        w_value = self._w_value
        if w_value is None:
            value, lgt = self._compute_value(space)
            self._w_value = w_value = space.newtext(value, lgt)
        return w_value

    def _compute_value(self, space):
        raise NotImplementedError

    def get_traceback(self):
        """Calling this marks the PyTraceback as escaped, i.e. it becomes
        accessible and inspectable by app-level Python code.  For the JIT.
        Note that this has no effect if there are already several traceback
        frames recorded, because in this case they are already marked as
        escaping by executioncontext.leave() being called with
        got_exception=True.
        """
        from pypy.interpreter.pytraceback import PyTraceback
        tb = self._application_traceback
        if tb is not None and isinstance(tb, PyTraceback):
            tb.frame.mark_as_escaped()
        return tb

    def has_any_traceback(self):
        return self._application_traceback is not None

    def set_cause(self, space, w_cause):
        if w_cause is None:
            return
        # ensure w_cause is of a valid type
        if space.is_none(w_cause):
            pass
        else:
            self._exception_getclass(space, w_cause, "exception causes")
        w_value = self.get_w_value(space)
        space.setattr(w_value, space.newtext("__cause__"), w_cause)

    def get_w_traceback(self, space):
        """Return a traceback or w_None. """
        tb = self.get_traceback()
        if tb is None:
            return space.w_None
        return tb

    def got_any_traceback(self):
        return self._application_traceback is not None

    def set_traceback(self, traceback):
        """Set the current traceback."""
        self._application_traceback = traceback

    def remove_traceback_module_frames(self, *module_names):
        from pypy.interpreter.pytraceback import PyTraceback
        tb = self._application_traceback
        while tb is not None and isinstance(tb, PyTraceback):
            if tb.frame.pycode.co_filename not in module_names:
                break
            tb = tb.next
        self._application_traceback = tb

    def record_context(self, space, ec):
        """Record a __context__ for this exception if one exists.
        """
        if self._context_recorded:
            return
        last = ec.sys_exc_info()
        try:
            if last is not None:
                self.chain_exceptions(space, last)
        finally:
            self._context_recorded = True

    def chain_exceptions(self, space, context):
        """Attach another OperationError as __context__."""
        self.normalize_exception(space)
        w_value = self.get_w_value(space)
        context.normalize_exception(space)
        w_context = context.get_w_value(space)
        if not space.is_w(w_value, w_context):
            _break_context_cycle(space, w_value, w_context)
            space.setattr(w_value, space.newtext('__context__'), w_context)

    def chain_exceptions_from_cause(self, space, exception):
        # XXX does this code really make sense?
        self.chain_exceptions(space, exception)
        self.set_cause(space, exception.get_w_value(space))
        self.record_context(space, space.getexecutioncontext())

    # A simplified version of _PyErr_TrySetFromCause, which returns a
    # new exception of the same class, but with another error message.
    # This only works for exceptions which have just a single message,
    # and no other attribute.
    # Otherwise the same OperationError is returned.
    def try_set_from_cause(self, space, message):
        from pypy.module.exceptions.interp_exceptions import W_BaseException
        self.normalize_exception(space)
        w_value = self.get_w_value(space)
        if not isinstance(w_value, W_BaseException):
            return self
        exc = w_value
        # "args" should be empty or contain a single string
        if len(exc.args_w) == 0:
            pass
        elif len(exc.args_w) == 1:
            if not space.isinstance_w(exc.args_w[0], space.w_unicode):
                return self
        else:
            return self
        # No instance attribute.
        if exc.w_dict and space.is_true(exc.w_dict):
            return self
        # Try to create the new exception.
        try:
            new_error = oefmt(space.type(w_value),
                              "%s (%T: %S)", message, w_value, w_value)
            new_error.normalize_exception(space)
            new_error.set_cause(space, w_value)
            # Copy the traceback, but it does not escape.
            new_error.set_traceback(self._application_traceback)
        except OperationError:
            # Return the original error
            return self
        return new_error


def _break_context_cycle(space, w_value, w_context):
    """Break reference cycles in the __context__ chain.

    This is O(chain length) but context chains are usually very short
    """
    while True:
        w_next = space.getattr(w_context, space.newtext('__context__'))
        if space.is_w(w_next, space.w_None):
            break
        if space.is_w(w_next, w_value):
            space.setattr(w_context, space.newtext('__context__'), space.w_None)
            break
        w_context = w_next


class ClearedOpErr:
    def __init__(self, space):
        self.operr = OperationError(space.w_None, space.w_None)

def get_cleared_operation_error(space):
    return space.fromcache(ClearedOpErr).operr

# ____________________________________________________________
# optimization only: avoid the slowest operation -- the string
# formatting with '%' -- in the common case were we don't
# actually need the message.  Only supports %s and %d.

_fmtcache = {}
_fmtcache2 = {}
_FMTS = tuple('8NRSTds')

def decompose_valuefmt(valuefmt):
    """Returns a tuple of string parts extracted from valuefmt,
    and a tuple of format characters."""
    formats = []
    parts = valuefmt.split('%')
    i = 1
    while i < len(parts):
        if parts[i].startswith(_FMTS):
            formats.append(parts[i][0])
            parts[i] = parts[i][1:]
            i += 1
        elif parts[i] == '':    # support for '%%'
            parts[i-1] += '%' + parts[i+1]
            del parts[i:i+2]
        else:
            fmts = '%%%s or %%%s' % (', %'.join(_FMTS[:-1]), _FMTS[-1])
            raise ValueError("invalid format string (only %s supported)" %
                             fmts)
    assert len(formats) > 0, "unsupported: no % command found"
    return tuple(parts), tuple(formats)

def get_operrcls2(valuefmt):
    strings, formats = decompose_valuefmt(valuefmt)
    assert len(strings) == len(formats) + 1
    try:
        OpErrFmt = _fmtcache2[formats]
    except KeyError:
        from rpython.rlib.unroll import unrolling_iterable
        attrs = ['x%d' % i for i in range(len(formats))]
        entries = unrolling_iterable(zip(itertools.count(), formats, attrs))

        class OpErrFmt(OperationError):
            def __init__(self, w_type, strings, *args):
                assert len(args) == len(strings) - 1
                self.xstrings = strings
                for i, _, attr in entries:
                    setattr(self, attr, args[i])
                self.setup(w_type)

            def _compute_value(self, space):
                lst = [None] * (len(formats) + len(formats) + 1)
                lgt = 0
                for i, fmt, attr in entries:
                    lst[i + i] = self.xstrings[i]
                    lgt += len(self.xstrings[i])
                    value = getattr(self, attr)
                    if fmt == 'd':
                        result = str(value)
                        lgt += len(result)
                    elif fmt == 'R':
                        s = space.repr(value)
                        result = space.utf8_w(s)
                        lgt += space.len_w(s)
                    elif fmt == 'S':
                        s = space.str(value)
                        result = space.utf8_w(s)
                        lgt += space.len_w(s)
                    # FIXME rocky:  reinstate when needed
                    # elif fmt == 'T':
                    #     result = space.type(value).name
                    #     lgt += rutf8.codepoints_in_utf8(result)
                    elif fmt == 'N':
                        result = value.getname(space)
                        lgt += len(result)
                    elif fmt == '8':
                        # u'str\uxxxx' -> 'str\xXX\xXX' -> u"'str\xXX\xXX'"
                        from pypy.interpreter import unicodehelper
                        result, _lgt, pos  = unicodehelper.str_decode_utf8(
                            value, 'replace', True,
                            unicodehelper.decode_never_raise, True)
                        lgt += _lgt
                    elif isinstance(value, unicode):
                        # 's'
                        result = str(value.encode('utf-8'))
                        lgt += len(value)
                    # FIXME rocky: reinstate when needed
                    # else:
                    #     result = str(value)
                    #     try:
                    #         lgt += rutf8.check_utf8(result, True)
                    #     except rutf8.CheckError as e:
                    #         lgt -= e.pos
                    lst[i + i + 1] = result
                lst[-1] = self.xstrings[-1]
                lgt += len(self.xstrings[-1])
                retval = ''.join(lst)
                return retval, lgt

        _fmtcache2[formats] = OpErrFmt
    return OpErrFmt, strings

class OpErrFmtNoArgs(OperationError):
    def __init__(self, w_type, value):
        self._value = value
        self.setup(w_type)

    def _compute_value(self, space):
        return self._value, len(self._value)

    def _async(self, space):
        # also matches a RuntimeError("maximum rec.") if the stack is
        # still almost full, because in this case it might be a better
        # idea to propagate the exception than eat it
        if (self.w_type is space.w_RecursionError and
            self._value == "maximum recursion depth exceeded"):
            return True
        return OperationError._async(self, space)

def get_operr_class(valuefmt):
    try:
        result = _fmtcache[valuefmt]
    except KeyError:
        result = _fmtcache[valuefmt] = get_operrcls2(valuefmt)
    return result

def oefmt(w_type, valuefmt, *args):
    """Equivalent to OperationError(w_type, space.newtext(valuefmt % args)).
    More efficient in the (common) case where the value is not actually
    needed. Note that in the py3k branch the exception message will
    always be unicode.

    Supports the standard %s and %d formats, plus the following:

    %8 - The result of arg.decode('utf-8')
    %N - The result of w_arg.getname(space)
    %R - The result of space.utf8_w(space.repr(w_arg))
    %S - The result of space.utf8_w(space.str(w_arg))
    %T - The result of space.type(w_arg).name

    """
    if not len(args):
        return OpErrFmtNoArgs(w_type, valuefmt)
    OpErrFmt, strings = get_operr_class(valuefmt)
    return OpErrFmt(w_type, strings, *args)

def exception_from_errno(space, w_type, errno):
    msg, lgt = strerror(errno)
    w_error = space.call_function(w_type, space.newint(errno),
                                  space.newtext(msg, lgt))
    return OperationError(w_type, w_error)

def exception_from_saved_errno(space, w_type):
    from rpython.rlib.rposix import get_saved_errno
    errno = get_saved_errno()
    return exception_from_errno(space, w_type, errno)

def new_exception_class(space, name, w_bases=None, w_dict=None):
    """Create a new exception type.
    @param name: the name of the type.
    @param w_bases: Either an exception type, or a wrapped tuple of
                    exception types.  default is space.w_Exception.
    @param w_dict: an optional dictionary to populate the class __dict__.
    """
    if '.' in name:
        module, name = name.rsplit('.', 1)
    else:
        module = None
    if w_bases is None:
        w_bases = space.newtuple([space.w_Exception])
    elif not space.isinstance_w(w_bases, space.w_tuple):
        w_bases = space.newtuple([w_bases])
    if w_dict is None:
        w_dict = space.newdict()
    w_exc = space.call_function(
        space.w_type, space.newtext(name), w_bases, w_dict)
    if module:
        space.setattr(w_exc, space.newtext("__module__"), space.newtext(module))
    return w_exc

def new_import_error(space, w_msg, w_name, w_path):
    """Create a new instance of ImportError.

    The result corresponds to ImportError(msg, name=name, path=path)
    """
    return space.appexec(
        [w_msg, w_name, w_path], """(msg, name, path):
            return ImportError(msg, name=name, path=path)""")

def raise_import_error(space, w_msg, w_name, w_path):
    w_exc = new_import_error(space, w_msg, w_name, w_path)
    raise OperationError(space.w_ImportError, w_exc)
