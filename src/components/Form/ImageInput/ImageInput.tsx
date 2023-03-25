import React, { forwardRef, Ref } from 'react';

type ImageInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ImageInput = forwardRef((props: ImageInputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <>
      <label htmlFor="cover-image" className="form__item-text">
        Cover Image
      </label>
      <input
        ref={ref}
        onChange={props.onChange}
        id="cover-image"
        type="file"
        name="cover-image"
        className="form__item-input form__item-input_img"
        accept="image/png, image/jpeg"
      />
    </>
  );
});

export default ImageInput;
