import React from "react";
import PropTypes from "prop-types";

export default function Container({ children }) {
    return (
        <div id="container">
            {children}
        </div>
    )
}
Container.propTypes = {
    children: PropTypes.any,
}