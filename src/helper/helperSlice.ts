import { createSlice } from '@reduxjs/toolkit';

type HelperType = {
  isLoading: boolean;
};

const initialState: HelperType = {
  isLoading: false
};

export const helperSlice = createSlice({
  initialState,
  name: 'helper',
  reducers: {
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    }
  }
});

export const { toggleLoading } = helperSlice.actions;

export default helperSlice.reducer;
