import React, { forwardRef } from 'react';
const DateInput = forwardRef((props, ref) => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('label', { className: 'form__item-text' }, 'Release Date'),
    React.createElement('input', {
      ref: ref,
      className: 'form__item-input',
      onChange: props.onChange,
      type: 'date',
      id: 'input_date',
      name: 'date',
      min: '1900-01-01',
      max: '2024-01-31',
    })
  );
});
export default DateInput;
