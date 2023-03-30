import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from '../Home/Home';
describe('Home', () => {
    test('renders SearchBar and CardsList', () => {
        render(React.createElement(Home, null));
        const searchBar = screen.getByRole('textbox');
        expect(searchBar).toBeInTheDocument();
        const cardsList = screen.getByRole('list');
        expect(cardsList).toBeInTheDocument();
    });
});
