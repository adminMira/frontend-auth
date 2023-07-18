import { api } from './axios';
import { User } from '../types/types';

export const register = async (user: User) => {
  return await api.post('auth/register', user);
};

export const login = async (user: User) => {
  return await api.post('auth/login', user);
};

export const update = async (user: User) => {
  return await api.patch('users/update', user);
};

export const getMe = async () => {
  return await api.get('users/me');
};
