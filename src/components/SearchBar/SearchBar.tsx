import React, { useState, useEffect, ChangeEvent } from 'react';
import './SearchBar.css';

export const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>(() => {
    const savedQuery = localStorage.getItem('query');
    const initialValue = savedQuery ? JSON.parse(savedQuery) : '';
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem('query', JSON.stringify(searchQuery));
  }, [searchQuery]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.currentTarget.value.trim();
    setSearchQuery((prevInput: string) => {
      if (inputValue !== prevInput) {
        return inputValue;
      }
      return prevInput;
    });
  };

  return (
    <div id="search" className="search">
      <div className="search-container">
        <form className="search__form">
          <input
            className="search__form__input"
            type="text"
            value={searchQuery}
            onChange={handleChange}
          ></input>
          <button className="search__form__button" type="submit"></button>
        </form>
      </div>
      <p>Input from LocalStorage: {localStorage.getItem('query')}</p>
    </div>
  );
};
