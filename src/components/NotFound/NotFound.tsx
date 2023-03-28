import React, { Component } from 'react';
import './NotFound.css';
import NotFoundPic from '../../images/error.png';

export default class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <img src={NotFoundPic} alt="not-found picture" className="not-found__pic"></img>
      </div>
    );
  }
}
