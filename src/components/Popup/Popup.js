import React from 'react';
import './Popup.css';
import useClickOutside from '../../hooks/useClickOutside';
const Popup = (props) => {
  const popupClass = props.popupIsOpen ? `popup popup_opened` : `popup`;
  const popupRef = useClickOutside(() => {
    props.setPopupIsOpen(false);
  });
  return React.createElement(
    'div',
    { className: popupClass },
    React.createElement(
      'div',
      { ref: popupRef, className: 'popup__container', 'aria-label': 'popup content' },
      React.createElement('button', {
        onClick: () => props.setPopupIsOpen(false),
        className: 'popup__close-button popup__close-button_type_pic',
        type: 'button',
        'aria-label': 'close popup',
      }),
      props.data
        ? React.createElement(
            React.Fragment,
            null,
            React.createElement(
              'section',
              { className: 'popup__info-wrapper' },
              React.createElement('img', {
                src: props.data.image_path,
                className: 'popup__pic',
                alt: 'popup picture',
              }),
              React.createElement(
                'div',
                { className: 'popup__text-wrapper' },
                React.createElement('h2', { className: 'popup__subtitle' }, props.data.name),
                React.createElement(
                  'p',
                  { className: 'popup__info' },
                  React.createElement('span', null, 'Status:'),
                  ' ',
                  props.data.status
                ),
                React.createElement(
                  'p',
                  { className: 'popup__info' },
                  React.createElement('span', null, 'Rating:'),
                  ' ',
                  props.data.rating
                ),
                React.createElement(
                  'p',
                  { className: 'popup__info' },
                  React.createElement('span', null, 'Genres:'),
                  ' ',
                  props.data.genres?.join(', ') || ''
                ),
                React.createElement(
                  'p',
                  { className: 'popup__info' },
                  React.createElement('span', null, 'Country:'),
                  ' ',
                  props.data.country
                ),
                React.createElement(
                  'p',
                  { className: 'popup__info' },
                  React.createElement('span', null, 'Network:'),
                  ' ',
                  props.data.network
                )
              )
            ),
            React.createElement(
              'h3',
              { className: 'popup__subtitle popup__subtitle-desc' },
              'Description'
            ),
            React.createElement('p', { className: 'popup__description' }, props.data.description)
          )
        : React.createElement('div', null, 'Loading...')
    )
  );
};
export default Popup;
