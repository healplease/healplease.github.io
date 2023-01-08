import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const MainLayout = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar />
            <Outlet />
        </Layout>
    );
};

export default MainLayout;
