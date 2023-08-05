﻿'''_1068.py

BacklashDistributionRule
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_BACKLASH_DISTRIBUTION_RULE = python_net_import('SMT.MastaAPI.Gears.GearDesigns.Conical', 'BacklashDistributionRule')


__docformat__ = 'restructuredtext en'
__all__ = ('BacklashDistributionRule',)


class BacklashDistributionRule(Enum):
    '''BacklashDistributionRule

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _BACKLASH_DISTRIBUTION_RULE
    __hash__ = None

    AUTO = 0
    ALL_ON_PINION = 1
    ALL_ON_WHEEL = 2
    DISTRIBUTED_EQUALLY = 3
