import { render, screen } from '@testing-library/react';
import React from 'react';
import { ConfirmMessage } from './ConfirmMessage';
describe('ConfirmMessage component', () => {
  it('should render "Your movie is submitted successfully" text', () => {
    render(React.createElement(ConfirmMessage, null));
    const confirmElement = screen.getByText('Your movie is submitted successfully');
    expect(confirmElement).toBeInTheDocument();
  });
  it('should have the "confirm" class', () => {
    render(React.createElement(ConfirmMessage, null));
    const confirmElement = screen.getByText('Your movie is submitted successfully');
    expect(confirmElement).toHaveClass('confirm');
  });
});
