import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { rtkQueryErrorHandler } from './middleware';
import { apiSlice } from 'src/features/apiSlice';
import helperReducer from 'src/helper/helperSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkQueryErrorHandler).concat(apiSlice.middleware),
  reducer: {
    helper: helperReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
