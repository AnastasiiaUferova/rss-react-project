import React, { Component } from 'react';
import './ConfirmMessage.css';
export default class ConfirmMessage extends Component {
  render() {
    return React.createElement(
      'div',
      { className: 'confirm' },
      'Your movie is submitted successfully'
    );
  }
}
