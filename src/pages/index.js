import React from "react";
import { Link } from "react-router-dom";
// Hooks
import { useAuth } from "../hooks";
// Components
import Header from "./../components/ui/header";
import Nav from "./../components/ui/nav";

export default function HomePage() {
    const auth = useAuth();
    console.log(auth);
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
                {(() => {
                    if (auth.isAuthenticated) {
                        return (
                            <>
                                <Link className="nav-item">{auth.user.username}</Link>
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
                })()}
            </Nav>
        </Header>
    );
}