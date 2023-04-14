import Form from '../Form/Form';
import React, { FC, useState } from 'react';
import '../WithFormPage/WithFormPage.css';
import { CardsList } from '../CardsList/CardsList';
import { CardProps } from '../../types/types';

const WithFormPage: FC = () => {
  const [cards, setCards] = useState<CardProps[]>([]);

  function onAddCard(newCard: CardProps) {
    setCards([...cards, newCard]);
  }

  return (
    <div className="with-form">
      <Form onAddCard={onAddCard} />
      <CardsList />
    </div>
  );
};

export default WithFormPage;
