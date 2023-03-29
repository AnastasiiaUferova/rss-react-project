import { SearchBar } from '../SearchBar/SearchBar';
import React from 'react';
import { CardsList } from '../CardsList/CardsList';
import CardData from '../../data/items.json';
export const Home = () => {
  return React.createElement(
    'div',
    { className: 'home' },
    React.createElement(SearchBar, null),
    React.createElement(CardsList, { cards: CardData })
  );
};
