import { createSlice } from '@reduxjs/toolkit';

import type { PostyType } from 'src/features/post';
import type { CommentType } from 'src/features/comment';

type ModalType = 'updatePost' | 'createPost' | 'updateComment' | 'createComment' | '';

type HelperType = {
  openModal: boolean;
  userChanging: boolean;
  data?: PostyType;
  dataComment?: CommentType;
  modalType?: ModalType;
  forComment?: Partial<PostyType>;
};

const initialState: HelperType = {
  openModal: false,
  userChanging: false
};

export const helperSlice = createSlice({
  initialState,
  name: 'helper',
  reducers: {
    getComment: (
      state,
      data: {
        payload: { data?: PostyType };
        type: string;
      }
    ) => {
      state.forComment = data.payload.data;
    },
    toggleModal: (
      state,
      data: {
        payload: { data?: PostyType; type?: ModalType; dataComment?: CommentType };
        type: string;
      }
    ) => {
      state.data = data.payload.data;
      state.dataComment = data.payload.dataComment;
      state.modalType = data.payload.type;
      state.openModal = !state.openModal;
      document.querySelector('body').classList.toggle('overflow-hidden');
    },
    toggleUserChange: (state) => {
      state.userChanging = !state.userChanging;
    }
  }
});

export const { toggleUserChange, toggleModal, getComment } = helperSlice.actions;

export default helperSlice.reducer;
