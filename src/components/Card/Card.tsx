import React, { FC } from 'react';
import './Card.css';

export type CardProps = {
  id: string;
  image: string;
  name: string;
  recommended?: string;
  categories?: string[];
  date: string;
  occasion?: string;
};

type finalType = CardProps;

export const Card: FC<CardProps> = (props: finalType) => {
  const { name, image, categories, occasion, date, recommended } = props;
  const recClass = recommended === 'yes' ? `card__button card__button_rec` : `card__button`;
  return (
    <div className="card">
      <img className="card__pic" src={image} alt={`Picture of "${name}"`}></img>

      <div className="card__text-container">
        <p className="card__text">{name}</p>
        <p className="card__text card__text_category">{categories?.join(', ')}</p>
      </div>
      <div className="card__subtext-container">
        <div>
          <p className="card__subtext card__subtext_category">{occasion}</p>
          <p className="card__subtext">{date}</p>
        </div>
        <div className="card__button-container">
          <button className={recClass}></button>
        </div>
      </div>
    </div>
  );
};
