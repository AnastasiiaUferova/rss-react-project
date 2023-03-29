import React, { forwardRef } from 'react';
const ImageInput = forwardRef((props, ref) => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'label',
      { htmlFor: 'cover-image', className: 'form__item-text' },
      'Cover Image'
    ),
    React.createElement('input', {
      ref: ref,
      onChange: props.onChange,
      id: 'cover-image',
      type: 'file',
      name: 'cover-image',
      className: 'form__item-input form__item-input_img',
      accept: 'image/png, image/jpeg',
    })
  );
});
export default ImageInput;
