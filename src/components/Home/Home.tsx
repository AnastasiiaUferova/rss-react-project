import { SearchBar } from '../SearchBar/SearchBar';
import React, { FC, useState, useEffect } from 'react';
import { CardsList } from '../CardsList/CardsList';
import useFetch, { TvShow } from '../../hooks/useFetch';
import { URL } from '../../constants/constants';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loader } from '../Loader/Loader';

export const Home: FC = () => {
  const { data, error, loading } = useFetch(URL);
  const [cards, setCards] = useState<TvShow[]>();

  useEffect(() => {
    setCards([...data]);
  }, [data]);

  function renderElements() {
    if (error) return <ErrorMessage errorMessage={error.message} />;
    else return <CardsList cards={cards} />;
  }

  return (
    <div className="home">
      <SearchBar />
      {loading && <Loader />}
      {renderElements()}
    </div>
  );
};
