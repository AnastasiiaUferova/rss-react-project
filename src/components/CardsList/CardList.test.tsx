import React from 'react';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { CardsList } from './CardsList';
import { MockStore } from 'redux-mock-store';
import { CardProps } from '../../types/types';

const mockStore = configureMockStore();
const cards: CardProps[] = [
  {
    id: '1',
    name: 'Card 1',
    date: '2022-01-01',
    categories: ['Drama', 'Comedy'],
    occasion: 'Birthday',
    image: 'https://via.placeholder.com/150',
    recommended: 'true',
  },
  {
    id: '2',
    name: 'Card 2',
    date: '2022-02-01',
    categories: ['Thriller', 'Horror'],
    occasion: 'Anniversary',
    image: 'https://via.placeholder.com/150',
    recommended: 'false',
  },
];

describe('CardsList component', () => {
  let store: MockStore;

  beforeEach(() => {
    store = mockStore({
      setFormCards: {
        cards: cards,
      },
    });
  });

  it('renders a list of cards', () => {
    render(
      <Provider store={store}>
        <CardsList />
      </Provider>
    );

    expect(screen.getByTestId('cards-list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
