import { SearchBar } from '../SearchBar/SearchBar';
import React, { FC, useState, useEffect } from 'react';
import { CardsList } from '../CardsList/CardsList';
import useFetch from '../../hooks/useFetch';
import { URL, generalURL } from '../../constants/constants';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loader } from '../Loader/Loader';
import Popup from '../Popup/Popup';
import cardContext from '../../context/cardContext';
import { TvShow } from '../../types/types';

export const Home: FC = () => {
  const { data, error, loading } = useFetch(URL);
  const [query, setQuery] = useState<string>('');
  const [selectedCardId, setSelectedCardId] = useState<string>();
  const [popupIsOpen, setPopupIsOpen] = useState<boolean>(false);

  const finalQuery = query ? query : localStorage.getItem('query');
  const {
    data: filterData,
    error: filterError,
    loading: filterLoading,
  } = useFetch(`${generalURL}/search?q=${finalQuery}&page=1`);

  const { popupData } = useFetch(`${generalURL}/show-details?q=${selectedCardId}`);

  const [cards, setCards] = useState<TvShow[]>();
  const isLoading = loading || filterLoading;
  const isError = error || filterError;

  console.log(popupData);

  const handleQueryChange = (newQuery: string) => {
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
    if (isError) return <ErrorMessage errorMessage={error?.message || filterError?.message} />;
    else return <CardsList cards={cards} />;
  }

  return (
    <>
      <cardContext.Provider value={{ setSelectedCardId, setPopupIsOpen }}>
        <div className="home">
          <SearchBar onQueryChange={handleQueryChange} />
          {isLoading && <Loader />}
          {renderElements()}
          <Popup data={popupData} popupIsOpen={popupIsOpen} setPopupIsOpen={setPopupIsOpen} />
        </div>
      </cardContext.Provider>
    </>
  );
};
