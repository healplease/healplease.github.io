import React from "react";
import { useRouteError } from "react-router-dom";
import { Button, Result } from "antd";


const Error = () => {
    const error = useRouteError();

    return (
        <Result 
            className="error"
            status={error.status}
            title={error.statusText}
            subtitle={error.message}
            extra={
                <Button type="primary" href="/">Back Home</Button>
            }
        />
    );
};

export default Error;
