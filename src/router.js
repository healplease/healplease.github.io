import { createBrowserRouter } from "react-router-dom";

import Home from "./components/pages/home/Home";
import NotFound from "./components/pages/notFound/NotFound";


const Router = createBrowserRouter({
    routes: [
        { path: "/", component: Home, exact: true },
        { path: "*", component: NotFound }
    ]
});

export default Router;