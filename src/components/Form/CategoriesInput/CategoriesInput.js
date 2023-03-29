import React, { forwardRef } from 'react';
const CategoriesInput = forwardRef((props, ref) => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'label',
      { className: 'form-control' },
      React.createElement('input', {
        ref: ref,
        onChange: props.onChange,
        className: 'form__checkbox',
        type: 'checkbox',
        id: props.name,
        name: props.name,
      }),
      props.name
    )
  );
});
export default CategoriesInput;
