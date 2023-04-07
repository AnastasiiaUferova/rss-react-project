import React, { FC } from 'react';
import './CardsList.css';
import { Card } from '../Card/Card';
import { CardProps, CardsListProps } from '../../types/types';

export const CardsList: FC<CardsListProps> = (props: CardsListProps) => {
  return (
    <div>
      <div className="card-list">
        <ul className="card-list__container">
          {props.cards?.map((card: CardProps) => {
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
};
