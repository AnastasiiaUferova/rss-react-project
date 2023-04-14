import popupReducer, { setPopupData, setIsPopupOpen, popupState } from './popupSlice';
import { PopupData } from '../../types/types';
import formCardsReducer, { setFormCards, formCard } from './formCardsSlice';
import { CardProps } from '../../types/types';
import searchReducer, { setQuery, setIsSubmitted, searchState } from './searchSlice';

describe('popupSlice', () => {
  let initialState: popupState;

  beforeEach(() => {
    initialState = {
      data: null,
      isPopupOpen: false,
    };
  });

  it('should handle setPopupData', () => {
    const data: PopupData = {
      name: 'Show 1',
      description: 'Description of Show 1',
      network: 'Network 1',
      status: 'Status 1',
      country: 'Country 1',
      image_path: '/path/to/image',
      rating: '4.5',
      genres: ['Action', 'Drama'],
    };
    const nextState = popupReducer(initialState, setPopupData(data));
    expect(nextState.data).toEqual(data);
  });

  it('should handle setIsPopupOpen', () => {
    const nextState = popupReducer(initialState, setIsPopupOpen(true));
    expect(nextState.isPopupOpen).toEqual(true);
  });
});

describe('searchSlice', () => {
  let initialState: searchState;

  beforeEach(() => {
    initialState = {
      query: '',
      isSubmitted: false,
    };
  });

  it('should handle setQuery', () => {
    const query = 'query string';
    const nextState = searchReducer(initialState, setQuery(query));
    expect(nextState.query).toEqual(query);
  });

  it('should handle setIsSubmitted', () => {
    const nextState = searchReducer(initialState, setIsSubmitted(true));
    expect(nextState.isSubmitted).toEqual(true);
  });
});

describe('formCardsSlice', () => {
  let initialState: formCard;

  beforeEach(() => {
    initialState = {
      cards: [],
    };
  });

  it('should handle setFormCards', () => {
    const cards: CardProps[] = [
      {
        id: '1',
        image: '/path/to/image',
        name: 'Card 1',
        recommended: 'Recommended 1',
        categories: ['Category 1', 'Category 2'],
        date: '2023-04-15',
        occasion: 'Occasion 1',
      },
      {
        id: '2',
        image: '/path/to/image',
        name: 'Card 2',
        recommended: 'Recommended 2',
        categories: ['Category 3', 'Category 4'],
        date: '2023-04-16',
        occasion: 'Occasion 2',
      },
    ];
    const nextState = formCardsReducer(initialState, setFormCards(cards));
    expect(nextState.cards).toEqual(cards);
  });
});

import apiCardsReducer, { setApiCards, apiCardsState } from './apiCardsSlice';
import { ApiCardType } from '../../types/types';

describe('apiCardsSlice', () => {
  let initialState: apiCardsState;

  beforeEach(() => {
    initialState = {
      cards: [],
    };
  });

  it('should handle setApiCards', () => {
    const cards: ApiCardType[] = [
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
    ];
    const nextState = apiCardsReducer(initialState, setApiCards(cards));
    expect(nextState.cards).toEqual(cards);
  });
});
