import { render, screen } from '@testing-library/react';
import React from 'react';
import { AboutUs } from './AboutUs';
describe('AboutUs component', () => {
  it('should render "AboutUs" text', () => {
    render(React.createElement(AboutUs, null));
    const aboutUsElement = screen.getByText('AboutUs');
    expect(aboutUsElement).toBeInTheDocument();
  });
});
