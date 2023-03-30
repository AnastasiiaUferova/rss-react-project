import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RadioInput from './RadioInput';
describe('RadioInput', () => {
    const onChangeMock = vi.fn();
    const defaultProps = {
        onChange: onChangeMock,
        id: 'test-radio',
        name: 'test-radio-group',
        value: 'test-value',
        label: 'Test Label',
        checked: false,
    };
    it('renders with the correct label', () => {
        const { getByLabelText } = render(React.createElement(RadioInput, { ...defaultProps }));
        expect(getByLabelText('Test Label')).toBeInTheDocument();
    });
    it('calls onChange when clicked', () => {
        const { getByLabelText } = render(React.createElement(RadioInput, { ...defaultProps }));
        fireEvent.click(getByLabelText('Test Label'));
        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });
    it('sets the "checked" attribute correctly', () => {
        const { getByLabelText, rerender } = render(React.createElement(RadioInput, { ...defaultProps }));
        expect(getByLabelText('Test Label')).not.toBeChecked();
        rerender(React.createElement(RadioInput, { ...defaultProps, checked: true }));
        expect(getByLabelText('Test Label')).toBeChecked();
    });
});
