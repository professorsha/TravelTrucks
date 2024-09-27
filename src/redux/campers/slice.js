import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchCatalog, fetchCatalogById } from './operations.js';
import { selectCampers,selectActiveCamperId } from './selectors.js';
// import { selectNameFilter } from '../filters/selectors';

export const handlePending = state => {
  state.isLoading = true;
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
    // isModalOpen: false,
    activeCamperId: null,
  },
  reducers: {
    // toggleModal(state) {
    //   state.isModalOpen = !state.isModalOpen;
    // },
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
        // console.log(action.payload);
      })
      .addCase(fetchCatalogById.rejected, handleRejected)
      .addCase(fetchCatalogById.pending, handlePending)
      .addCase(fetchCatalogById.fulfilled,(state, action) => {
        state.isLoading = false;
        state.error = null;
        state.activeCamperId = action.payload;
         console.log(state.activeCamperId);
      });
    //   .addCase(addContact.rejected, handleRejected)
    //   .addCase(addContact.pending, handlePending)
    //   .addCase(addContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items.push(action.payload);
    //   })
    //   .addCase(deleteContact.rejected, handleRejected)
    //   .addCase(deleteContact.pending, handlePending)
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     const index = state.items.findIndex(
    //       task => task.id === action.payload.id
    //     );
    //     state.items.splice(index, 1);
    //   })
    //   .addCase(editContact.rejected, handleRejected)
    //   .addCase(editContact.pending, handlePending)
    //   .addCase(editContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     const index = state.items.findIndex(
    //       task => task.id === action.payload.id
    //     );
    //     state.items[index] = action.payload;
    //   })
    //   .addCase(logOut.fulfilled, state => {
    //     state.items = [];
    //     state.error = null;
    //     state.isLoading = false;
    //   });
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
