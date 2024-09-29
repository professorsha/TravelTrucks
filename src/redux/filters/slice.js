import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectLocation:'',
  imageEquipments: [], // Выбранные фильтры по оборудованию (много)
  imageType: '',       // Выбранный фильтр по типу (один)
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // Обработка выбора фильтров по оборудованию
    toggleImageEquipments: (state, action) => {
      const index = state.imageEquipments.indexOf(action.payload);
      if (index >= 0) {
        // Если фильтр уже выбран, убираем его
        state.imageEquipments.splice(index, 1);
      } else {
        // Если фильтр не выбран, добавляем его
        state.imageEquipments.push(action.payload);
      }
    },
    
    // Обработка выбора типа автомобиля (один вариант)
    setImageType: (state, action) => {
      // Устанавливаем выбранный тип (заменяем предыдущий)
      state.imageType = action.payload;
    },
    
    // Сброс фильтров
    resetFilters: (state) => {
      state.imageEquipments = [];
      state.imageType = '';
    },
  },
});

export const { toggleImageEquipments, setImageType, resetFilters } = filtersSlice.actions;

export const filtersReducer= filtersSlice.reducer;
