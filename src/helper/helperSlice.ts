import { createSlice } from '@reduxjs/toolkit';

import type { PostyType } from 'src/features/post';

type ModalType = 'updatePost' | 'createPost' | 'updateComment' | 'createComment' | '';

type HelperType = {
  isLoading: boolean;
  openModal: boolean;
  data?: PostyType;
  modalType?: ModalType;
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
    toggleModal: (
      state,
      data: {
        payload: { data?: PostyType; type?: ModalType };
        type: string;
      }
    ) => {
      state.data = data.payload.data;
      state.modalType = data.payload.type;
      state.openModal = !state.openModal;
      document.querySelector('body').classList.toggle('overflow-hidden');
    }
  }
});

export const { toggleLoading, toggleModal } = helperSlice.actions;

export default helperSlice.reducer;
