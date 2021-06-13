import React from "react";
import { Route } from "react-router-dom";

export function RouteLoad({ routes }) {
    return (() => {
        for (const keyName in routes) {
            console.log(routes[keyName]);
            <RouteSub key={keyName} {...routes[keyName]} />
        }
    });
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
