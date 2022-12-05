import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "./index.css";
import { Outlet, useNavigate } from "react-router-dom";
import { HeaderMenu } from "./HeaderMenu";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const menuclick = (e: any) => {
    switch (e.key) {
      case "1":
        navigate("/manage/home");
        break;
      case "2":
        navigate("/manage/client");
        break;
      case "3":
        navigate("/manage/cleaner");
        break;
      case "4":
        navigate("/manage/message");
        break;
      case "5":
        navigate("/manage/shopping");
        break;
      case "6":
        navigate("/manage/order");
        break;
    }
  };
  return (
    <Layout
      style={{
        height: "100vh",
        width: "100%",
        fontSize: "20px",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={menuclick}
          style={{ fontSize: "15px", padding: "10px 0" }}
          items={[
            {
              key: "1",
              icon: <BankOutlined />,
              label: "主页",
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: "用户管理",
            },
            {
              key: "3",
              icon: <UserOutlined />,
              label: "保洁管理",
            },
            {
              key: "4",
              icon: <UserOutlined />,
              label: "客服管理",
            },
            {
              key: "5",
              icon: <UserOutlined />,
              label: "保洁服务管理",
            },
            {
              key: "6",
              icon: <UserOutlined />,
              label: "订单管理",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: "0 20px", paddingRight: "40px" }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <HeaderMenu></HeaderMenu>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            display: "block",
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
