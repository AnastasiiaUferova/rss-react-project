import Form from '../Form/Form';
import React, { Component } from 'react';
import '../WithFormPage/WithFormPage.css';
import CardsList from '../CardsList/CardsList';

export default class WithFormPage extends Component {
  render() {
    return (
      <div className="with-form">
        <Form />
        <CardsList />
      </div>
    );
  }
}
