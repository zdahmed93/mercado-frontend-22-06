import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

const Sidebar = () => {
  return (
      <CDBSidebar style={{height: '100vh', position: 'sticky', top: 0 }}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Mercado</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="fa fa-home">Home</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="fa fa-plus-circle">Create Item</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="fa fa-user">Profile</CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter >
            <CDBSidebarMenuItem icon="fa fa-lock">Log Out</CDBSidebarMenuItem>
        </CDBSidebarFooter>
      </CDBSidebar>
  );
};

export default Sidebar;