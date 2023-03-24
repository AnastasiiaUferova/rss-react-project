import React, { forwardRef } from 'react';
const NameInput = forwardRef((props, ref) => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('label', { className: 'form__item-text' }, 'Movie Name'),
    React.createElement('input', {
      ref: ref,
      onChange: props.onChange,
      id: 'input_name',
      name: 'name',
      type: 'text',
      className: 'form__item-input',
    })
  );
});
export default NameInput;
