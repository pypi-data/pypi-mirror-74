﻿'''_3444.py

RollingRingConnectionCompoundPowerFlow
'''


from typing import List

from mastapy.system_model.connections_and_sockets import _1867
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.power_flows import _3321
from mastapy.system_model.analyses_and_results.power_flows.compound import _3418
from mastapy._internal.python_net import python_net_import

_ROLLING_RING_CONNECTION_COMPOUND_POWER_FLOW = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.PowerFlows.Compound', 'RollingRingConnectionCompoundPowerFlow')


__docformat__ = 'restructuredtext en'
__all__ = ('RollingRingConnectionCompoundPowerFlow',)


class RollingRingConnectionCompoundPowerFlow(_3418.InterMountableComponentConnectionCompoundPowerFlow):
    '''RollingRingConnectionCompoundPowerFlow

    This is a mastapy class.
    '''

    TYPE = _ROLLING_RING_CONNECTION_COMPOUND_POWER_FLOW

    __hash__ = None

    def __init__(self, instance_to_wrap: 'RollingRingConnectionCompoundPowerFlow.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_1867.RollingRingConnection':
        '''RollingRingConnection: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1867.RollingRingConnection)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def connection_design(self) -> '_1867.RollingRingConnection':
        '''RollingRingConnection: 'ConnectionDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1867.RollingRingConnection)(self.wrapped.ConnectionDesign) if self.wrapped.ConnectionDesign else None

    @property
    def load_case_analyses_ready(self) -> 'List[_3321.RollingRingConnectionPowerFlow]':
        '''List[RollingRingConnectionPowerFlow]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_3321.RollingRingConnectionPowerFlow))
        return value

    @property
    def connection_power_flow_load_cases(self) -> 'List[_3321.RollingRingConnectionPowerFlow]':
        '''List[RollingRingConnectionPowerFlow]: 'ConnectionPowerFlowLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ConnectionPowerFlowLoadCases, constructor.new(_3321.RollingRingConnectionPowerFlow))
        return value
