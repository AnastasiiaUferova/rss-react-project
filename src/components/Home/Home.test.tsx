import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { Home } from '../Home/Home';
import { setApiCards } from '../../redux/slices/apiCardsSlice';
import { setupServer } from 'msw/node';
import { handlers } from '../../mocks/handlers';

const server = setupServer(...handlers);
const mockStore = configureMockStore();

beforeAll(() => server.listen());
afterAll(() => server.close());

describe('Home', () => {
  it('should render movie cards', async () => {
    const store = mockStore({
      apiCards: {
        cards: [],
        isLoading: false,
        error: null,
      },
      search: {
        query: '',
        isSubmitted: false,
      },
    });

    store.dispatch(
      setApiCards([
        {
          id: '1',
          image_thumbnail_path: '/path/to/image',
          name: 'Show 1',
          start_date: '2023-04-15',
          network: 'Network 1',
          country: 'Country 1',
        },
        {
          id: '2',
          image_thumbnail_path: '/path/to/image',
          name: 'Show 2',
          start_date: '2023-04-16',
          network: 'Network 2',
          country: 'Country 2',
        },
      ])
    );

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const movieCards = await screen.findAllByTestId('movie-card');
    expect(movieCards).toHaveLength(2);
  });

  it('should render right cards for page 1', async () => {
    const store = mockStore({
      apiCards: {
        cards: [],
        isLoading: false,
        error: null,
      },
      search: {
        query: '',
        isSubmitted: false,
      },
    });

    store.dispatch(
      setApiCards([
        {
          id: '1',
          image_thumbnail_path: '/path/to/image',
          name: 'Show 1',
          start_date: '2023-04-15',
          network: 'Network 1',
          country: 'Country 1',
        },
        {
          id: '2',
          image_thumbnail_path: '/path/to/image',
          name: 'Show 2',
          start_date: '2023-04-16',
          network: 'Network 2',
          country: 'Country 2',
        },
      ])
    );

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    await screen.findByText('Supernatural');
    expect(screen.getByText('Supernatural')).toBeInTheDocument();
    expect(screen.getByText('The Big Bang Theory')).toBeInTheDocument();
  });

  test('renders SearchBar and CardsList', () => {
    const store = mockStore({
      apiCards: {
        cards: [],
        isLoading: false,
        error: null,
      },
      search: {
        query: '',
        isSubmitted: false,
      },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

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
