﻿'''_908.py

CandidateDisplayChoice
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_CANDIDATE_DISPLAY_CHOICE = python_net_import('SMT.MastaAPI.Gears.GearSetParetoOptimiser', 'CandidateDisplayChoice')


__docformat__ = 'restructuredtext en'
__all__ = ('CandidateDisplayChoice',)


class CandidateDisplayChoice(Enum):
    '''CandidateDisplayChoice

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _CANDIDATE_DISPLAY_CHOICE
    __hash__ = None

    ALL_FEASIBLE_CANDIDATES = 0
    CANDIDATES_AFTER_FILTERING = 1
    DOMINANT_CANDIDATES = 2
    CANDIDATES_SELECTED_IN_CHART = 3
