import { SearchBar } from '../SearchBar/SearchBar';
import React, { FC, useState, useEffect } from 'react';
import { CardsList } from '../CardsList/CardsList';
import useFetch, { TvShow } from '../../hooks/useFetch';
import { URL } from '../../constants/constants';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loader } from '../Loader/Loader';
import Popup from '../Popup/Popup';
import cardContext from '../../context/cardContext';

export const Home: FC = () => {
  const { data, error, loading } = useFetch(URL);
  const [query, setQuery] = useState<string>('');
  const [selectedCardId, setSelectedCardId] = useState<string>();

  const finalQuery = query ? query : localStorage.getItem('query');
  const {
    data: filterData,
    error: filterError,
    loading: filterLoading,
  } = useFetch(`https://www.episodate.com/api/search?q=${finalQuery}&page=1`);

  const [cards, setCards] = useState<TvShow[]>();
  const isLoading = loading || filterLoading;
  const isError = error || filterError;

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

  /*function handleCardClick(data) {
    setSelectedCard({ name: data.name, link: data.link });
    setIsImagePopupOpen(true);
}*/

  function renderElements() {
    if (isError) return <ErrorMessage errorMessage={error?.message || filterError?.message} />;
    else return <CardsList cards={cards} />;
  }

  return (
    <>
      <cardContext.Provider value={{ selectedCardId, setSelectedCardId }}>
        <div className="home">
          <SearchBar onQueryChange={handleQueryChange} />
          {isLoading && <Loader />}
          {renderElements()}
          <Popup />
        </div>
      </cardContext.Provider>
    </>
  );
};
