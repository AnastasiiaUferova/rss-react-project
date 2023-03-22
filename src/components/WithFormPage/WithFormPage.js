import Form from '../Form/Form';
import React, { Component } from 'react';
import '../WithFormPage/WithFormPage.css';
import CardsList from '../CardsList/CardsList';
export default class WithFormPage extends Component {
  render() {
    return React.createElement(
      'div',
      { className: 'with-form' },
      React.createElement(Form, null),
      React.createElement(CardsList, null)
    );
  }
}
