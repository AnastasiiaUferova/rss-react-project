import SearchBar from '../SearchBar/SearchBar';
import React, { Component } from 'react';
import CardsList from '../CardsList/CardsList';
import CardData from '../../data/items.json';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <SearchBar />
        <CardsList cards={CardData} />
      </div>
    );
  }
}
