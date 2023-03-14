import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <p>Home</p>
        <div className="header__navlinks">
          <NavLink to="home">Home</NavLink>
          <NavLink to="about-us">About Us</NavLink>
        </div>
      </div>
    );
  }
}
