import React, { forwardRef, Ref } from 'react';

type CategoriesInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

const CategoriesInput = forwardRef((props: CategoriesInputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <>
      <label className="form-control">
        <input
          ref={ref}
          onChange={props.onChange}
          className="form__checkbox"
          type="checkbox"
          id={props.name}
          name={props.name}
        />
        {props.name}
      </label>
    </>
  );
});

export default CategoriesInput;
