import { SearchBar } from '../SearchBar/SearchBar';
import React, { FC, useState, useEffect } from 'react';
import { CardsList } from '../CardsList/CardsList';
import useFetch, { TvShow } from '../../hooks/useFetch';
import { URL } from '../../constants/constants';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loader } from '../Loader/Loader';

export const Home: FC = () => {
  const { data, error, loading } = useFetch(URL);
  const [query, setQuery] = useState<string>('');

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
    if (!localStorage.getItem('query')) {
      setCards(data);
    } else setCards(filterData);
  }, [data, filterData, query]);

  function renderElements() {
    if (isError) return <ErrorMessage errorMessage={error?.message || filterError?.message} />;
    else return <CardsList cards={cards} />;
  }

  return (
    <div className="home">
      <SearchBar onQueryChange={handleQueryChange} />
      {isLoading && <Loader />}
      {renderElements()}
    </div>
  );
};
