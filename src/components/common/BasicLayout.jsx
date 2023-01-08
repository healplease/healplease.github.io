import React from "react";
import { Layout } from "antd";

import { Outlet } from "react-router-dom";

const BasicLayout = () => {

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Outlet />
        </Layout>
    );
};

export default BasicLayout;
