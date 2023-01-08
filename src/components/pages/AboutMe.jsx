import React from "react";
import HomeLayout from "../common/HomeLayout";

const AboutMe = () => {
    const breadcrumbs = [
        {
            id: "me",
            name: "About Me",
            path: "/me",
            active: true,
        },
    ];

    return (
        <HomeLayout 
            breadcrumbs={breadcrumbs}
            content={
                <h1>About Me</h1>
            }
        />
    );
}

export default AboutMe;
