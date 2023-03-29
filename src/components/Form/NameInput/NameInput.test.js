import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NameInput from './NameInput';
describe('NameInput component', () => {
  it('should call onChange when input value changes', () => {
    const mockOnChange = vi.fn();
    const { getByLabelText } = render(React.createElement(NameInput, { onChange: mockOnChange }));
    fireEvent.change(getByLabelText('Movie Name'), { target: { value: 'Test movie' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
