import { OCCASION_OPTIONS } from '../../constants/constants';
import React, { forwardRef } from 'react';
const OccasionInput = forwardRef((props, ref) => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('label', { className: 'form__item-text' }, 'Occasion'),
    React.createElement(
      'select',
      {
        value: props.occasion,
        id: 'input_occasion',
        className: 'form__item-input',
        ref: ref,
        onChange: props.onChange,
      },
      OCCASION_OPTIONS.map((option) =>
        React.createElement('option', { key: option.value, value: option.value }, option.label)
      )
    )
  );
});
export default OccasionInput;
