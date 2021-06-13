import React from "react";
import { useHistory, useLocation } from "react-router-dom";
// Hooks
import { useAuth } from "../../hooks";

export default function LoginPage() {
    const history = useHistory();
    const location = useLocation();
    const auth = useAuth();

    const { from } = location.state || { from: { pathname: '/' } };
    const handleLogin = () => {
        auth.signIn();
        history.replace(from)
    }

    return (
        <></>
    );
}