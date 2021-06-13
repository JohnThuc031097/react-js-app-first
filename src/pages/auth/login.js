import React from "react";
import { useHistory, useLocation } from "react-router-dom";
// Hooks
import { useAuth } from "../../hooks";

export default function AuthLoginPage() {
    const history = useHistory();
    const location = useLocation();
    const auth = useAuth();

    const { from } = location.state || { from: { pathname: '/auth/login' } };
    const handleLogin = () => {
        auth.signIn(() => {
            history.replace(from)
        });
    }

    return (
        <div id="container">
            <form id="formLogin">
                <div className="form-title">Login to Test</div>
                <div className="form-group">
                    <label className="form-label" htmlFor="" >Username</label>
                    <input className="form-input" type="text" placeholder="Input username" />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="" >Password</label>
                    <input className="form-input" type="password" placeholder="Input password" />
                </div>
                <div className="form-group">
                    <input className="form-input btn" type="button" value="Login"
                        onClick={handleLogin}
                    />
                </div>
            </form>
        </div>
    );
}