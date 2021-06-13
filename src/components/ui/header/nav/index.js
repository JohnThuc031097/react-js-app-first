import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <ul className="header__nav">
                <li className="nav-item">
                    <Link to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="nav-item has-list">
                    <Link to="/courses">Courses</Link>
                    <ul className="nav-item__list">
                        <li className="nav-item__child">
                            <Link to="/courses/review/free">Free</Link>
                        </li>
                        <li className="nav-item__child">
                            <Link to="/courses/review/fee">Fee</Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="header__nav auth">
                <li className="nav-item">
                    <Link to="/auth/login">Login</Link>
                </li>
                <li className="space-dot"></li>
                <li className="nav-item">
                    <Link to="/auth/register">Register</Link>
                </li>
            </ul>
        </>
    );
}