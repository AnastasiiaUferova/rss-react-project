import React, { Component } from 'react';
import './Card.css';

export type CardProps = {
  id: string;
  image: string;
  name: string;
  recommended: boolean;
  categories: string[];
  date: string;
  occasion: string;
};

export default class Card extends Component<CardProps> {
  render() {
    const { name, image, categories, occasion, date, recommended } = this.props;
    const recClass = recommended ? `card__button card__button_rec` : `card__button`;
    return (
      <div className="card">
        <img className="card__pic" src={image} alt={`Picture of "${name}"`}></img>

        <div className="card__text-container">
          <p className="card__text">{name}</p>
          <p className="card__text card__text_category">{categories.join(', ')}</p>
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
  }
}
