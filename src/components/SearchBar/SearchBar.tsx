import React, { Component, PropsWithChildren } from 'react';
import './SearchBar.css';

type SearchBarState = {
  input: string | null;
};

export default class SearchBar extends Component<PropsWithChildren, SearchBarState> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      input: localStorage.getItem('input') !== null ? localStorage.getItem('input') : '',
    };
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const inputValue = e.currentTarget.value;
    this.setState({ input: inputValue });
  };

  componentWillUnmount() {
    localStorage.setItem('inputValue', this.state.input ? this.state.input : '');
  }

  render() {
    return (
      <div id="search" className="search">
        <div className="search-container">
          <form className="search__form">
            <input
              className="search__form__input"
              type="text"
              value={this.state.input || ''}
              onChange={this.handleChange}
            ></input>
            <button className="search__form__button" type="submit"></button>
          </form>
        </div>
        <p>Input from LocalStorage:{localStorage.getItem('inputValue')}</p>
      </div>
    );
  }
}
