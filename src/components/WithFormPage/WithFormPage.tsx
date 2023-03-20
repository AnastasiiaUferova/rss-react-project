import Form from '../Form/Form';
import React, { Component } from 'react';
import '../Form/Form.css';

export default class WithFormPage extends Component {
  render() {
    return (
      <div className="with-form">
        <Form />
      </div>
    );
  }
}
