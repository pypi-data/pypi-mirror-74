﻿'''_2556.py

CylindricalGearCompoundSystemDeflection
'''


from typing import List

from mastapy.gears.rating.cylindrical import _472
from mastapy._internal import constructor, conversion
from mastapy.system_model.part_model.gears import _1996
from mastapy.system_model.analyses_and_results.system_deflections import _2376
from mastapy.system_model.analyses_and_results.system_deflections.compound import _2566
from mastapy._internal.python_net import python_net_import

_CYLINDRICAL_GEAR_COMPOUND_SYSTEM_DEFLECTION = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.SystemDeflections.Compound', 'CylindricalGearCompoundSystemDeflection')


__docformat__ = 'restructuredtext en'
__all__ = ('CylindricalGearCompoundSystemDeflection',)


class CylindricalGearCompoundSystemDeflection(_2566.GearCompoundSystemDeflection):
    '''CylindricalGearCompoundSystemDeflection

    This is a mastapy class.
    '''

    TYPE = _CYLINDRICAL_GEAR_COMPOUND_SYSTEM_DEFLECTION
    __hash__ = None

    def __init__(self, instance_to_wrap: 'CylindricalGearCompoundSystemDeflection.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def duty_cycle_rating(self) -> '_472.CylindricalGearDutyCycleRating':
        '''CylindricalGearDutyCycleRating: 'DutyCycleRating' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_472.CylindricalGearDutyCycleRating)(self.wrapped.DutyCycleRating) if self.wrapped.DutyCycleRating else None

    @property
    def cylindrical_duty_cycle_rating(self) -> '_472.CylindricalGearDutyCycleRating':
        '''CylindricalGearDutyCycleRating: 'CylindricalDutyCycleRating' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_472.CylindricalGearDutyCycleRating)(self.wrapped.CylindricalDutyCycleRating) if self.wrapped.CylindricalDutyCycleRating else None

    @property
    def component_design(self) -> '_1996.CylindricalGear':
        '''CylindricalGear: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1996.CylindricalGear)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def load_case_analyses_ready(self) -> 'List[_2376.CylindricalGearSystemDeflection]':
        '''List[CylindricalGearSystemDeflection]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_2376.CylindricalGearSystemDeflection))
        return value

    @property
    def component_system_deflection_load_cases(self) -> 'List[_2376.CylindricalGearSystemDeflection]':
        '''List[CylindricalGearSystemDeflection]: 'ComponentSystemDeflectionLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ComponentSystemDeflectionLoadCases, constructor.new(_2376.CylindricalGearSystemDeflection))
        return value

    @property
    def planetaries(self) -> 'List[CylindricalGearCompoundSystemDeflection]':
        '''List[CylindricalGearCompoundSystemDeflection]: 'Planetaries' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.Planetaries, constructor.new(CylindricalGearCompoundSystemDeflection))
        return value
