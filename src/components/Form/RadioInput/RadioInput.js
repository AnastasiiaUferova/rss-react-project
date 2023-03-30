import React, { forwardRef } from 'react';
const RadioInput = forwardRef((props, ref) => {
    return (React.createElement("div", { className: "switch-field" },
        React.createElement("input", { ref: ref, onChange: props.onChange, type: "radio", id: props.id, name: props.name, value: props.value, checked: props.checked }),
        React.createElement("label", { htmlFor: props.id }, props.label)));
});
export default RadioInput;
