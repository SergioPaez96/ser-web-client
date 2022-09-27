import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { Layout } from "antd";

import useAuth from '../hooks/useAuth';
import { getAccessTokenApi, getRefreshTokenApi } from "../api/auth";

import MenuTop from "../components/Admin/MenuTop/MenuTop";
import MenuSider from "../components/Admin/MenuSider/MenuSider";
import SignIn from "../pages/Admin/SignIn/SignIn";

import "./LayoutAdmin.scss";
import Admin from "../pages/Admin";

export default function LayoutAdmin(props) {
  const { routes } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const token = getAccessTokenApi();
  const rToken = getRefreshTokenApi();
  const { user, isLoading } = useAuth();

  if (!user && !isLoading) {
    return (
      <>
        <Route path='/admin/login' component={SignIn} />
        <Redirect to='/admin/login' />
      </>
    );
  }

  if (user && !isLoading) {
    return (
      <Layout>
        <MenuSider menuCollapsed={menuCollapsed} />
        <Layout
          className='layout-admin'
          style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}>
          <Header className='layout-admin__header'>
            <MenuTop
              menuCollapsed={menuCollapsed}
              setMenuCollapsed={setMenuCollapsed}
            />
          </Header>
          <Content className='layout-admin__content'>
            <LoadRouters routes={routes} />
          </Content>
          <Footer className='layout-admin__footer'>Sergio Paez</Footer>
        </Layout>
      </Layout>
    );
  }

  return null;
}

function LoadRouters({ routes }) {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ))
}
