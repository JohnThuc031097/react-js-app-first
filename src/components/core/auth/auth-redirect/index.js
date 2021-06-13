import React from "react";
import { Route, Redirect } from "react-router-dom";
// Hooks
import { useAuth } from "../../../../hooks";
// PropTypes
import DefautPropTypes from "../../../../prop-types";

export default function AuthRedirect({ children, noAuthToPath, ...props }) {
    const auth = useAuth();
    return (
        <Route
            {...props}
            render={({ location }) => {
                if (auth.isAuthenticated) {
                    return children;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: noAuthToPath,
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