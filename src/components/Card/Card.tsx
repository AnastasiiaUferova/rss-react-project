import React, { Component } from 'react';
import './Card.css';

export type CardProps = {
  imgUrl: string;
  name: string;
  popleLiked: number;
};

export default class Card extends Component<CardProps> {
  render() {
    const { name, imgUrl, popleLiked } = this.props;
    return (
      <div className="card">
        <img
          className="card__pic"
          src={`https://api.nomoreparties.co${imgUrl}`}
          alt={`Film poster for "${name}"`}
        ></img>

        <div className="card__text-container">
          <p className="card__text">{name}</p>
        </div>
        <p className="card__time">{popleLiked} </p>
      </div>
    );
  }
}
