﻿'''_1697.py

RollerEndShape
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_ROLLER_END_SHAPE = python_net_import('SMT.MastaAPI.Bearings.BearingDesigns.Rolling', 'RollerEndShape')


__docformat__ = 'restructuredtext en'
__all__ = ('RollerEndShape',)


class RollerEndShape(Enum):
    '''RollerEndShape

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _ROLLER_END_SHAPE
    __hash__ = None

    FLAT = 0
    DOMED = 1
