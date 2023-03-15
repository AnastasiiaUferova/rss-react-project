import React, { Component } from 'react';
import './SearchBar.css';

type State = {
  input: string;
};

type Props = Partial<State>;

export default class SearchBar extends Component<Props> {
  state = { input: '' };

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const inputValue = e.currentTarget.value;
    localStorage.setItem('input', inputValue);
    this.setState({ input: inputValue });
  };

  componentDidMount() {
    const inputFromLocalStorage = localStorage.getItem('input') || '';
    this.setState({ input: inputFromLocalStorage });
  }

  componentWillUnmount() {
    localStorage.setItem('input', this.state.input);
  }

  render() {
    return (
      <div className="search">
        <div className="search-container">
          <form className="search__form">
            <input
              className="search__form__input"
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
            ></input>
            <button className="search__form__button" type="submit"></button>
          </form>
        </div>
        <p>Input from LocalStorage:{localStorage.getItem('input')}</p>
      </div>
    );
  }
}
