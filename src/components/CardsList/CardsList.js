import React, { Component } from 'react';
import './CardsList.css';
import CardData from '../../data/items.json';
import Card from '../Card/Card';
export default class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: CardData };
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'card-list' },
        React.createElement(
          'ul',
          { className: 'card-list__container' },
          this.state?.cards?.map((card) => {
            return React.createElement(
              'li',
              { key: card.id },
              React.createElement(Card, { ...card })
            );
          })
        )
      )
    );
  }
}
