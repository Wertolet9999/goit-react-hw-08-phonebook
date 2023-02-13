import axios from 'axios';

export const userPublicAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const userPrivateAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const token = {
  set: token => {
    userPrivateAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset: () => {
    userPrivateAPI.defaults.headers.common.Authorization = '';
  },
};
