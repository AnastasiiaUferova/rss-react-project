import React, { Component } from 'react';
import './CardsList.css';
import Card from '../Card/Card';
export default class CardsList extends Component {
  constructor(props) {
    super(props);
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
          this.props?.cards?.map((card) => {
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
