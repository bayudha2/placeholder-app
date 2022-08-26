import { createSlice } from '@reduxjs/toolkit';

import type { PostyType } from 'src/features/post';

type ModalType = 'updatePost' | 'createPost' | 'updateComment' | 'createComment' | '';

type HelperType = {
  userChanging: boolean;
  openModal: boolean;
  data?: PostyType;
  modalType?: ModalType;
  forComment?: Partial<PostyType>;
};

const initialState: HelperType = {
  userChanging: false,
  openModal: false
};

export const helperSlice = createSlice({
  initialState,
  name: 'helper',
  reducers: {
    toggleUserChange: (state) => {
      state.userChanging = !state.userChanging;
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
    },
    getComment: (
      state,
      data: {
        payload: { data?: PostyType };
        type: string;
      }
    ) => {
      state.forComment = data.payload.data;
    }
  }
});

export const { toggleUserChange, toggleModal, getComment } = helperSlice.actions;

export default helperSlice.reducer;
