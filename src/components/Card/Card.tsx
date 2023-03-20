import React, { Component } from 'react';
import './Card.css';

export type CardProps = {
  id: number;
  imgUrl: string;
  name: string;
  recommended?: boolean;
  category: string;
  date?: string;
  occasion?: string;
};

export default class Card extends Component<CardProps> {
  render() {
    const { name, imgUrl, category, occasion, date } = this.props;
    return (
      <div className="card">
        <img className="card__pic" src={imgUrl} alt={`Picture of "${name}"`}></img>

        <div className="card__text-container">
          <p className="card__text">{name}</p>
          <p className="card__text card__text_category">{category}</p>
        </div>
        <div className="card__subtext-container">
          <div>
            <p className="card__subtext card__subtext_category">{occasion}</p>
            <p className="card__subtext">{date}</p>
          </div>
          <div className="card__button-container">
            <button className="card__button"></button>
          </div>
        </div>
      </div>
    );
  }
}
