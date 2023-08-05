﻿'''_2583.py

KlingelnbergCycloPalloidSpiralBevelGearSetCompoundSystemDeflection
'''


from typing import List

from mastapy.system_model.part_model.gears import _1985
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.system_deflections.compound import _2581, _2582, _2577
from mastapy.system_model.analyses_and_results.system_deflections import _2349
from mastapy._internal.python_net import python_net_import

_KLINGELNBERG_CYCLO_PALLOID_SPIRAL_BEVEL_GEAR_SET_COMPOUND_SYSTEM_DEFLECTION = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.SystemDeflections.Compound', 'KlingelnbergCycloPalloidSpiralBevelGearSetCompoundSystemDeflection')


__docformat__ = 'restructuredtext en'
__all__ = ('KlingelnbergCycloPalloidSpiralBevelGearSetCompoundSystemDeflection',)


class KlingelnbergCycloPalloidSpiralBevelGearSetCompoundSystemDeflection(_2577.KlingelnbergCycloPalloidConicalGearSetCompoundSystemDeflection):
    '''KlingelnbergCycloPalloidSpiralBevelGearSetCompoundSystemDeflection

    This is a mastapy class.
    '''

    TYPE = _KLINGELNBERG_CYCLO_PALLOID_SPIRAL_BEVEL_GEAR_SET_COMPOUND_SYSTEM_DEFLECTION
    __hash__ = None

    def __init__(self, instance_to_wrap: 'KlingelnbergCycloPalloidSpiralBevelGearSetCompoundSystemDeflection.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_1985.KlingelnbergCycloPalloidSpiralBevelGearSet':
        '''KlingelnbergCycloPalloidSpiralBevelGearSet: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1985.KlingelnbergCycloPalloidSpiralBevelGearSet)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def assembly_design(self) -> '_1985.KlingelnbergCycloPalloidSpiralBevelGearSet':
        '''KlingelnbergCycloPalloidSpiralBevelGearSet: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1985.KlingelnbergCycloPalloidSpiralBevelGearSet)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def klingelnberg_cyclo_palloid_spiral_bevel_gears_compound_system_deflection(self) -> 'List[_2581.KlingelnbergCycloPalloidSpiralBevelGearCompoundSystemDeflection]':
        '''List[KlingelnbergCycloPalloidSpiralBevelGearCompoundSystemDeflection]: 'KlingelnbergCycloPalloidSpiralBevelGearsCompoundSystemDeflection' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.KlingelnbergCycloPalloidSpiralBevelGearsCompoundSystemDeflection, constructor.new(_2581.KlingelnbergCycloPalloidSpiralBevelGearCompoundSystemDeflection))
        return value

    @property
    def klingelnberg_cyclo_palloid_spiral_bevel_meshes_compound_system_deflection(self) -> 'List[_2582.KlingelnbergCycloPalloidSpiralBevelGearMeshCompoundSystemDeflection]':
        '''List[KlingelnbergCycloPalloidSpiralBevelGearMeshCompoundSystemDeflection]: 'KlingelnbergCycloPalloidSpiralBevelMeshesCompoundSystemDeflection' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.KlingelnbergCycloPalloidSpiralBevelMeshesCompoundSystemDeflection, constructor.new(_2582.KlingelnbergCycloPalloidSpiralBevelGearMeshCompoundSystemDeflection))
        return value

    @property
    def load_case_analyses_ready(self) -> 'List[_2349.KlingelnbergCycloPalloidSpiralBevelGearSetSystemDeflection]':
        '''List[KlingelnbergCycloPalloidSpiralBevelGearSetSystemDeflection]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_2349.KlingelnbergCycloPalloidSpiralBevelGearSetSystemDeflection))
        return value

    @property
    def assembly_system_deflection_load_cases(self) -> 'List[_2349.KlingelnbergCycloPalloidSpiralBevelGearSetSystemDeflection]':
        '''List[KlingelnbergCycloPalloidSpiralBevelGearSetSystemDeflection]: 'AssemblySystemDeflectionLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.AssemblySystemDeflectionLoadCases, constructor.new(_2349.KlingelnbergCycloPalloidSpiralBevelGearSetSystemDeflection))
        return value
