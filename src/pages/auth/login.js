import React from "react";
import { useHistory, useLocation } from "react-router-dom";
// Services
import { HookServices, ComponentServices } from "../../services";

export default function AuthLoginPage() {
    const history = useHistory();
    const location = useLocation();
    const auth = HookServices.Auth.useAuth();

    const { from } = location.state || { from: { pathname: '/' } };
    const handleLogin = () => {
        auth.signIn(() => {
            history.replace(from)
        });
    }

    return (
        <>
            <ComponentServices.Public.Header />
            <ComponentServices.Public.Container>
                <div id="formLogin">
                    <form className="form-login">
                        <div className="form-login__title">Login to Test</div>
                        <div className="form-login__group">
                            <label className="form-login__label" htmlFor="" >Username</label>
                            <input className="form-login__input" type="text" placeholder="Input username" />
                        </div>
                        <div className="form-login__group">
                            <label className="form-login__label" htmlFor="" >Password</label>
                            <input className="form-login__input" type="password" placeholder="Input password" />
                        </div>
                        <div className="form-login__group">
                            <input className="form-login__input btn" type="button" value="Login"
                                onClick={handleLogin}
                            />
                        </div>
                    </form>
                </div>
            </ComponentServices.Public.Container>
        </>
    );
}