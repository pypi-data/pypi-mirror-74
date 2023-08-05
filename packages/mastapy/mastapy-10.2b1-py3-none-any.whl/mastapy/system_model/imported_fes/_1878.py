﻿'''_1878.py

IndependentMastaCreatedCondensationNode
'''


from typing import Callable

from mastapy.nodal_analysis.dev_tools_analyses import _207
from mastapy._internal import constructor, conversion
from mastapy._internal.vector_3d import Vector3D
from mastapy.system_model.imported_fes import _1871
from mastapy import _1
from mastapy._internal.python_net import python_net_import

_INDEPENDENT_MASTA_CREATED_CONDENSATION_NODE = python_net_import('SMT.MastaAPI.SystemModel.ImportedFEs', 'IndependentMastaCreatedCondensationNode')


__docformat__ = 'restructuredtext en'
__all__ = ('IndependentMastaCreatedCondensationNode',)


class IndependentMastaCreatedCondensationNode(_1.APIBase):
    '''IndependentMastaCreatedCondensationNode

    This is a mastapy class.
    '''

    TYPE = _INDEPENDENT_MASTA_CREATED_CONDENSATION_NODE
    __hash__ = None

    def __init__(self, instance_to_wrap: 'IndependentMastaCreatedCondensationNode.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def rigid_coupling_type(self) -> '_207.RigidCouplingType':
        '''RigidCouplingType: 'RigidCouplingType' is the original name of this property.'''

        value = conversion.pn_to_mp_enum(self.wrapped.RigidCouplingType)
        return constructor.new(_207.RigidCouplingType)(value) if value else None

    @rigid_coupling_type.setter
    def rigid_coupling_type(self, value: '_207.RigidCouplingType'):
        value = value if value else None
        value = conversion.mp_to_pn_enum(value)
        self.wrapped.RigidCouplingType = value

    @property
    def delete(self) -> 'Callable[[], None]':
        '''Callable[[], None]: 'Delete' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.Delete

    @property
    def node_position(self) -> 'Vector3D':
        '''Vector3D: 'NodePosition' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_vector3d(self.wrapped.NodePosition)
        return value

    @property
    def imported_fe_node(self) -> '_1871.ImportedFEStiffnessNode':
        '''ImportedFEStiffnessNode: 'ImportedFENode' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1871.ImportedFEStiffnessNode)(self.wrapped.ImportedFENode) if self.wrapped.ImportedFENode else None
