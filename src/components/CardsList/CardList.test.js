import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardsList } from './CardsList';
describe('CardsList', () => {
    const cards = [
        {
            id: '1',
            image: 'http://example.com/image1.jpg',
            name: 'Example Name 1',
            recommended: true,
            categories: ['Category 1', 'Category 2'],
            date: '2023-03-25',
            occasion: 'Example Occasion 1',
        },
        {
            id: '2',
            image: 'http://example.com/image2.jpg',
            name: 'Example Name 2',
            recommended: false,
            categories: ['Category 3'],
            date: '2023-03-26',
            occasion: 'Example Occasion 2',
        },
    ];
    it('should render the cards list with the correct number of cards', () => {
        render(React.createElement(CardsList, { cards: cards }));
        expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });
    it('should not render the cards list when cards prop is not present', () => {
        render(React.createElement(CardsList, null));
        expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    });
});
