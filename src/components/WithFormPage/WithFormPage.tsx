import Form from '../Form/Form';
import React, { Component, PropsWithChildren } from 'react';
import '../WithFormPage/WithFormPage.css';
import CardsList from '../CardsList/CardsList';
import { CardProps } from '../Card/Card';

type CardsListState = {
  cards: CardProps[];
};

export default class WithFormPage extends Component<PropsWithChildren, CardsListState> {
  constructor(props: PropsWithChildren) {
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
