import React, { forwardRef, Ref } from 'react';

type NameInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const NameInput = forwardRef((props: NameInputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <>
      <label htmlFor="input_name" className="form__item-text">
        Movie Name
      </label>
      <input
        ref={ref}
        onChange={props.onChange}
        id="input_name"
        name="name"
        type="text"
        className="form__item-input"
      />
    </>
  );
});

export default NameInput;
