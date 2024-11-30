import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  inputsHasAnError: false,
};

const slice = createSlice({
  name: '@main',
  initialState,
  reducers: {
    setInputsHasAnError(state, action: PayloadAction<boolean>) {
      state.inputsHasAnError = action.payload;
    },
  },
});

export const { reducer, actions } = slice;
