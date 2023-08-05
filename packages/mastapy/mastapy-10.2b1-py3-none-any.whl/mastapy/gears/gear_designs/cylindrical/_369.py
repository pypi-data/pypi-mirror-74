﻿'''_369.py

TolerancedMetalMeasurements
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_TOLERANCED_METAL_MEASUREMENTS = python_net_import('SMT.MastaAPI.Gears.GearDesigns.Cylindrical', 'TolerancedMetalMeasurements')


__docformat__ = 'restructuredtext en'
__all__ = ('TolerancedMetalMeasurements',)


class TolerancedMetalMeasurements(Enum):
    '''TolerancedMetalMeasurements

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _TOLERANCED_METAL_MEASUREMENTS
    __hash__ = None

    MINIMUM_THICKNESS = 0
    AVERAGE_THICKNESS = 1
    MAXIMUM_THICKNESS = 2
