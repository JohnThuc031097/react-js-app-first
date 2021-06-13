
import React from "react";
// Contexts
import { authContext } from "../contexts";
// Hooks
import useProvideAuth from "../hooks/useProvideAuth";
// PropTypes
import PropTypes from "../prop-types";

export default function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}
AuthProvider.propTypes = PropTypes;