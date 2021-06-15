import React from "react";
import { Route, Redirect } from "react-router-dom";
// Hooks
import { useAuth } from "../../../../hooks";

export default function AuthRedirect(route) {
    const auth = useAuth();
    return (
        <Route
            exact
            path={route.path}
            render={(propRoute) => {
                if (route.auth) {
                    if (!auth.isAuthenticated) {
                        if (!route.exception) {
                            return (
                                <Redirect
                                    to={{
                                        pathname: route.pathAuth,
                                        state: { from: propRoute.location }
                                    }}
                                />
                            );
                        }
                    } else {
                        if (route.exception) {
                            return (
                                <Redirect
                                    to={{
                                        pathname: '/',
                                        state: { from: propRoute.location }
                                    }}
                                />
                            )
                        }
                    }
                }
                return (
                    <route.component {...propRoute} routes={route.routes} />
                );
            }}
        />
    );
}