import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const camper = action.payload;
      const isFavorite = state.favorites.some(fav => fav.id === camper.id);

      if (isFavorite) {
        state.favorites = state.favorites.filter(fav => fav.id !== camper.id);
      } else {
        state.favorites.push(camper);
      }
    },
    resetFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { toggleFavorites, resetFavorites } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
