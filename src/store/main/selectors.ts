import { RootState } from '../store';

export const selectors = {
  user: (state: RootState) => state.main.user,
};
