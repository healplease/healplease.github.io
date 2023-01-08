import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Experience from "../pages/Experience.jsx";
import AboutMe from "../pages/AboutMe.jsx";
import Error from "../pages/Error.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" errorElement={<Error />}>
        <Route path="" element={<Home />} />
        <Route path="experience" element={<Experience />} />
        <Route path="me" element={<AboutMe />} />
    </Route>
));

export default router;
