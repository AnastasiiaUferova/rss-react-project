import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { ApiCard } from './ApiCard';

const mockStore = configureMockStore();

describe('ApiCard component', () => {
  const cardData = {
    id: 'lfl',
    name: 'The Office',
    image_thumbnail_path: 'https://example.com/the-office.jpg',
    start_date: '2005-03-24',
    country: 'USA',
    network: 'NBC',
  };

  it('renders card data correctly', () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <ApiCard {...cardData} />
      </Provider>
    );

    expect(screen.getByText(cardData.name)).toBeInTheDocument();
    expect(screen.getByText(cardData.country)).toBeInTheDocument();
    expect(screen.getByText(cardData.network)).toBeInTheDocument();
    expect(screen.getByAltText(`Picture of "${cardData.name}"`)).toHaveAttribute(
      'src',
      cardData.image_thumbnail_path
    );
  });

  it('dispatches correct actions when Details button is clicked', () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <ApiCard {...cardData} />
      </Provider>
    );

    fireEvent.click(screen.getByText('Details'));

    expect(store.getActions()).toEqual([
      { type: 'popup/setPopupData', payload: { tvShow: undefined } },
      { type: 'popup/setIsPopupOpen', payload: true },
    ]);
  });
});
