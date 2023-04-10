import React, { FC } from 'react';
import '../CardsList/CardsList.css';
import { ApiCard } from '../ApiCard/ApiCard';
import { ApiCardType, CardsApiListProps } from '../../types/types';

export const ApiCardsList: FC<CardsApiListProps> = (props: CardsApiListProps) => {
  return (
    <div>
      <div className="card-list">
        <ul className="card-list__container">
          {props.cards?.map((card: ApiCardType) => {
            return (
              <li key={card.id}>
                <ApiCard {...card} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
