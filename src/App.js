import AboutUs from './components/AboutUs/AboutUs';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import WithFormPage from './components/WithFormPage/WithFormPage';
//import CardData from './data/items.json';
export default class App extends Component {
  render() {
    return React.createElement(
      'div',
      { className: 'App', title: 'React' },
      React.createElement(Header, null),
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: '/', element: React.createElement(Home, null) }),
        React.createElement(Route, {
          path: '/about-us',
          element: React.createElement(AboutUs, null),
        }),
        React.createElement(Route, {
          path: '/form',
          element: React.createElement(WithFormPage, { cards: [] }),
        }),
        React.createElement(Route, { path: '*', element: React.createElement(NotFound, null) })
      )
    );
  }
}
