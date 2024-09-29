import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/slice.js';
import { filtersReducer } from './filters/slice.js';
import {favoritesReducer} from './favorites/slice.js';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
     filters: filtersReducer,
     favorites:favoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
