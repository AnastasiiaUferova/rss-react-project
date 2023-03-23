import React, { forwardRef, Ref } from 'react';

type DateInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const DateInput = forwardRef((props: DateInputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <>
      <label className="form__item-text">When I watched it</label>
      <input
        ref={ref}
        className="form__item-input"
        onChange={props.onChange}
        type="date"
        id="input_date"
        name="date"
        min="1900-01-01"
        max="2023-12-31"
      ></input>
    </>
  );
});

export default DateInput;
