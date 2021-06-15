import React, { useMemo, useCallback } from "react";
// Services
import { HookServices } from "../services";

export function RouteLoad({ routes }) {
    const auth = HookServices.Auth.useAuth();
    const RenderRoute = useCallback((routes) => {
        const AuthRoute = HookServices.Auth.useAuthRoute;
        let routesArray = [];
        for (const key in routes) {
            routesArray.push(routes[key]);
        }
        return routesArray.map((route, i) => (<AuthRoute key={i} {...route} />));
    }, []);
    return useMemo(() => RenderRoute(routes), [auth.isAuthenticated]);
}
