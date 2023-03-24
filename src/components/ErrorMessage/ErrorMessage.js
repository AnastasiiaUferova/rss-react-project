import React, { Component } from 'react';
import './ErrorMessage.css';
export default class ErrorMessage extends Component {
  render() {
    return React.createElement('div', { className: 'error' }, this.props.errorMessage);
  }
}
