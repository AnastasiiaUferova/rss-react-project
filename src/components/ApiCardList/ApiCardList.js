import React from 'react';
import '../CardsList/CardsList.css';
import { ApiCard } from '../ApiCard/ApiCard';
export const ApiCardsList = (props) => {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'card-list' },
      React.createElement(
        'ul',
        { className: 'card-list__container' },
        props.cards?.map((card) => {
          return React.createElement(
            'li',
            { key: card.id },
            React.createElement(ApiCard, { ...card })
          );
        })
      )
    )
  );
};
