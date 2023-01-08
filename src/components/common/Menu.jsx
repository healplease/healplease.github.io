import React from "react";

import { Menu as ANTDMenu } from "antd";
import { HomeOutlined, LaptopOutlined, SettingOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

import DarkModeSwitch from "./DarkModeSwitch";
import useDarkMode from "../../hooks/useDarkMode";

const items = [
    {
        key: "1",
        icon: <HomeOutlined />,
        label: <Link to="/">Home</Link>,
    },
    {
        key: "2",
        icon: <LaptopOutlined />,
        label: <Link to="/experience">Experience</Link>,
    },
    {
        key: "4",
        icon: <SettingOutlined />,
        label: "Appearance",
        children: [
            {
                key: "4-1",
                icon: <DarkModeSwitch />,
                label: <span>Dark Mode</span>,
            },
        ],
    }
];

const Menu = ({ collapsed }) => {
    const darkMode = useDarkMode();
    const location = useLocation();
    
    // select url path from location
    const selectedKey = items.find(item => item.label.props.to === location.pathname)?.key;

    return (
        <ANTDMenu
            theme={ darkMode.on ? "dark" : "light" }
            mode={ collapsed ? "vertical" : "inline" }
            selectedKeys={[selectedKey]}
            items={items} 
        />
    );
};

export default Menu;
