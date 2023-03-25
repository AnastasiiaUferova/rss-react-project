import { OCCASION_OPTIONS, OccasionOption } from '../../../constants/constants';
import React, { forwardRef, Ref } from 'react';

type OccasionInputProps = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  occasion: string;
};

const OccasionInput = forwardRef((props: OccasionInputProps, ref: Ref<HTMLSelectElement>) => {
  return (
    <>
      <label htmlFor="input_occasion" className="form__item-text">
        Occasion
      </label>
      <select
        value={props.occasion}
        id="input_occasion"
        className="form__item-input"
        ref={ref}
        onChange={props.onChange}
      >
        {OCCASION_OPTIONS.map((option: OccasionOption) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
});

export default OccasionInput;
