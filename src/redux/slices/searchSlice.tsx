import { createSlice } from '@reduxjs/toolkit';

export interface searchState {
  query: string;
}

const initialState: searchState = {
  query: '',
};

export const searchSlice = createSlice({
  name: 'searchQuery',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
