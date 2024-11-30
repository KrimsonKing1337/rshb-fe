import { RootState } from '../store';

export const selectors = {
  name: (state: RootState) => state.inputs.name,
  nameHasAnError: (state: RootState) => state.inputs.nameHasAnError,

  email: (state: RootState) => state.inputs.email,
  emailHasAnError: (state: RootState) => state.inputs.emailHasAnError,

  city: (state: RootState) => state.inputs.city,
  cityHasAnError: (state: RootState) => state.inputs.cityHasAnError,

  phone: (state: RootState) => state.inputs.phone,
  phoneHasAnError: (state: RootState) => state.inputs.phoneHasAnError,
};
