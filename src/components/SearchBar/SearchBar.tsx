import React, { useState, useEffect } from 'react';
import './SearchBar.css';

export const SearchBar = () => {
  const [input, setInput] = useState<string | null>(
    localStorage.getItem('input') !== null ? localStorage.getItem('inputValue') : ''
  );

  useEffect(() => {
    if (input !== null) {
      localStorage.setItem('inputValue', input);
    }
  }, [input]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const inputValue = e.currentTarget.value;
    setInput(inputValue);
  };

  return (
    <div id="search" className="search">
      <div className="search-container">
        <form className="search__form">
          <input
            className="search__form__input"
            type="text"
            value={input || ''}
            onChange={handleChange}
          ></input>
          <button className="search__form__button" type="submit"></button>
        </form>
      </div>
      <p>Input from LocalStorage: {localStorage.getItem('inputValue')}</p>
    </div>
  );
};
