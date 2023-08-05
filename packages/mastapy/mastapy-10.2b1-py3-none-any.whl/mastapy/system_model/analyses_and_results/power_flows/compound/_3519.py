﻿'''_3519.py

ShaftCompoundPowerFlow
'''


from typing import List

from mastapy.system_model.part_model.shaft_model import _1942
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.power_flows import _4170
from mastapy.system_model.analyses_and_results.power_flows.compound import _3496
from mastapy._internal.python_net import python_net_import

_SHAFT_COMPOUND_POWER_FLOW = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.PowerFlows.Compound', 'ShaftCompoundPowerFlow')


__docformat__ = 'restructuredtext en'
__all__ = ('ShaftCompoundPowerFlow',)


class ShaftCompoundPowerFlow(_3496.AbstractShaftOrHousingCompoundPowerFlow):
    '''ShaftCompoundPowerFlow

    This is a mastapy class.
    '''

    TYPE = _SHAFT_COMPOUND_POWER_FLOW
    __hash__ = None

    def __init__(self, instance_to_wrap: 'ShaftCompoundPowerFlow.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_1942.Shaft':
        '''Shaft: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1942.Shaft)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def load_case_analyses_ready(self) -> 'List[_4170.ShaftPowerFlow]':
        '''List[ShaftPowerFlow]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_4170.ShaftPowerFlow))
        return value

    @property
    def component_power_flow_load_cases(self) -> 'List[_4170.ShaftPowerFlow]':
        '''List[ShaftPowerFlow]: 'ComponentPowerFlowLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ComponentPowerFlowLoadCases, constructor.new(_4170.ShaftPowerFlow))
        return value
