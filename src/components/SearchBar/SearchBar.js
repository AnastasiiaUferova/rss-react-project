import React, { useState, useEffect, useRef } from 'react';
import './SearchBar.css';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
export const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('query') || '');
  const inputRef = useRef(searchQuery);
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    const query = localStorage.getItem('query');
    query && setSearchQuery(query);
  }, []);
  const handleChange = (e) => {
    const inputValue = e.currentTarget.value.trim();
    setSearchQuery((prevInput) => {
      if (inputValue !== prevInput) {
        return inputValue;
      }
      return prevInput;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onQueryChange(searchQuery);
    localStorage.setItem('query', searchQuery);
    setIsSubmitted(true);
  };
  const isError = props.filterData?.length === 0 && isSubmitted;
  return React.createElement(
    'div',
    { id: 'search', className: 'search' },
    React.createElement(
      'div',
      { className: 'search-container' },
      React.createElement(
        'form',
        { 'data-testid': 'form', className: 'search__form', onSubmit: handleSubmit },
        React.createElement('input', {
          ref: () => inputRef,
          className: 'search__form__input',
          type: 'text',
          value: searchQuery,
          onChange: handleChange,
        }),
        React.createElement('button', { className: 'search__form__button', type: 'submit' })
      )
    ),
    isError &&
      React.createElement(ErrorMessage, {
        errorMessage: `No results for ${localStorage.getItem(
          'query'
        )}. Try different search query.`,
      })
  );
};
