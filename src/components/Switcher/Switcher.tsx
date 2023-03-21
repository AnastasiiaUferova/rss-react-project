import React, { Component } from 'react';
import './Switcher.css';

export default class Switcher extends Component {
  render() {
    return (
      <div className="switch-field">
        <input defaultChecked type="radio" id="radio-one" name="switch-one" value="yes" />
        <label htmlFor="radio-one">Yes</label>
        <input type="radio" id="radio-two" name="switch-one" value="no" />
        <label htmlFor="radio-two">No</label>
      </div>
    );
  }
}
