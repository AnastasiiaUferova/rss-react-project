import AboutUs from './components/AboutUs';
import Home from './components/Home';
import NotFound from './components/NotFound';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    );
  }
}
