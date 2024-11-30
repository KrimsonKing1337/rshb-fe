import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  user: null,
};

const slice = createSlice({
  name: '@main',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<State['user']>) {
      state.user = action.payload;
    },
  },
});

export const { reducer, actions } = slice;
