import React, { useState } from "react";
import { Layout, theme } from "antd";

import SidebarMenu from "./Menu.jsx";
import Breadcrumbs from "./Breadcrumbs.jsx";

const { Header, Content, Footer, Sider } = Layout;

const HomeLayout = ({ breadcrumbs, content }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { token: { colorBgContainer }} = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }}/>
                <SidebarMenu />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ background: colorBgContainer }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                    <div style={{
                            padding: "1em",
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        {content}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', background: colorBgContainer }}>
                </Footer>
            </Layout>
      </Layout>
    );
};

export default HomeLayout;
