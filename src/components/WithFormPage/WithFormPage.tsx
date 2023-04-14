import Form from '../Form/Form';
import React, { FC } from 'react';
import '../WithFormPage/WithFormPage.css';
import { CardsList } from '../CardsList/CardsList';

const WithFormPage: FC = () => {
  return (
    <div className="with-form">
      <Form />
      <CardsList />
    </div>
  );
};

export default WithFormPage;
