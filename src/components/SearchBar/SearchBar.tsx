import React, { useState, ChangeEvent, useEffect } from 'react';
import './SearchBar.css';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { searchState, setIsSubmitted, setQuery } from '../../redux/slices/searchSlice';
import { useGetAllCardsQuery, useGetFilteredCardsQuery } from '../../redux/slices/apiSlice';
import { RootState } from 'redux/store';

export const SearchBar: React.FC = () => {
  const { data: cardsData } = useGetAllCardsQuery('');
  // const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const query = useSelector((state: RootState) => state.setQuery.query);
  const isSubmitted = useSelector((state: RootState) => state.setIsSubmitted.isSubmitted);
  const dispatch = useDispatch();
  const { data: filterData } = useGetFilteredCardsQuery(query, { skip: !isSubmitted });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setQuery(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setIsSubmitted(true));
  };

  const isError = filterData?.tv_shows.length === 0 && isSubmitted;

  /*useEffect(() => {
    if (!isError && isSubmitted) {
      dispatch(setIsSubmitted(false));
    }
  }, [isError, isSubmitted, dispatch]);*/

  return (
    <div id="search" className="search">
      <div className="search-container">
        <form data-testid="form" className="search__form" onSubmit={handleSubmit}>
          <input
            className="search__form__input"
            type="text"
            value={query}
            onChange={handleChange}
          ></input>
          <button className="search__form__button" type="submit"></button>
        </form>
      </div>
      {isError && (
        <ErrorMessage
          errorMessage={`No results for ${query}'
          )}. Try different search query.`}
        />
      )}
    </div>
  );
};
