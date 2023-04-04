import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import './SearchBar.css';

export const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>(localStorage.getItem('query') || '');
  const inputRef = useRef(searchQuery);

  useEffect(() => {
    const query = localStorage.getItem('query');
    query && setSearchQuery(query);

    return () => {
      localStorage.setItem('query', inputRef.current);
    };
  }, []);

  useEffect(() => {
    inputRef.current = searchQuery;
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
            ref={() => inputRef}
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
