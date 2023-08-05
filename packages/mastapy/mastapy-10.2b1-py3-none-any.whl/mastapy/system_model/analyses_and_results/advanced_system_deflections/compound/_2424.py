﻿'''_2424.py

MassDiscCompoundAdvancedSystemDeflection
'''


from typing import List

from mastapy.system_model.part_model import _1926
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.advanced_system_deflections import _3450
from mastapy.system_model.analyses_and_results.advanced_system_deflections.compound import _2435
from mastapy._internal.python_net import python_net_import

_MASS_DISC_COMPOUND_ADVANCED_SYSTEM_DEFLECTION = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.AdvancedSystemDeflections.Compound', 'MassDiscCompoundAdvancedSystemDeflection')


__docformat__ = 'restructuredtext en'
__all__ = ('MassDiscCompoundAdvancedSystemDeflection',)


class MassDiscCompoundAdvancedSystemDeflection(_2435.VirtualComponentCompoundAdvancedSystemDeflection):
    '''MassDiscCompoundAdvancedSystemDeflection

    This is a mastapy class.
    '''

    TYPE = _MASS_DISC_COMPOUND_ADVANCED_SYSTEM_DEFLECTION
    __hash__ = None

    def __init__(self, instance_to_wrap: 'MassDiscCompoundAdvancedSystemDeflection.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_1926.MassDisc':
        '''MassDisc: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1926.MassDisc)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def load_case_analyses_ready(self) -> 'List[_3450.MassDiscAdvancedSystemDeflection]':
        '''List[MassDiscAdvancedSystemDeflection]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_3450.MassDiscAdvancedSystemDeflection))
        return value

    @property
    def component_advanced_system_deflection_load_cases(self) -> 'List[_3450.MassDiscAdvancedSystemDeflection]':
        '''List[MassDiscAdvancedSystemDeflection]: 'ComponentAdvancedSystemDeflectionLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ComponentAdvancedSystemDeflectionLoadCases, constructor.new(_3450.MassDiscAdvancedSystemDeflection))
        return value

    @property
    def planetaries(self) -> 'List[MassDiscCompoundAdvancedSystemDeflection]':
        '''List[MassDiscCompoundAdvancedSystemDeflection]: 'Planetaries' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.Planetaries, constructor.new(MassDiscCompoundAdvancedSystemDeflection))
        return value
