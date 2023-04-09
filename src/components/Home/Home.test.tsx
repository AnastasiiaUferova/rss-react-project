import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from '../Home/Home';
import { setupServer } from 'msw/node';
import { handlers } from '../../mocks/handlers';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe('Home', () => {
  it('should render movie cards', async () => {
    render(<Home />);
    const movieCards = await screen.findAllByTestId('movie-card');
    expect(movieCards).toHaveLength(20);
  });

  it('should render rigth cards for page 1', async () => {
    render(<Home />);
    await screen.findByText('Supernatural');
    expect(screen.getByText('Supernatural')).toBeInTheDocument();
    expect(screen.getByText('The Big Bang Theory')).toBeInTheDocument();
  });
});

describe('Home', () => {
  test('renders SearchBar and CardsList', () => {
    render(<Home />);

    const searchBar = screen.getByRole('textbox');
    expect(searchBar).toBeInTheDocument();

    const cardsList = screen.getByRole('list');
    expect(cardsList).toBeInTheDocument();
  });
});

test('renders initial card list', () => {
  render(<Home />);

  const searchBar = screen.getByRole('textbox');
  expect(searchBar).toBeInTheDocument();

  const cardsList = screen.getByRole('list');
  expect(cardsList).toBeInTheDocument();
});
