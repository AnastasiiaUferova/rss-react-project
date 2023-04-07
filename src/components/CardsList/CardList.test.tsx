import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardsList } from './CardsList';
import { CardProps } from '../../types/types';

describe('CardsList', () => {
  const cards: CardProps[] = [
    {
      id: '1',
      image: 'http://example.com/image1.jpg',
      name: 'Example Name 1',
      recommended: 'yes',
      categories: ['Category 1', 'Category 2'],
      date: '2023-03-25',
      occasion: 'Example Occasion 1',
    },
    {
      id: '2',
      image: 'http://example.com/image2.jpg',
      name: 'Example Name 2',
      recommended: 'no',
      categories: ['Category 3'],
      date: '2023-03-26',
      occasion: 'Example Occasion 2',
    },
  ];

  it('should render the cards list with the correct number of cards', () => {
    render(<CardsList cards={cards} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('should not render the cards list when cards prop is not present', () => {
    render(<CardsList />);
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });
});
