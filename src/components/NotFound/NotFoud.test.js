import React from 'react';
import { render } from '@testing-library/react';
import { NotFound } from './NotFound';
describe('NotFound component', () => {
    it('renders the not-found image', () => {
        const { getByAltText } = render(React.createElement(NotFound, null));
        const notFoundImage = getByAltText('not-found picture');
        expect(notFoundImage).toBeInTheDocument();
    });
});
