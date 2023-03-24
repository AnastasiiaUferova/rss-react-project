import Form from '../Form/Form';
import React, { Component } from 'react';
import '../WithFormPage/WithFormPage.css';
import CardsList from '../CardsList/CardsList';
export default class WithFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
    this.onAddCard = this.onAddCard.bind(this);
  }
  onAddCard = (newCard) => {
    this.setState((prevState) => ({
      cards: [...prevState.cards, newCard],
    }));
  };
  render() {
    return React.createElement(
      'div',
      { className: 'with-form' },
      React.createElement(Form, { onAddCard: this.onAddCard }),
      React.createElement(CardsList, { cards: this.state.cards })
    );
  }
}
/*
function handleAddPlaceSubmit(newCard) {
    return api
        .addCard(newCard)
        .then((newCard) => {
            setCards([newCard, ...cards]);
            closeAllPopups();
        })
        .catch((err) => {
            console.log(err);
        });
}*/
