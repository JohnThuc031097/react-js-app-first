import React, { useCallback, useMemo, useState } from "react";
// import { useCallback } from "react-hooks";
import { Link, useHistory } from "react-router-dom";
// Hooks
import { useAuth } from "../hooks";
// Components
import Header from "./../components/ui/header";
import Nav from "./../components/ui/nav";

export default function HomePage() {
    const auth = useAuth();
    const history = useHistory();

    const handleLogout = useCallback(() => {
        auth.signOut(() => {
            history.push('/');
        });
    }, []);

    const handleCheckAuth = useMemo(() => {
        console.log(auth);
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
        <Header>
            <Nav>
                <Link className="nav-item" to="/home">Home</Link>
                <Link className="nav-item" to="/about">About</Link>
                <div className="nav-item has-list">
                    <Link to="/courses">Courses</Link>
                    <div className="nav-item__list" >
                        <Link className="nav-item__child" to="/courses/review/free">Free</Link>
                        <Link className="nav-item__child" to="/courses/review/fee">Fee</Link>
                    </div>
                </div>
            </Nav>
            <Nav className="auth">
                {handleCheckAuth}
            </Nav>
        </Header>
    );
}