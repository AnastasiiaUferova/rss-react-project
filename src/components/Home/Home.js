import SearchBar from '../SearchBar/SearchBar';
import React, { Component } from 'react';
import CardsList from '../CardsList/CardsList';
import CardData from '../../data/items.json';
export default class Home extends Component {
  render() {
    return React.createElement(
      'div',
      { className: 'home' },
      React.createElement(SearchBar, null),
      React.createElement(CardsList, { cards: CardData })
    );
  }
}
