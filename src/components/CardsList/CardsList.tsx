import React, { FC } from 'react';
import './CardsList.css';
import { Card } from '../Card/Card';
import { CardProps } from '../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export const CardsList: FC = () => {
  const cards = useSelector((state: RootState) => state.setFormCards.cards);
  console.log(cards);
  return (
    <div>
      <div className="card-list">
        <ul className="card-list__container">
          {cards?.map((card: CardProps) => {
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
