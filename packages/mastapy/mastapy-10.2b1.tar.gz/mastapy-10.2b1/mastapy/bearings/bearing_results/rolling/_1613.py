﻿'''_1613.py

LoadedAsymmetricSphericalRollerBearingRow
'''


from mastapy.bearings.bearing_results.rolling import _1612, _1653
from mastapy._internal import constructor
from mastapy._internal.python_net import python_net_import

_LOADED_ASYMMETRIC_SPHERICAL_ROLLER_BEARING_ROW = python_net_import('SMT.MastaAPI.Bearings.BearingResults.Rolling', 'LoadedAsymmetricSphericalRollerBearingRow')


__docformat__ = 'restructuredtext en'
__all__ = ('LoadedAsymmetricSphericalRollerBearingRow',)


class LoadedAsymmetricSphericalRollerBearingRow(_1653.LoadedRollerBearingRow):
    '''LoadedAsymmetricSphericalRollerBearingRow

    This is a mastapy class.
    '''

    TYPE = _LOADED_ASYMMETRIC_SPHERICAL_ROLLER_BEARING_ROW

    __hash__ = None

    def __init__(self, instance_to_wrap: 'LoadedAsymmetricSphericalRollerBearingRow.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def loaded_bearing(self) -> '_1612.LoadedAsymmetricSphericalRollerBearingResults':
        '''LoadedAsymmetricSphericalRollerBearingResults: 'LoadedBearing' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1612.LoadedAsymmetricSphericalRollerBearingResults)(self.wrapped.LoadedBearing) if self.wrapped.LoadedBearing else None
