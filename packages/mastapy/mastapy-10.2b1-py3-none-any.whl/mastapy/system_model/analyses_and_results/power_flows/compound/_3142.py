﻿'''_3142.py

BearingCompoundPowerFlow
'''


from typing import List

from mastapy.system_model.part_model import _1908
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.power_flows import _4176
from mastapy.system_model.analyses_and_results.power_flows.compound import _3146
from mastapy._internal.python_net import python_net_import

_BEARING_COMPOUND_POWER_FLOW = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.PowerFlows.Compound', 'BearingCompoundPowerFlow')


__docformat__ = 'restructuredtext en'
__all__ = ('BearingCompoundPowerFlow',)


class BearingCompoundPowerFlow(_3146.ConnectorCompoundPowerFlow):
    '''BearingCompoundPowerFlow

    This is a mastapy class.
    '''

    TYPE = _BEARING_COMPOUND_POWER_FLOW
    __hash__ = None

    def __init__(self, instance_to_wrap: 'BearingCompoundPowerFlow.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_1908.Bearing':
        '''Bearing: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1908.Bearing)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def load_case_analyses_ready(self) -> 'List[_4176.BearingPowerFlow]':
        '''List[BearingPowerFlow]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_4176.BearingPowerFlow))
        return value

    @property
    def component_power_flow_load_cases(self) -> 'List[_4176.BearingPowerFlow]':
        '''List[BearingPowerFlow]: 'ComponentPowerFlowLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ComponentPowerFlowLoadCases, constructor.new(_4176.BearingPowerFlow))
        return value
