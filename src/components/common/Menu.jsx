import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
    HomeOutlined,
    FrownOutlined,
    DesktopOutlined,
  } from "@ant-design/icons";


const SidebarMenu = () => {
    const items = [
        {
            id: "home",
            label: <Link to="/">Home</Link>,
            icon: <HomeOutlined />,
        },
        {
            id: "me",
            label: <Link to="/me">About Me</Link>,
            icon: <FrownOutlined />,
        },
        {
            id: "exp",
            label: <Link to="/experience">Experience</Link>,
            icon: <DesktopOutlined />,
        },
    ]

    return (
        <Menu style={{ padding: 16 }} theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
    );
};

export default SidebarMenu;
