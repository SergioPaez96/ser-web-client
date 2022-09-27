import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const { children } = props;
  const { Content, Footer } = Layout;
  return (
    <Layout>
      <h2>Menu</h2>
      <Layout>
        <Content>
          {children}
        </Content>
        <Footer>Sergio Paez</Footer>
      </Layout>
    </Layout>
  );
}
