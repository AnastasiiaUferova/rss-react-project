import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { withRouter } from '../../utils/withRouter';
class Header extends Component {
  render() {
    const { location } = this.props;
    const pathNames = {
      '/about-us': 'About Us',
      '/': 'Home',
      '/form': 'Form for movies',
    };
    return React.createElement(
      'div',
      { className: 'header' },
      React.createElement('p', null, pathNames[location.pathname] || 'Not Found'),
      React.createElement(
        'div',
        { className: 'header__navlinks' },
        React.createElement(NavLink, { to: '/' }, 'Home'),
        React.createElement(NavLink, { to: 'about-us' }, 'About Us'),
        React.createElement(NavLink, { to: 'form' }, 'Add Your Movie')
      )
    );
  }
}
export default withRouter(Header);
