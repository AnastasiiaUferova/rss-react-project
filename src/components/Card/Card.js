import React, { Component } from 'react';
import './Card.css';
export default class Card extends Component {
  render() {
    const { name, imgUrl, category, occasion, date } = this.props;
    return React.createElement(
      'div',
      { className: 'card' },
      React.createElement('img', {
        className: 'card__pic',
        src: imgUrl,
        alt: `Picture of "${name}"`,
      }),
      React.createElement(
        'div',
        { className: 'card__text-container' },
        React.createElement('p', { className: 'card__text' }, name),
        React.createElement('p', { className: 'card__text card__text_category' }, category)
      ),
      React.createElement(
        'div',
        { className: 'card__subtext-container' },
        React.createElement(
          'div',
          null,
          React.createElement('p', { className: 'card__subtext card__subtext_category' }, occasion),
          React.createElement('p', { className: 'card__subtext' }, date)
        ),
        React.createElement(
          'div',
          { className: 'card__button-container' },
          React.createElement('button', { className: 'card__button' })
        )
      )
    );
  }
}
