export const selectCampers = (state) => state.campers.items;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
// export const selectIsModalOpen = (state) => state.campers.isModalOpen;
export const selectActiveCamperId = (state) => state.campers.activeCamperId;
export const selectCamperById = (state, camperId) =>
  state.campers.items.find((camper) => camper.id === camperId);
