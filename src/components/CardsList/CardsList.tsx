import React, { Component } from 'react';
import './CardsList.css';
import { CardProps } from '../Card/Card';
import CardData from '../../data/items.json';
import Card from '../Card/Card';

type CardsListProps = {
  cards?: CardProps[];
};

type State = CardsListProps;

export default class CardsList extends Component<CardsListProps, State> {
  state = { cards: CardData };

  render() {
    return (
      <div>
        <div className="card-list">
          <div className="card-list__container">
            {this.state.cards.map((card) => {
              return <Card key={card.id} {...card} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
