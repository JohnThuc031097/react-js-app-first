import React from "react";
import { Route } from "react-router-dom";

export function RouteLoad({ routes }) {
    return (
        routes.map((route, i) => (
            <RouteSub key={i} {...route} />
        ))
    );
}

function RouteSub(route) {
    return (
        <Route
            exact
            path={route.path}
            render={(routeProps) => (
                <route.component {...routeProps} routes={route.routes} />
            )}
        />
    );
}
