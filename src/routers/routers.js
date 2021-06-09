import React from "react";
import { Route, Link } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";

const routers = [
    {
        path: ['/', '/home'],
        component: Home
    },
    {
        path: '/about',
        component: About
    },
]

function RouteWithSubRoutes(route) {
    return (
        <Route
            exact
            path={route.path}
            component={route.component}
        >

        </Route>
    );
}

export {
    routers,
    RouteWithSubRoutes,
}