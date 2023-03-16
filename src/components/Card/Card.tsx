import React, { Component } from 'react';
import './Card.css';

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
    const { name, imgUrl, popleLiked } = this.props;
    return (
      <div className="card">
        <img className="card__pic" src={imgUrl} alt={`Picture of "${name}"`}></img>

        <div className="card__text-container">
          <p className="card__text">{name}</p>
        </div>
        <p className="card__time">{popleLiked} </p>
      </div>
    );
  }
}
