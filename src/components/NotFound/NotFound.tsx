import React, { FC } from 'react';
import './NotFound.css';
import NotFoundPic from '../../images/error.png';

export const NotFound: FC = () => {
  return (
    <div className="not-found">
      <img src={NotFoundPic} alt="not-found picture" className="not-found__pic"></img>
    </div>
  );
};
