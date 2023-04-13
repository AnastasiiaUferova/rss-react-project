import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface searchState {
  query: string;
  isSubmitted: boolean;
}

const initialState: searchState = {
  query: '',
  isSubmitted: false,
};

export const searchSlice = createSlice({
  name: 'searchQuery',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setIsSubmitted: (state, action: PayloadAction<boolean>) => {
      state.isSubmitted = action.payload;
    },
  },
});

export const { setQuery, setIsSubmitted } = searchSlice.actions;
export default searchSlice.reducer;
