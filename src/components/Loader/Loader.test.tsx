import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Loader />);
    const loader = getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
});
