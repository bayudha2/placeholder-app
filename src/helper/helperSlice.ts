import { createSlice } from '@reduxjs/toolkit';

import type { PostyType } from 'src/features/post';

type HelperType = {
  isLoading: boolean;
  openModal: boolean;
  data?: PostyType;
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
    toggleModal: (state, data) => {
      state.data = data.payload;
      state.openModal = !state.openModal;
      document.querySelector('body').classList.toggle('overflow-hidden');
    }
  }
});

export const { toggleLoading, toggleModal } = helperSlice.actions;

export default helperSlice.reducer;
