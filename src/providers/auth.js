
import React from "react";
// Contexts
import { authContext } from "../contexts";
// Hooks
import useProvideAuth from "../hooks/useProvideAuth";
// PropTypes
import ProvidePropTypes from "../prop-types/provide";

export default function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}
ProvideAuth.propTypes = ProvidePropTypes;