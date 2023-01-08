import React from "react";
import { Layout } from "antd";

import Menu from "./Menu";
import Logo from "./Logo";
import { useCollapse } from "../../hooks/useCollapse";
import useDarkMode from "../../hooks/useDarkMode";
import DarkModeSwitch from "./DarkModeSwitch";

const { Sider } = Layout;


const Sidebar = () => {
    const [ collapsed, toggleCollapsed ] = useCollapse();
    const darkMode = useDarkMode();

    return (
        <Sider
            style={{
                background: darkMode.on ? "#001529" : "white",
            }}
            collapsible
            collapsed={collapsed}
            onCollapse={toggleCollapsed}
        >
            <Logo collapsed={collapsed} />
            <Menu collapsed={collapsed} />
            <div style={{ padding: "0 1rem" }}>
                <DarkModeSwitch />
            </div>
        </Sider>
    );
}

export default Sidebar;
