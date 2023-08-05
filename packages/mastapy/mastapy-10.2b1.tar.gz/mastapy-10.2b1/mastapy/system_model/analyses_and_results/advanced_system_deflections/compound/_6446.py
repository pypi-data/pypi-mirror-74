﻿'''_6446.py

KlingelnbergCycloPalloidHypoidGearSetCompoundAdvancedSystemDeflection
'''


from typing import List

from mastapy.system_model.part_model.gears import _2095
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.advanced_system_deflections.compound import _6444, _6445, _6443
from mastapy.system_model.analyses_and_results.advanced_system_deflections import _6322
from mastapy._internal.python_net import python_net_import

_KLINGELNBERG_CYCLO_PALLOID_HYPOID_GEAR_SET_COMPOUND_ADVANCED_SYSTEM_DEFLECTION = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.AdvancedSystemDeflections.Compound', 'KlingelnbergCycloPalloidHypoidGearSetCompoundAdvancedSystemDeflection')


__docformat__ = 'restructuredtext en'
__all__ = ('KlingelnbergCycloPalloidHypoidGearSetCompoundAdvancedSystemDeflection',)


class KlingelnbergCycloPalloidHypoidGearSetCompoundAdvancedSystemDeflection(_6443.KlingelnbergCycloPalloidConicalGearSetCompoundAdvancedSystemDeflection):
    '''KlingelnbergCycloPalloidHypoidGearSetCompoundAdvancedSystemDeflection

    This is a mastapy class.
    '''

    TYPE = _KLINGELNBERG_CYCLO_PALLOID_HYPOID_GEAR_SET_COMPOUND_ADVANCED_SYSTEM_DEFLECTION

    __hash__ = None

    def __init__(self, instance_to_wrap: 'KlingelnbergCycloPalloidHypoidGearSetCompoundAdvancedSystemDeflection.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2095.KlingelnbergCycloPalloidHypoidGearSet':
        '''KlingelnbergCycloPalloidHypoidGearSet: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2095.KlingelnbergCycloPalloidHypoidGearSet)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def assembly_design(self) -> '_2095.KlingelnbergCycloPalloidHypoidGearSet':
        '''KlingelnbergCycloPalloidHypoidGearSet: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2095.KlingelnbergCycloPalloidHypoidGearSet)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def klingelnberg_cyclo_palloid_hypoid_gears_compound_advanced_system_deflection(self) -> 'List[_6444.KlingelnbergCycloPalloidHypoidGearCompoundAdvancedSystemDeflection]':
        '''List[KlingelnbergCycloPalloidHypoidGearCompoundAdvancedSystemDeflection]: 'KlingelnbergCycloPalloidHypoidGearsCompoundAdvancedSystemDeflection' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.KlingelnbergCycloPalloidHypoidGearsCompoundAdvancedSystemDeflection, constructor.new(_6444.KlingelnbergCycloPalloidHypoidGearCompoundAdvancedSystemDeflection))
        return value

    @property
    def klingelnberg_cyclo_palloid_hypoid_meshes_compound_advanced_system_deflection(self) -> 'List[_6445.KlingelnbergCycloPalloidHypoidGearMeshCompoundAdvancedSystemDeflection]':
        '''List[KlingelnbergCycloPalloidHypoidGearMeshCompoundAdvancedSystemDeflection]: 'KlingelnbergCycloPalloidHypoidMeshesCompoundAdvancedSystemDeflection' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.KlingelnbergCycloPalloidHypoidMeshesCompoundAdvancedSystemDeflection, constructor.new(_6445.KlingelnbergCycloPalloidHypoidGearMeshCompoundAdvancedSystemDeflection))
        return value

    @property
    def load_case_analyses_ready(self) -> 'List[_6322.KlingelnbergCycloPalloidHypoidGearSetAdvancedSystemDeflection]':
        '''List[KlingelnbergCycloPalloidHypoidGearSetAdvancedSystemDeflection]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_6322.KlingelnbergCycloPalloidHypoidGearSetAdvancedSystemDeflection))
        return value

    @property
    def assembly_advanced_system_deflection_load_cases(self) -> 'List[_6322.KlingelnbergCycloPalloidHypoidGearSetAdvancedSystemDeflection]':
        '''List[KlingelnbergCycloPalloidHypoidGearSetAdvancedSystemDeflection]: 'AssemblyAdvancedSystemDeflectionLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.AssemblyAdvancedSystemDeflectionLoadCases, constructor.new(_6322.KlingelnbergCycloPalloidHypoidGearSetAdvancedSystemDeflection))
        return value
