import React, { Component } from 'react';
import './ErrorMessage.css';

type ErrorProps = {
  errorMessage?: string;
};

export default class ErrorMessage extends Component<ErrorProps> {
  render() {
    return <div className="error">{this.props.errorMessage}</div>;
  }
}
