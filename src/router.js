import { createBrowserRouter } from "react-router-dom";

import Home from "./components/pages/home/Home";
import NotFound from "./components/pages/notFound/NotFound";


const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> }
]);

export default router;