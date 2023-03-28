import { render, screen } from '@testing-library/react';
import React from 'react';
import AboutUs from './AboutUs';

describe('AboutUs component', () => {
  it('should render "AboutUs" text', () => {
    render(<AboutUs />);
    const aboutUsElement = screen.getByText('AboutUs');
    expect(aboutUsElement).toBeInTheDocument();
  });
});
