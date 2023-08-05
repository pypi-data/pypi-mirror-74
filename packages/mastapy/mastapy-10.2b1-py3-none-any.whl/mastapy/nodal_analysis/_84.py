﻿'''_84.py

RatingTypeForShaftReliability
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_RATING_TYPE_FOR_SHAFT_RELIABILITY = python_net_import('SMT.MastaAPI.NodalAnalysis', 'RatingTypeForShaftReliability')


__docformat__ = 'restructuredtext en'
__all__ = ('RatingTypeForShaftReliability',)


class RatingTypeForShaftReliability(Enum):
    '''RatingTypeForShaftReliability

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _RATING_TYPE_FOR_SHAFT_RELIABILITY
    __hash__ = None

    FATIGUE_FOR_FINITE_LIFE = 0
    FATIGUE_FOR_INFINITE_LIFE = 1
