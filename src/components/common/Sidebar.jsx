import React from "react";
import { Layout } from "antd";

import Menu from "./Menu";
import Logo from "./Logo";
import { useCollapse } from "../../hooks/useCollapse";
import useDarkMode from "../../hooks/useDarkMode";

const { Sider } = Layout;


const Sidebar = () => {
    const [ collapsed, toggleCollapsed ] = useCollapse();
    const darkMode = useDarkMode();

    return (
        <Sider
            theme={darkMode.on ? "dark" : "light"}
            collapsible
            collapsed={collapsed}
            onCollapse={toggleCollapsed}
        >
            <Logo collapsed={collapsed} />
            <Menu collapsed={collapsed} />
        </Sider>
    );
}

export default Sidebar;
