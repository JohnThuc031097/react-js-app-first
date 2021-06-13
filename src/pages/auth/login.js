import React from "react";
import { useHistory, useLocation } from "react-route-dom";
// Hooks
import { useAuth } from "../../hooks";

export default function LoginPage() {
    const history = useHistory();
    const location = useLocation();
    const auth = useAuth();

    const redirectPage = location.state || '/';
    const handleLogin = () => {
        auth.signIn();
        history.replace(redirectPage)
    }
}