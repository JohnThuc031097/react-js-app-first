import React from "react";
// PropTypes
import PropTypes from "../../prop-types";

export default function Course({ routes }) {
    console.log(routes);
    return (
        <h1>Courses</h1>
    );
}
Course.propTypes = PropTypes.Route;