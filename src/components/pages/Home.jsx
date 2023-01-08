import React from "react";
import HomeLayout from "../common/HomeLayout";

const Home = () => {
    const breadcrumbs = [
        {
            id: "home",
            name: "Home",
            path: "/",
            active: true,
        },
    ];

    return (
        <HomeLayout 
            breadcrumbs={breadcrumbs}
            content={
                <h1>Home</h1>
            }
        />
    );
}

export default Home;
