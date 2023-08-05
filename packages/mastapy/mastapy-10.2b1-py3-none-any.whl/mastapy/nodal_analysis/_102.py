﻿'''_102.py

ModeInputType
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_MODE_INPUT_TYPE = python_net_import('SMT.MastaAPI.NodalAnalysis', 'ModeInputType')


__docformat__ = 'restructuredtext en'
__all__ = ('ModeInputType',)


class ModeInputType(Enum):
    '''ModeInputType

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _MODE_INPUT_TYPE
    __hash__ = None

    NO_MODES = 0
    ALL_IN_RANGE = 1
    LOWEST_IN_RANGE = 2
    NEAREST_TO_SHIFT = 3
