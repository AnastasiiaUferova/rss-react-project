import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PopupData } from '../../types/types';

export interface popupState {
  data: PopupData | null;
  isPopupOpen: boolean;
}

const initialState: popupState = {
  data: null,
  isPopupOpen: false,
};

export const popupSlice = createSlice({
  name: 'popupData',
  initialState,
  reducers: {
    setPopupData: (state, action: PayloadAction<PopupData>) => {
      state.data = action.payload;
    },
    setIsPopupOpen: (state, action: PayloadAction<boolean>) => {
      state.isPopupOpen = action.payload;
    },
  },
});

export const { setPopupData, setIsPopupOpen } = popupSlice.actions;
export default popupSlice.reducer;
