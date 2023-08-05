﻿'''_2317.py

BevelDifferentialPlanetGearLoadCase
'''


from mastapy.system_model.part_model.gears import _2008
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _2315
from mastapy._internal.python_net import python_net_import

_BEVEL_DIFFERENTIAL_PLANET_GEAR_LOAD_CASE = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.StaticLoads', 'BevelDifferentialPlanetGearLoadCase')


__docformat__ = 'restructuredtext en'
__all__ = ('BevelDifferentialPlanetGearLoadCase',)


class BevelDifferentialPlanetGearLoadCase(_2315.BevelDifferentialGearLoadCase):
    '''BevelDifferentialPlanetGearLoadCase

    This is a mastapy class.
    '''

    TYPE = _BEVEL_DIFFERENTIAL_PLANET_GEAR_LOAD_CASE
    __hash__ = None

    def __init__(self, instance_to_wrap: 'BevelDifferentialPlanetGearLoadCase.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2008.BevelDifferentialPlanetGear':
        '''BevelDifferentialPlanetGear: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2008.BevelDifferentialPlanetGear)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None
