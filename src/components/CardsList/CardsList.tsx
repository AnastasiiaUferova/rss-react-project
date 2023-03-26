import React, { Component } from 'react';
import './CardsList.css';
import { CardProps } from '../Card/Card';
import Card from '../Card/Card';

export type CardsListProps = {
  cards?: CardProps[];
};

export default class CardsList extends Component<CardsListProps> {
  constructor(props: CardsListProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="card-list">
          <ul className="card-list__container">
            {this.props?.cards?.map((card) => {
              return (
                <li key={card.id}>
                  <Card {...card} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
