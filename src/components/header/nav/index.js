import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <ul className="header__nav">
                <li className="header__nav-item">
                    <Link to="/home">Home</Link>
                </li>
                <li className="header__nav-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="header__nav-item has-list">
                    Courses
                    <ul className="header__nav list-child display-col">
                        <li className="header__nav-item">Free</li>
                        <li className="header__nav-item">Fee</li>
                    </ul>
                </li>
            </ul>
            <ul className="header__nav--auth">
                <li className="header__nav-item">
                    <Link to="/auth/login">Login</Link>
                </li>
                <li className="header__nav-item-dot"></li>
                <li className="header__nav-item">
                    <Link to="/auth/register">Register</Link>
                </li>
            </ul>
        </>
    );
}