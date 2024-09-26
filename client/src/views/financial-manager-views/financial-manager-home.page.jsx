import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/@user_type/financial-component/Sidebar.component'
import RighSidebar from '../../components/@user_type/financial-component/RightSidebar.component'
import Dashboard from '../../components/@user_type/financial-component/Dashbord.component'

function FApp() {
  return (
    <Div>
      <Sidebar />
      <Dashboard />
      <RighSidebar />
    </Div>
  );
}

export default FApp;
const Div = styled.div `
position: relative;
`;