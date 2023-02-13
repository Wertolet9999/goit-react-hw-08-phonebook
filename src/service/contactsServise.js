import { userPrivateAPI } from 'http/https';

export const getContacts = async () => {
  const { data } = await userPrivateAPI.get('contacts');
  return data;
};

export const createContact = async contact => {
  const { data } = await userPrivateAPI.post('contacts', contact);
  return data;
};

export const deleteContactId = async contactId => {
  const { data } = await userPrivateAPI.delete(`contacts/${contactId}`);
  return data;
};
