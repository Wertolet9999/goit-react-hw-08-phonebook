import { userPrivateAPI, userPublicAPI } from 'http/https';

export const signUp = async body => {
  const { data } = await userPublicAPI.post('users/signup', body);
  return data;
};

export const login = async body => {
  const { data } = await userPublicAPI.post('users/login', body);
  return data;
};

export const logout = async () => {
  const { data } = await userPrivateAPI.post('users/logout');
  return data;
};

export const getUserData = async () => {
  const { data } = await userPrivateAPI.get('users/current');
  return data;
};
