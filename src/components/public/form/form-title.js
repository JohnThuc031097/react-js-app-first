import React, { useContext } from "react";
import PropTypes from "prop-types";

export default function FormTitle({ children, fontSize = '20px', fontWeight = 600 }) {
    return (
        <div className="form-title">
            {children}
        </div>
    );
}
FormTitle.propTypes = {
    children: PropTypes.any,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.number,
}