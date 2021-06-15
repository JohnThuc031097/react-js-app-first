import React, { useMemo } from "react";
import { useAuth } from "../hooks";
// Components
import { AuthRedirect } from "./../components/core/auth";

export function RouteLoad({ routes }) {
    const auth = useAuth();
    const RenderRoute = (routes) => {
        let routesArray = [];
        for (const key in routes) {
            routesArray.push(routes[key]);
        }
        return routesArray.map((route, i) => (<AuthRedirect key={i} {...route} />));
    }
    return useMemo(() => RenderRoute(routes), [auth.isAuthenticated]);
}
