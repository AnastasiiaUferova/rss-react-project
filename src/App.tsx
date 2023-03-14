import AboutUs from './components/AboutUs/AboutUs';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    );
  }
}
