import React, { FC } from 'react';
import './CardsList.css';
import { CardProps } from '../Card/Card';
import { Card } from '../Card/Card';
import { ApiCardProps } from '../ApiCard/ApiCard';
import { ApiCard } from '../ApiCard/ApiCard';
import { useLocation } from 'react-router-dom';
import { TvShow } from '../../hooks/useFetch';

export type CardsListProps = {
  cards?: CardProps[] | ApiCardProps[] | TvShow[];
};

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
