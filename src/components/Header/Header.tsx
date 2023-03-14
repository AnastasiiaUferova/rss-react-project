import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { WithRouterProps, withRouter } from '../../utils/withRouter';

class Header extends Component<WithRouterProps> {
  render() {
    const { location } = this.props;
    return (
      <div className="header">
        <p>{location.pathname}</p>
        <div className="header__navlinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about-us">About Us</NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
