import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Header component', () => {
  it('should display the title and navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();

    const aboutUsNavLink = screen.getByText(/about us/i);
    expect(aboutUsNavLink).toBeInTheDocument();

    const formNavLink = screen.getByText(/add your show/i);
    expect(formNavLink).toBeInTheDocument();
  });

  it('should show "Not Found" for unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <Header />
      </MemoryRouter>
    );

    const titleElement = screen.getByText(/not found/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should highlight the current route link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();

    const aboutUsNavLink = screen.getByText(/about us/i);
    expect(aboutUsNavLink).not.toHaveClass('active');

    const formNavLink = screen.getByText(/add your show/i);
    expect(formNavLink).not.toHaveClass('active');
  });
});
