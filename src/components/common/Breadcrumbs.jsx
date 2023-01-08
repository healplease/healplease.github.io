import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ breadcrumbs }) => {
    return (
        <Breadcrumb style={{ margin: "1em 0" }}>
            {breadcrumbs.map((breadcrumb) => (
                <Breadcrumb.Item key={breadcrumb.id}>
                    { breadcrumb.active ? (<span>{breadcrumb.name}</span>) : ( <Link to={breadcrumb.path}>{breadcrumb.name}</Link> ) }
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    )
}

export default Breadcrumbs;
