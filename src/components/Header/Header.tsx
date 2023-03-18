import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { WithRouterProps, withRouter } from '../../utils/withRouter';

class Header extends Component<WithRouterProps> {
  render() {
    const { location } = this.props;

    type StringObject = { [key: string]: string };

    const pathNames: StringObject = {
      '/about-us': 'About Us',
      '/': 'Home',
    };
    return (
      <div className="header">
        <p>{pathNames[location.pathname] || 'Not Found'}</p>
        <div className="header__navlinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about-us">About Us</NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
