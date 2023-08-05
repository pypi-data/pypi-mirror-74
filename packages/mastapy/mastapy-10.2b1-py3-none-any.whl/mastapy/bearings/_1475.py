﻿'''_1475.py

JournalBearingType
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_JOURNAL_BEARING_TYPE = python_net_import('SMT.MastaAPI.Bearings', 'JournalBearingType')


__docformat__ = 'restructuredtext en'
__all__ = ('JournalBearingType',)


class JournalBearingType(Enum):
    '''JournalBearingType

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _JOURNAL_BEARING_TYPE
    __hash__ = None

    PLAIN_OIL_FED = 0
    PLAIN_GREASE_FILLED = 1
