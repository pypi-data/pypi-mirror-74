﻿'''_1936.py

ShaftDiameterModificationDueToRollingBearingRing
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_SHAFT_DIAMETER_MODIFICATION_DUE_TO_ROLLING_BEARING_RING = python_net_import('SMT.MastaAPI.SystemModel.PartModel', 'ShaftDiameterModificationDueToRollingBearingRing')


__docformat__ = 'restructuredtext en'
__all__ = ('ShaftDiameterModificationDueToRollingBearingRing',)


class ShaftDiameterModificationDueToRollingBearingRing(Enum):
    '''ShaftDiameterModificationDueToRollingBearingRing

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _SHAFT_DIAMETER_MODIFICATION_DUE_TO_ROLLING_BEARING_RING
    __hash__ = None

    PRESERVE_RING_MASS = 0
    USE_RACE_DIAMETER = 1
    IGNORE_BEARING_RING = 2
