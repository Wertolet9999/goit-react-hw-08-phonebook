import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'http/https';
import { login, logout } from '../../service/usersServise';
import { getUserData } from '../../service/usersServise';

export const LoginThunk = createAsyncThunk(
  'users/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await login(body);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const LogoutThunk = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logout();
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserDataThunk = createAsyncThunk(
  'users/getData',
  async (_, { rejectWithValue, getState }) => {
    try {
      const saveToken = getState().auth.token;

      if (saveToken) {
        token.set(saveToken);
      } else {
        return rejectWithValue();
      }
      const data = await getUserData();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
