import { combineReducers } from '@reduxjs/toolkit';
import authReduser from './auth/auth.slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReduser);

export const rootReducer = combineReducers({
  auth: persistedReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});
