import React, { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import { StringObject } from '../../types/types';

export const Header: FC = () => {
  const location = useLocation();

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
