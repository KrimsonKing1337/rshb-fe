import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { User } from '@types';

import type { State } from './@types';

export const initialState: State = {
  user: null,
  users: [],
};

const slice = createSlice({
  name: '@main',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<State['user']>) {
      state.user = action.payload;
    },

    fetchUsers() {},
    setUsers(state, action: PayloadAction<State['users']>) {
      state.users = action.payload;
    },

    // eslint-disable-next-line
    fetchPutUser(_state, _action: PayloadAction<User>) {},
  },
});

export const { reducer, actions } = slice;
