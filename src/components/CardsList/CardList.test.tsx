import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsList, { CardsListProps } from './CardsList';

const defaultProps: CardsListProps = {
  cards: [
    {
      id: 1,
      imgUrl: 'https://example.com/image.jpg',
      name: 'Example product',
      popleLiked: 10,
      price: 20,
      favourite: false,
      category: 'Category1',
    },
    {
      id: 2,
      imgUrl: 'https://example.com/image2.jpg',
      name: 'Example product 2',
      popleLiked: 5,
      price: 10,
      favourite: true,
      category: 'Category2',
    },
    {
      id: 2,
      imgUrl: 'https://example.com/image3.jpg',
      name: 'Example product 2',
      popleLiked: 5,
      price: 10,
      favourite: true,
      category: 'Category3',
    },
    {
      id: 2,
      imgUrl: 'https://example.com/image4.jpg',
      name: 'Example product 2',
      popleLiked: 5,
      price: 10,
      favourite: true,
      category: 'Category4',
    },
  ],
};

describe('Card', () => {
  it('renders CardList', () => {
    render(<CardsList />);
    screen.debug();
  });
});

describe('CardsList', () => {
  it('renders with correct props', () => {
    render(<CardsList {...defaultProps} />);
    const cardList = screen.getByRole('list');
    const cards = screen.getAllByRole('listitem');

    expect(cardList).toBeInTheDocument();
    expect(cards).toHaveLength(defaultProps.cards!.length);
  });
});
