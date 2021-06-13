import React from "react";
import { Route } from "react-router-dom";
// Components
import { AuthRedirect } from "./../components/core/auth";

export function RouteLoad({ routes }) {
    let routesArray = [];
    for (const key in routes) {
        routesArray.push(routes[key]);
    }
    return routesArray.map((route, i) => (<RouteSub key={i} {...route} />));
}

function RouteSub(route) {
    return (
        <AuthRedirect noAuthToPath={route.noAuthToPath}>
            <route.component routes={route.routes} />
        </AuthRedirect>
    );
}

// function RouteSub(route) {
//     return (
//         <Route
//             exact
//             path={route.path}
//             render={(routeProps) => (
//                 <route.component {...routeProps} routes={route.routes} />
//             )}
//         />
//     );
// }
