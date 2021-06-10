import React from "react";
// Css
import "./nav.css";

export default function Nav() {
    return (
        <ul className="header__nav">
            <li className="header__nav-item">Home</li>
            <li className="header__nav-item">About</li>
            <li className="header__nav-item">Courses</li>
        </ul>
    );
}