import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PopupData } from '../../types/types';

export interface popupState {
  data: PopupData | null;
}

const initialState: popupState = {
  data: null,
};

export const popupSlice = createSlice({
  name: 'apiCards',
  initialState,
  reducers: {
    setPopupData: (state, action: PayloadAction<PopupData>) => {
      state.data = action.payload;
    },
  },
});

export const { setPopupData } = popupSlice.actions;
export default popupSlice.reducer;
