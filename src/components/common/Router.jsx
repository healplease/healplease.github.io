import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Experience from "../pages/Experience.jsx";
// import AboutMe from "../pages/AboutMe.jsx";
import Error from "../pages/Error.jsx";
import BasicLayout from "./BasicLayout.jsx";
import MainLayout from "./MainLayout.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<BasicLayout />} errorElement={<Error />}>
        <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="experience" element={<Experience />} />
            {/* <Route path="me" element={<AboutMe />} /> */}
        </Route>
    </Route>
));

export default router;
