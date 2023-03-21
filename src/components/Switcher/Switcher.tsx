import React, { Component } from 'react';
import './Switcher.css';

export default class Switcher extends Component {
  render() {
    return (
      <div className="switcher">
        <label id="label-YES">Y</label>
        <label id="label-NO">N</label>
        <input id="swithcer-checkbox" type="checkbox" />
      </div>
    );
  }
}
