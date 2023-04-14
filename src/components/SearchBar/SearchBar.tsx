import React, { useRef } from 'react';
import './SearchBar.css';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSubmitted, setQuery } from '../../redux/slices/searchSlice';
import { useGetFilteredCardsQuery } from '../../redux/slices/apiSlice';
import { RootState } from 'redux/store';

export const SearchBar: React.FC = () => {
  const query = useSelector((state: RootState) => state.setQuery.query);
  const isSubmitted = useSelector((state: RootState) => state.setIsSubmitted.isSubmitted);
  const dispatch = useDispatch();
  const { data: filterData } = useGetFilteredCardsQuery(query, { skip: !isSubmitted });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current !== null) {
      dispatch(setQuery(inputRef.current.value));
      dispatch(setIsSubmitted(true));
    }
    dispatch(setIsSubmitted(true));
  };

  const isError = filterData?.tv_shows.length === 0 && isSubmitted;

  return (
    <div id="search" className="search">
      <div className="search-container">
        <form data-testid="form" className="search__form" onSubmit={handleSubmit}>
          <input
            data-testid="form-input"
            defaultValue={query}
            ref={inputRef}
            className="search__form__input"
            type="text"
          ></input>
          <button className="search__form__button" type="submit"></button>
        </form>
      </div>
      {isError && (
        <ErrorMessage errorMessage={`No results for ${query}'. Try different search query.`} />
      )}
    </div>
  );
};
