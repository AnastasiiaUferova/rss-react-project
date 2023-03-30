import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DateInput from './DateInput';
describe('DateInput component', () => {
    it('renders the input with the given props', () => {
        const onChangeMock = vi.fn();
        const { getByLabelText } = render(React.createElement(DateInput, { onChange: onChangeMock }));
        const input = getByLabelText('Release Date');
        expect(input).toBeInTheDocument();
        expect(input.type).toBe('date');
        expect(input.min).toBe('1900-01-01');
        expect(input.max).toBe('2024-01-31');
        fireEvent.change(input, { target: { value: '2022-03-26' } });
        expect(onChangeMock).toHaveBeenCalled();
        expect(input.value).toBe('2022-03-26');
    });
});
