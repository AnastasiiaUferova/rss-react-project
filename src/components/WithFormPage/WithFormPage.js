import Form from '../Form/Form';
import React, { useState } from 'react';
import '../WithFormPage/WithFormPage.css';
import { CardsList } from '../CardsList/CardsList';
const WithFormPage = () => {
  const [cards, setCards] = useState([]);
  const onAddCard = (newCard) => {
    setCards([...cards, newCard]);
  };
  return React.createElement(
    'div',
    { className: 'with-form' },
    React.createElement(Form, null),
    React.createElement(CardsList, { cards: cards })
  );
};
export default WithFormPage;
