import React, { useMemo, useCallback } from "react";
// Services
import { HookServices } from "../../services";
// Domain
import RouteRedirect from "./route-redirect";

export default function RouteLoad({ routes }) {
    const auth = HookServices.Auth.useAuth();
    const RenderRoute = useCallback((routes) => {
        let routesArray = [];
        for (const key in routes) {
            routesArray.push(routes[key]);
        }
        return routesArray.map((route, i) => (<RouteRedirect key={i} {...route} />));
    }, []);
    return useMemo(() => RenderRoute(routes), [auth.isAuthenticated]);
}
