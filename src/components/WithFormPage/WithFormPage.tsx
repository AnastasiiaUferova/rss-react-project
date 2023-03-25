import Form from '../Form/Form';
import React, { Component } from 'react';
import '../WithFormPage/WithFormPage.css';
import CardsList from '../CardsList/CardsList';
import { CardProps } from '../Card/Card';

type CardsListState = {
  cards: CardProps[];
};

type CardsListProps = CardsListState;

export default class WithFormPage extends Component<CardsListState, CardsListProps> {
  constructor(props: CardsListProps) {
    super(props);
    this.state = {
      cards: [],
    };
    this.onAddCard = this.onAddCard.bind(this);
  }

  onAddCard = (newCard: CardProps) => {
    this.setState((prevState) => ({
      cards: [...prevState.cards, newCard],
    }));
  };

  render() {
    return (
      <div className="with-form">
        <Form onAddCard={this.onAddCard} />
        <CardsList cards={this.state.cards} />
      </div>
    );
  }
}
