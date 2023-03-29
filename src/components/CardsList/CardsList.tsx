import React, { FC } from 'react';
import './CardsList.css';
import { CardProps } from '../Card/Card';
import { Card } from '../Card/Card';

export type CardsListProps = {
  cards?: CardProps[];
};

export const CardsList: FC<CardsListProps> = (props: CardsListProps) => {
  return (
    <div>
      <div className="card-list">
        <ul className="card-list__container">
          {props.cards?.map((card) => {
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
