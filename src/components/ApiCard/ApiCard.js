import React, { useContext } from 'react';
import '../Card/Card.css';
import cardContext from '../../context/cardContext';
export const ApiCard = (props) => {
  const { setSelectedCardId, setPopupIsOpen } = useContext(cardContext);
  const onClickHandle = () => {
    setSelectedCardId(props.id);
    setPopupIsOpen(true);
  };
  const { name, image_thumbnail_path, start_date, country, network } = props;
  return React.createElement(
    'div',
    { className: 'card' },
    React.createElement('img', {
      className: 'card__pic',
      src: image_thumbnail_path,
      alt: `Picture of "${name}"`,
    }),
    React.createElement(
      'div',
      { className: 'card__text-container' },
      React.createElement('p', { className: 'card__text' }, name),
      React.createElement('p', { className: 'card__text card__text_category' }, country)
    ),
    React.createElement(
      'div',
      { className: 'card__subtext-container' },
      React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'card__subtext card__subtext_category' }, network),
        React.createElement('p', { className: 'card__subtext' }, start_date)
      ),
      React.createElement(
        'button',
        { onClick: onClickHandle, className: 'card__button_more' },
        'Details'
      )
    )
  );
};
