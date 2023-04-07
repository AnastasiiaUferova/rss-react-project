import { SearchBar } from '../SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { URL, generalURL } from '../../constants/constants';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loader } from '../Loader/Loader';
import Popup from '../Popup/Popup';
import cardContext from '../../context/cardContext';
import { ApiCardsList } from '../ApiCardList/ApiCardList';
export const Home = () => {
  const { data, error, loading } = useFetch(URL);
  const [query, setQuery] = useState('');
  const [selectedCardId, setSelectedCardId] = useState();
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const finalQuery = query ? query : localStorage.getItem('query');
  const {
    data: filterData,
    error: filterError,
    loading: filterLoading,
  } = useFetch(`${generalURL}/search?q=${finalQuery}&page=1`);
  const { popupData } = useFetch(`${generalURL}/show-details?q=${selectedCardId}`);
  console.log(filterData);
  const [cards, setCards] = useState();
  const isLoading = loading || filterLoading;
  const isError = error || filterError;
  const handleQueryChange = (newQuery) => {
    if (newQuery) {
      setQuery(newQuery);
      setCards(filterData);
    } else return;
  };
  useEffect(() => {
    if (!localStorage.getItem('query') && !query) {
      setCards(data);
    } else setCards(filterData);
  }, [data, filterData, query]);
  function renderElements() {
    if (isError)
      return React.createElement(ErrorMessage, {
        errorMessage: error?.message || filterError?.message,
      });
    else return React.createElement(ApiCardsList, { cards: cards });
  }
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      cardContext.Provider,
      { value: { setSelectedCardId, setPopupIsOpen } },
      React.createElement(
        'div',
        { className: 'home' },
        React.createElement(SearchBar, {
          filterData: filterData,
          onQueryChange: handleQueryChange,
        }),
        isLoading && React.createElement(Loader, null),
        renderElements(),
        React.createElement(Popup, {
          data: popupData,
          popupIsOpen: popupIsOpen,
          setPopupIsOpen: setPopupIsOpen,
        })
      )
    )
  );
};
