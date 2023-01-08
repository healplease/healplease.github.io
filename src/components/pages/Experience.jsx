import React from "react";
import HomeLayout from "../common/HomeLayout";

const Experience = () => {
    const breadcrumbs = [
        {
            id: "exp",
            name: "Experience",
            path: "/experience",
            active: true,
        },
    ];

    return (
        <HomeLayout 
            breadcrumbs={breadcrumbs}
            content={
                <h1>Experience</h1>
            }
        />
    );
}

export default Experience;
