import React, { FC } from 'react';
import './CardsList.css';
import { Card } from '../Card/Card';
import { ApiCard } from '../ApiCard/ApiCard';
import { useLocation } from 'react-router-dom';
import { CardsListProps } from '../../types/types';

export const CardsList: FC<CardsListProps> = (props: CardsListProps) => {
  const location = useLocation();
  const isForm = location.pathname === '/form';

  function renderCards(card) {
    if (isForm)
      return (
        <li key={card.id}>
          <Card {...card} />
        </li>
      );
    else
      return (
        <li key={card.id}>
          <ApiCard {...card} />
        </li>
      );
  }

  return (
    <div>
      <div className="card-list">
        <ul className="card-list__container">
          {props.cards?.map((card) => {
            return renderCards(card);
          })}
        </ul>
      </div>
    </div>
  );
};
