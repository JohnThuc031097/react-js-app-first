import React, { useCallback, useMemo } from "react";
import { Link, useHistory } from "react-router-dom";
// Hooks
import { HookServices } from "../../../services";

export default function Nav() {
    const auth = HookServices.Auth.useAuth();
    const history = useHistory();

    const handleLogout = useCallback(() => {
        auth.signOut(() => {
            history.push('/');
        });
    }, []);

    const handleCheckAuth = useMemo(() => {
        if (auth.isAuthenticated) {
            return (
                <>
                    <div className="nav-item has-list">
                        <Link to="/user/profile">{auth.user?.username}</Link>
                        <div className="nav-item__list" >
                            <Link className="nav-item__child" to="/auth/login">Login</Link>
                            <Link className="nav-item__child" to="/user/profile">Profile</Link>
                            <div className="nav-item__child" to="/auth/logout"
                                onClick={handleLogout}
                            >Logout</div>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <Link className="nav-item" to="/auth/login">Login</Link>
                    <div className="space-dot"></div>
                    <Link className="nav-item" to="/auth/register">Register</Link>
                </>
            )
        }
    }, [auth]);

    return (
        <>
            <div className="header__nav">
                <Link className="nav-item" to="/home">Home</Link>
                <Link className="nav-item" to="/about">About</Link>
            </div>
            <div className="header__nav auth">
                {handleCheckAuth}
            </div>
        </>
    );
}