# Copyright (C) 2016-present the asyncpg authors and contributors
# <see AUTHORS file>
#
# This module is part of asyncpg and is released under
# the Apache 2.0 License: http://www.apache.org/licenses/LICENSE-2.0


cdef class CodecContext:

    cpdef get_text_codec(self):
        raise NotImplementedError

    cdef is_encoding_utf8(self):
        raise NotImplementedError
