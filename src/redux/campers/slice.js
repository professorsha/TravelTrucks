import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchCatalog, fetchCatalogById } from './operations.js';
import { selectCampers, selectActiveCamperId } from './selectors.js';
// import { selectNameFilter } from '../filters/selectors';

export const handlePending = state => {
  state.isLoading = true;
  state.error = false;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    activeCamperId: null,
  },
  reducers: {
    setActiveCamperId(state, action) {
      state.activeCamperId = action.payload;
    },
    clearActiveCamperId(state) {
      state.activeCamperId = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCatalog.rejected, handleRejected)
      .addCase(fetchCatalog.pending, handlePending)
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCatalogById.rejected, handleRejected)
      .addCase(fetchCatalogById.pending, handlePending)
      .addCase(fetchCatalogById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.activeCamperId = action.payload;
        // console.log(state.activeCamperId);
      });
  },
});

// export const { toggleModal, setActiveCamperId, clearActiveCampertId } =
// campersSlice.actions;
export const { setActiveCamperId, clearActiveCampertId } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;

// export const selectFilteredCampers = createSelector(
//   [selectCampers, selectNameFilter],
//   (campers, filter) => {
//     return campers.filter(
//       camper =>
//         camper.name.toLowerCase().includes(filter.toLowerCase()) ||
//         camper.number.includes(filter)
//     );
//   }
// );
