import axios from 'axios';

import { User } from '../@types';

export const getUsers = () => {
  return axios.get<User[]>('/api');
};

export const addUser = () => {
  return axios.put('/api', { name: 'Олег', email: 'shilov-1@yandex.ru', city: 'Москва', phone: '1234567890' });
};
