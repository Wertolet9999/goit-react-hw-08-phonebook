import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContact,
  deleteContactId,
  getContacts,
} from 'service/contactsServise';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    try {
      const data = await createContact(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const data = await deleteContactId(contactId);
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
