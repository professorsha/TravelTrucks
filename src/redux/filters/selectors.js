export const selectLocation = state => state.filters.location || '';
export const selectImageEquipments = state =>
  state.filters.imageEquipments || [];
export const selectImageType = state => state.filters.imageType || '';

