import React from 'react';
import './ErrorMessage.css';
export const ErrorMessage = (props) => {
    return React.createElement("div", { className: "error" }, props.errorMessage);
};
