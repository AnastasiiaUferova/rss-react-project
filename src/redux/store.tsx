import { configureStore } from '@reduxjs/toolkit';
import setQueryReducer from './slices/searchSlice';
import setisSubmittedReducer from './slices/searchSlice';
import { showApi } from './slices/apiSlice';
import setApiCardsReducer from './slices/apiCardsSlice';
import setPopupDataReducer from './slices/popupSlice';
import setIOpenPopupReducer from './slices/popupSlice';

export const store = configureStore({
  reducer: {
    setQuery: setQueryReducer,
    setIsSubmitted: setisSubmittedReducer,
    setApiCards: setApiCardsReducer,
    setPopupData: setPopupDataReducer,
    setIsOpenPopup: setIOpenPopupReducer,
    [showApi.reducerPath]: showApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(showApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
