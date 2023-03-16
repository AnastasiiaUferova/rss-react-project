import React, { Component } from 'react';
import './Card.css';
import Like from '../../images/thumbs-up.png';

export type CardProps = {
  id: number;
  imgUrl: string;
  name: string;
  popleLiked: number;
  price: number;
  favourite: boolean;
  category: string;
};

export default class Card extends Component<CardProps> {
  render() {
    const { name, imgUrl, popleLiked, category, price } = this.props;
    return (
      <div className="card">
        <img className="card__pic" src={imgUrl} alt={`Picture of "${name}"`}></img>

        <div className="card__text-container">
          <p className="card__text">{name}</p>
          <p className="card__text">${price}</p>
        </div>
        <div className="card__additional-container">
          <div>
            <p className="card__subtext">{category}</p>
            <div className="card__subtext_people-container">
              <img src={Like} alt="thumbs up" className="card__pic_people"></img>
              <p className="card__subtext card__subtext_people">{popleLiked}</p>
            </div>
          </div>
          <div className="card__button-container">
            <button className="card__button"></button>
          </div>
        </div>
      </div>
    );
  }
}
