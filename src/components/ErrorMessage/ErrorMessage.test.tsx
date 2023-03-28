import { render, screen } from '@testing-library/react';
import React from 'react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage component', () => {
  it('should render the error message passed via props', () => {
    const errorMessage = 'There was an error';
    render(<ErrorMessage errorMessage={errorMessage} />);
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  it('should have the "error" class', () => {
    render(<ErrorMessage errorMessage="There was an error" />);
    const errorElement = screen.getByText('There was an error');
    expect(errorElement).toHaveClass('error');
  });
});
