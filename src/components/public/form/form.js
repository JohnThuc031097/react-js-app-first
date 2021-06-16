import React from "react";
import PropTypes from "prop-types";

export function Form({ children, name = "nobita", method = "POST", action = "/" }) {
    return (
        <form className={'form-' + name} method={method} action={action}>
            {children}
        </form>
    );
}
Form.propTypes = {
    children: PropTypes.any,
    name: PropTypes.string,
    method: PropTypes.string,
    action: PropTypes.string,
}

export function FormTitle({ children, fontSize = '20px', fontWeight = 600 }) {
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