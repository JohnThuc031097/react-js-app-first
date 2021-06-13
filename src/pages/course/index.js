import React from "react";
// PropTypes
import RoutePropTypes from "../../prop-types/route";

export default function CoursePage({ routes }) {
    console.log(routes);
    return (
        <h1>Courses</h1>
    );
}
CoursePage.propTypes = RoutePropTypes;