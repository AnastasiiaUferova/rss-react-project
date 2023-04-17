import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { SearchBar } from './SearchBar';
import { setQuery, setIsSubmitted } from '../../redux/slices/searchSlice';
import { MockStore } from 'redux-mock-store';

const mockStore = configureMockStore();

describe('SearchBar component', () => {
  let store: MockStore;
  let component: RenderResult;

  beforeEach(() => {
    store = mockStore({
      setQuery: {
        query: '',
      },
      setIsSubmitted: {
        isSubmitted: false,
      },
    });

    component = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  });

  it('should render input element', () => {
    const input = component.getByTestId('form-input');
    expect(input).toBeInTheDocument();
  });

  it('should dispatch setQuery action when submitting form', () => {
    const input = component.getByTestId('form-input');
    const form = component.getByTestId('form');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.submit(form);

    const actions = store.getActions();
    expect(actions).toContainEqual(setQuery('test'));
    expect(actions).toContainEqual(setIsSubmitted(true));
  });
});
