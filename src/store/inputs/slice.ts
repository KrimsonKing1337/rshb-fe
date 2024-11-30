import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  name: '',
  nameHasAnError: false,

  email: '',
  emailHasAnError: false,

  city: '',
  cityHasAnError: false,

  phone: '',
  phoneHasAnError: false,
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
