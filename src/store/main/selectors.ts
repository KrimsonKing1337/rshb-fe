import { RootState } from '../store';

export const selectors = {
  inputsHasAnError: (state: RootState) => state.main.inputsHasAnError,
};
