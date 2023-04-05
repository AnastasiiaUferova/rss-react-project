import React, { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

export const Header: FC = () => {
  const location = useLocation();

  type StringObject = { [key: string]: string };

  const pathNames: StringObject = {
    '/about-us': 'About Us',
    '/': 'Home',
    '/form': 'Form for movies',
  };
  return (
    <div className="header">
      <p className="header__title">{pathNames[location.pathname] || 'Not Found'}</p>
      <nav className="header__navlinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about-us">About Us</NavLink>
        <NavLink to="form">Add Your Show</NavLink>
      </nav>
    </div>
  );
};
