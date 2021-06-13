import React from "react";
// PropTypes
import PropTypes from "../../../prop-types";

export default function Header({ children }) {
    return (
        <div id='header'>
            {children}
        </div>
    );
}
Header.propTypes = PropTypes;