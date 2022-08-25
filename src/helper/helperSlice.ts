import { createSlice } from '@reduxjs/toolkit';

type HelperType = {
  isLoading: boolean;
  openModal: boolean;
};

const initialState: HelperType = {
  isLoading: false,
  openModal: false
};

export const helperSlice = createSlice({
  initialState,
  name: 'helper',
  reducers: {
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    toggleModal: (state) => {
      state.openModal = !state.openModal;
    }
  }
});

export const { toggleLoading, toggleModal } = helperSlice.actions;

export default helperSlice.reducer;
