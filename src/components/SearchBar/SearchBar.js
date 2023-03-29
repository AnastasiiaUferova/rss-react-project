import React, { useState, useEffect } from 'react';
import './SearchBar.css';
export const SearchBar = () => {
  const [input, setInput] = useState(
    localStorage.getItem('input') !== null ? localStorage.getItem('inputValue') : ''
  );
  useEffect(() => {
    if (input !== null) {
      localStorage.setItem('inputValue', input);
    }
  }, [input]);
  const handleChange = (e) => {
    const inputValue = e.currentTarget.value;
    setInput(inputValue);
  };
  return React.createElement(
    'div',
    { id: 'search', className: 'search' },
    React.createElement(
      'div',
      { className: 'search-container' },
      React.createElement(
        'form',
        { className: 'search__form' },
        React.createElement('input', {
          className: 'search__form__input',
          type: 'text',
          value: input || '',
          onChange: handleChange,
        }),
        React.createElement('button', { className: 'search__form__button', type: 'submit' })
      )
    ),
    React.createElement('p', null, 'Input from LocalStorage: ', localStorage.getItem('inputValue'))
  );
};
