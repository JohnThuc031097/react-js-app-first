import React from "react";
// PropTypes
import PropTypes from "../../../prop-types";

export default function Nav({ children, className }) {
    return (
        <div className={"header__nav " + className}>
            {children}
        </div>
    );
}
Nav.propTypes = PropTypes;