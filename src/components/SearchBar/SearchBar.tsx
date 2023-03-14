import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search">
        <div className="search-container">
          <form className="search__form">
            <input className="search__form__input" type="text"></input>
            <button className="search__form__button" type="submit"></button>
          </form>
        </div>
      </div>
    );
  }
}
