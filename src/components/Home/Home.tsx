import { SearchBar } from '../SearchBar/SearchBar';
import React, { FC, useState, useEffect } from 'react';
import { CardsList } from '../CardsList/CardsList';
import useFetch from '../../hooks/useFetch';
import { URL } from '../../constants/constants';

export const Home: FC = () => {
  const { data } = useFetch(URL);
  const [cards, setCards] = useState<[]>();

  useEffect(() => {
    setCards([...data]);
  }, [data]);
  console.log(data);

  return (
    <div className="home">
      <SearchBar />
      <CardsList cards={cards} />
    </div>
  );
};
