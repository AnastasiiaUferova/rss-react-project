import React, { Component } from 'react';
import './Card.css';
export default class Card extends Component {
  render() {
    const { name, image, categories, occasion, date, recommended } = this.props;
    const recClass = recommended ? `card__button card__button_rec` : `card__button`;
    return React.createElement(
      'div',
      { className: 'card' },
      React.createElement('img', {
        className: 'card__pic',
        src: image,
        alt: `Picture of "${name}"`,
      }),
      React.createElement(
        'div',
        { className: 'card__text-container' },
        React.createElement('p', { className: 'card__text' }, name),
        React.createElement(
          'p',
          { className: 'card__text card__text_category' },
          categories.join(', ')
        )
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
          React.createElement('button', { className: recClass })
        )
      )
    );
  }
}
