import SearchBar from '../SearchBar/SearchBar';
import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <SearchBar />
      </div>
    );
  }
}
