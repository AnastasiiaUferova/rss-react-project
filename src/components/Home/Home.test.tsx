import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from '../Home/Home';
import axios from 'axios';
import { generalURL, URL } from '../../constants/constants';
import mockDataSearch from '../../mocks/mockDataSearch.json';
import mockDataCard from '../../mocks/mockDataCard.json';
import mockDataGeneral from '../../mocks/mockDataGeneral.json';

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

describe('API tests', () => {
  it('fetches data from the search endpoint', async () => {
    const res = await axios.get(`${generalURL}/search?q=licufer&page=1`);
    expect(res.status).toBe(200);
    expect(res.data).toEqual(mockDataSearch);
  });

  it('fetches data from the show-details endpoint', async () => {
    const res = await axios.get(`${generalURL}/show-details?q=2543`);
    expect(res.status).toBe(200);
    expect(res.data).toEqual(mockDataCard);
  });

  it('fetches data from the general endpoint', async () => {
    const res = await axios.get(URL);
    expect(res.status).toBe(200);
    expect(res.data).toEqual(mockDataGeneral);
  });
});
