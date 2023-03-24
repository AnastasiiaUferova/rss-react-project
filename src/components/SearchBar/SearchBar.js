import React, { Component } from 'react';
import './SearchBar.css';
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { input: '' };
  }
  saveToLocalStorage = (value) => {
    localStorage.setItem('input', value);
  };
  handleChange = (e) => {
    const inputValue = e.currentTarget.value;
    this.setState({ input: inputValue });
  };
  componentDidMount() {
    const inputFromLocalStorage = localStorage.getItem('input') || '';
    this.setState({ input: inputFromLocalStorage });
  }
  componentWillUnmount() {
    window.addEventListener('beforeunload', () => {
      this.saveToLocalStorage(this.state.input || '');
    });
  }
  render() {
    return React.createElement(
      'div',
      { className: 'search' },
      React.createElement(
        'div',
        { className: 'search-container' },
        React.createElement(
          'form',
          { className: 'search__form' },
          React.createElement('input', {
            className: 'search__form__input',
            type: 'text',
            value: this.state.input || '',
            onChange: this.handleChange,
          }),
          React.createElement('button', { className: 'search__form__button', type: 'submit' })
        )
      ),
      React.createElement('p', null, 'Input from LocalStorage:', localStorage.getItem('input'))
    );
  }
}
