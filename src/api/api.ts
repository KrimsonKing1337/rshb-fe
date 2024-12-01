import axios from 'axios';

import { User } from '@types';

export const getUsers = () => {
  return axios.get<User[]>('/api');
};

export const addUser = (user: User) => {
  return axios.put('/api', user);
};
