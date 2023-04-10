import React from 'react';
import { render } from '@testing-library/react';
import { NotFound } from './NotFound';

describe('NotFound component', () => {
  it('should render the not-found picture', () => {
    const { getByAltText } = render(<NotFound />);
    const notFoundPic = getByAltText('not-found picture');
    expect(notFoundPic).toBeInTheDocument();
  });
});
