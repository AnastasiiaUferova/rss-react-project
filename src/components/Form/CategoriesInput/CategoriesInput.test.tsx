import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';
import CategoriesInput from './CategoriesInput';

describe('CategoriesInput component', () => {
  it('should render a checkbox input with the correct name and label', () => {
    const name = 'category1';
    const onChange = vi.fn();
    const ref = createRef<HTMLInputElement>();
    render(<CategoriesInput name={name} onChange={onChange} ref={ref} />);
    const checkboxElement = screen.getByLabelText(name);
    expect(checkboxElement).toBeInTheDocument();
  });

  it('should call the onChange function when the checkbox is changed', () => {
    const name = 'category2';
    const onChange = vi.fn();
    const ref = createRef<HTMLInputElement>();
    render(<CategoriesInput name={name} onChange={onChange} ref={ref} />);
    const checkboxElement = screen.getByLabelText(name);
    checkboxElement.click();
    expect(onChange).toHaveBeenCalled();
  });
});
