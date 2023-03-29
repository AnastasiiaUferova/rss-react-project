import { SearchBar } from '../SearchBar/SearchBar';
import React, { FC } from 'react';
import { CardsList } from '../CardsList/CardsList';
import CardData from '../../data/items.json';

export const Home: FC = () => {
  return (
    <div className="home">
      <SearchBar />
      <CardsList cards={CardData} />
    </div>
  );
};
