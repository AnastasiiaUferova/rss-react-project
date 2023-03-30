import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ImageInput from './ImageInput';
describe('ImageInput', () => {
    test('renders label and input', () => {
        const { getByLabelText } = render(React.createElement(ImageInput, { onChange: () => { } }));
        const input = getByLabelText('Cover Image');
        expect(input).toBeInTheDocument();
    });
    test('calls onChange callback when input value changes', () => {
        const onChangeMock = vi.fn();
        const { getByLabelText } = render(React.createElement(ImageInput, { onChange: onChangeMock }));
        const input = getByLabelText('Cover Image');
        fireEvent.change(input, {
            target: {
                files: [
                    new File(['file'], 'newImage.png', {
                        type: 'image/png',
                    }),
                ],
            },
        });
        expect(onChangeMock).toHaveBeenCalled();
    });
});
