import React from "react";
import { Route } from "react-router-dom";
// Routes
import Routes from "../routers";

export function RouteInit() {
    return Routes.map((route, i) =>
        <Route key={i}
            exact
            path={route.path}
            render={() => <route.component routes={route.routesChild} />}
        />
    );
}