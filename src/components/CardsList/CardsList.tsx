import React, { Component } from 'react';
import './CardsList.css';

export default class CardsList extends Component {
  render() {
    return (
      <div>
        <div className="card-list">
          <div className="card-list__container">
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
          </div>
        </div>
      </div>
    );
  }
}
