import { render, fireEvent } from '@testing-library/react';
import OccasionInput from './OccasionInput';
import { OCCASION_OPTIONS } from '../../../constants/constants';
import React from 'react';
test('renders select input with options', () => {
    const onChange = vi.fn();
    const occasion = OCCASION_OPTIONS[0].value;
    const { getByLabelText, getByDisplayValue } = render(React.createElement(OccasionInput, { onChange: onChange, occasion: occasion }));
    const selectInput = getByLabelText(/Occasion/i);
    expect(selectInput).toBeInTheDocument();
    const selectedOption = getByDisplayValue(OCCASION_OPTIONS[0].label);
    expect(selectedOption).toBeInTheDocument();
    fireEvent.change(selectInput, { target: { value: OCCASION_OPTIONS[1].value } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
});
