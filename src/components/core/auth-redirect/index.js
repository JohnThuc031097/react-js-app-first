import React from "react";
import { Route, Redirect } from "react-route-dom";
// Hooks
import { useAuth } from "../../../hooks";
// PropTypes
import DefautPropTypes from "../../../prop-types";
// Routes
// import {  } from "../../../routers";


export default function AuthRedirect({ children, ...props }) {
    const auth = useAuth();
    return (
        <Route
            {...props}
            render={({ location }) => {
                if (auth.isAuthenticed) {
                    return children;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: location }
                            }}
                        />
                    )
                }
            }}
        />
    );
}
AuthRedirect.propTypes = DefautPropTypes;