﻿'''_457.py

MountingConditionsOfPinionAndWheel
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_MOUNTING_CONDITIONS_OF_PINION_AND_WHEEL = python_net_import('SMT.MastaAPI.Gears.Rating.Iso10300', 'MountingConditionsOfPinionAndWheel')


__docformat__ = 'restructuredtext en'
__all__ = ('MountingConditionsOfPinionAndWheel',)


class MountingConditionsOfPinionAndWheel(Enum):
    '''MountingConditionsOfPinionAndWheel

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _MOUNTING_CONDITIONS_OF_PINION_AND_WHEEL
    __hash__ = None

    NEITHER_MEMBER_CANTILEVER_MOUNTED = 0
    ONE_MEMBER_CANTILEVER_MOUNTED = 1
    BOTH_MEMBER_CANTILEVER_MOUNTED = 2
