import React from 'react';
import './NotFound.css';
import NotFoundPic from '../../images/error.png';
export const NotFound = () => {
  return React.createElement(
    'div',
    { className: 'not-found' },
    React.createElement('img', {
      src: NotFoundPic,
      alt: 'not-found picture',
      className: 'not-found__pic',
    })
  );
};
