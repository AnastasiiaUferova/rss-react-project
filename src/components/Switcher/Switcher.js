import React, { Component } from 'react';
import './Switcher.css';
export default class Switcher extends Component {
  render() {
    return React.createElement(
      'div',
      { className: 'switch-field' },
      React.createElement('input', {
        defaultChecked: true,
        type: 'radio',
        id: 'radio-one',
        name: 'switch-one',
        value: 'yes',
      }),
      React.createElement('label', { htmlFor: 'radio-one' }, 'Yes'),
      React.createElement('input', {
        type: 'radio',
        id: 'radio-two',
        name: 'switch-one',
        value: 'no',
      }),
      React.createElement('label', { htmlFor: 'radio-two' }, 'No')
    );
  }
}
