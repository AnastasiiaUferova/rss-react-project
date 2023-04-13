import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ApiCardType } from '../../types/types';

export interface apiCardsState {
  cards: ApiCardType[];
}

const initialState: apiCardsState = {
  cards: [],
};

export const apiCardsSlice = createSlice({
  name: 'apiCards',
  initialState,
  reducers: {
    setApiCards: (state, action: PayloadAction<ApiCardType[]>) => {
      state.cards = action.payload;
    },
  },
});

export const { setApiCards } = apiCardsSlice.actions;
export default apiCardsSlice.reducer;
