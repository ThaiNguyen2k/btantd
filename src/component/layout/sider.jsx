import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  ShoppingCartOutlined,
  AppstoreAddOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<NavLink to={"/"}>Home</NavLink>, "1", <PieChartOutlined />),
  getItem(<NavLink to={"/users"}>User</NavLink>, "2", <UserOutlined />),
  getItem(
    <NavLink to={"/customers"}>Customer</NavLink>,
    "3",
    <UsergroupAddOutlined />
  ),
  getItem(
    <NavLink to="/product">Product</NavLink>,
    "4",
    <ShoppingCartOutlined />
  ),
  getItem(<NavLink to="/orders">Orders</NavLink>, "5", <AppstoreAddOutlined />),
  getItem(<NavLink to="/Coupon">Coupon</NavLink>, "6", <TagOutlined />),

  // getItem('User', 'sub1', <UserOutlined />, [
  //   getItem('Tom', '3'),
  //   getItem('Bill', '4'),
  //   getItem('Alex', '5'),
  // ]),
  // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  // getItem('Files', '9', <FileOutlined />),
];
const SiderL = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [value, setValue] = useState("");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100%",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
    </Layout>
  );
};
export default SiderL;
