import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Popup from './Popup';
import { setIsPopupOpen } from '../../redux/slices/popupSlice';

const mockStore = configureMockStore();

describe('Popup component', () => {
  it('should dispatch setIsPopupOpen action when close button is clicked', () => {
    const store = mockStore({
      setIsOpenPopup: {
        isPopupOpen: true,
      },
      setPopupData: {
        data: {
          name: 'Test Show',
          image_path: 'https://example.com/test.jpg',
          status: 'Active',
          rating: 7.5,
          genres: ['Action', 'Drama'],
          country: 'USA',
          network: 'HBO',
          description: 'A test show for testing purposes.',
        },
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <Popup />
      </Provider>
    );

    fireEvent.click(getByTestId('popup-close-button'));

    const actions = store.getActions();
    expect(actions).toEqual([setIsPopupOpen(false)]);
  });
});
