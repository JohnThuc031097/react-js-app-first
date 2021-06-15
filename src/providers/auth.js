
import React from "react";
import PropTypes from "prop-types";
// Services
import { ContextServices, HookServices } from "../services";

export default function AuthProvider({ children }) {
    const auth = HookServices.Auth.useAuthProvide();
    return (
        <ContextServices.AuthContext.Provider value={auth}>
            {children}
        </ContextServices.AuthContext.Provider>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.any,
};