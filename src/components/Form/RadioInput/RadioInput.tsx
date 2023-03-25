import React, { forwardRef, Ref } from 'react';

type RadioInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  value: string;
  label: string;
  checked?: boolean;
};

const RadioInput = forwardRef((props: RadioInputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <div className="switch-field">
      <input
        ref={ref}
        onChange={props.onChange}
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        checked={props.checked}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
});

export default RadioInput;
