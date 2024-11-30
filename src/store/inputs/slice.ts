import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  name: '',
  nameHasAnError: true,

  email: '',
  emailHasAnError: true,

  city: '',
  cityHasAnError: true,

  phone: '',
  phoneHasAnError: true,
};

const slice = createSlice({
  name: '@inputs',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setNameHasAnError(state, action: PayloadAction<boolean>) {
      state.nameHasAnError = action.payload;
    },

    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setEmailHasAnError(state, action: PayloadAction<boolean>) {
      state.emailHasAnError = action.payload;
    },

    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    setCityHasAnError(state, action: PayloadAction<boolean>) {
      state.cityHasAnError = action.payload;
    },

    setPhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
    setPhoneHasAnError(state, action: PayloadAction<boolean>) {
      state.phoneHasAnError = action.payload;
    },
  },
});

export const { reducer, actions } = slice;
