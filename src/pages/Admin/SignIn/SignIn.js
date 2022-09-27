import React from "react";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import { getAccessTokenApi } from "../../../api/auth";

import SerLogo from "../../../assets/img/png/SerLogo.png";
import RegisterForm from "../../../components/Admin/RegisterForm/RegisterForm";

import "./SignIn.scss";
import LoginForm from "../../../components/Admin/LoginForm/LoginForm";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  if(getAccessTokenApi()){
    return (
      <Redirect to="/admin" />
    )
  }
  return (
    <Layout className='sign-in'>
      <Content className='sign-in__content'>
        <h1 className='sign-in__content-logo'>
          <img src={SerLogo} alt='SerWeb' />
        </h1>

        <div className='sign-in__content-tabs'>
          <Tabs type='card'>
            <TabPane tab={<span>Entrar</span>} key='1'>
              <LoginForm />
            </TabPane>
            <TabPane tab={<span>Registrarse</span>} key='2'>
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
