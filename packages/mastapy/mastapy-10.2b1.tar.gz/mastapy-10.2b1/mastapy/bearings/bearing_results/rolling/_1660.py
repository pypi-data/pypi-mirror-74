﻿'''_1660.py

LoadedSelfAligningBallBearingRow
'''


from mastapy.bearings.bearing_results.rolling import _1659, _1626
from mastapy._internal import constructor
from mastapy._internal.python_net import python_net_import

_LOADED_SELF_ALIGNING_BALL_BEARING_ROW = python_net_import('SMT.MastaAPI.Bearings.BearingResults.Rolling', 'LoadedSelfAligningBallBearingRow')


__docformat__ = 'restructuredtext en'
__all__ = ('LoadedSelfAligningBallBearingRow',)


class LoadedSelfAligningBallBearingRow(_1626.LoadedBallBearingRow):
    '''LoadedSelfAligningBallBearingRow

    This is a mastapy class.
    '''

    TYPE = _LOADED_SELF_ALIGNING_BALL_BEARING_ROW

    __hash__ = None

    def __init__(self, instance_to_wrap: 'LoadedSelfAligningBallBearingRow.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def loaded_bearing(self) -> '_1659.LoadedSelfAligningBallBearingResults':
        '''LoadedSelfAligningBallBearingResults: 'LoadedBearing' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1659.LoadedSelfAligningBallBearingResults)(self.wrapped.LoadedBearing) if self.wrapped.LoadedBearing else None
