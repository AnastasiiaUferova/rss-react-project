import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';
export const Header = () => {
  const location = useLocation();
  const pathNames = {
    '/about-us': 'About Us',
    '/': 'Home',
    '/form': 'Form for movies',
  };
  return React.createElement(
    'div',
    { className: 'header' },
    React.createElement(
      'p',
      { className: 'header__title' },
      pathNames[location.pathname] || 'Not Found'
    ),
    React.createElement(
      'nav',
      { className: 'header__navlinks' },
      React.createElement(NavLink, { to: '/' }, 'Home'),
      React.createElement(NavLink, { to: 'about-us' }, 'About Us'),
      React.createElement(NavLink, { to: 'form' }, 'Add Your Show')
    )
  );
};
