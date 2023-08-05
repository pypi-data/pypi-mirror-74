﻿'''_856.py

DrawDefiningGearOrBoth
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_DRAW_DEFINING_GEAR_OR_BOTH = python_net_import('SMT.MastaAPI.Gears.GearDesigns.Cylindrical.MicroGeometry', 'DrawDefiningGearOrBoth')


__docformat__ = 'restructuredtext en'
__all__ = ('DrawDefiningGearOrBoth',)


class DrawDefiningGearOrBoth(Enum):
    '''DrawDefiningGearOrBoth

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    @classmethod
    def type_(cls):
        return _DRAW_DEFINING_GEAR_OR_BOTH

    __hash__ = None

    DEFINING_GEAR = 0
    BOTH = 1
