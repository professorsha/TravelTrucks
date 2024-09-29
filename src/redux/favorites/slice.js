import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectFavorite: [],
};
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    // Обработка выбора фильтров по оборудованию
    toggleFavorites: (state, action) => {
      const index = state.selectFavorite.indexOf(action.payload);
      if (index >= 0) {
        state.selectFavorite.splice(index, 1);
      } else {
        state.selectFavorite.push(action.payload);
      }
    },

    // Сброс фильтров
    resetFavorites: state => {
      state.selectFavorite = [];
    },
  },
});

export const { toggleFavorites, resetFavorites } =
favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
