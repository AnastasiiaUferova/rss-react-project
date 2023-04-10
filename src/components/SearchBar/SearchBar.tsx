import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import './SearchBar.css';
import { SearchBoxProps } from '../../types/types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export const SearchBar: React.FC<SearchBoxProps> = (props) => {
  const [searchQuery, setSearchQuery] = useState<string>(localStorage.getItem('query') || '');
  const inputRef = useRef(searchQuery);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const query = localStorage.getItem('query');
    query && setSearchQuery(query);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.currentTarget.value.trim();
    setSearchQuery((prevInput: string) => {
      if (inputValue !== prevInput) {
        return inputValue;
      }
      return prevInput;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onQueryChange(searchQuery);
    localStorage.setItem('query', searchQuery);
    setIsSubmitted(true);
  };

  const isError = props.filterData?.length === 0 && isSubmitted;

  return (
    <div id="search" className="search">
      <div className="search-container">
        <form data-testid="form" className="search__form" onSubmit={handleSubmit}>
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
      {isError && (
        <ErrorMessage
          errorMessage={`No results for ${localStorage.getItem(
            'query'
          )}. Try different search query.`}
        />
      )}
    </div>
  );
};
