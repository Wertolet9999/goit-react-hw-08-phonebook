import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://63e0bf8c65b57fe606488be1.mockapi.io/contacts',
});

export const fetchContacts = async () => {
    const { data } = await instance.get('/');
    return data;
};

export const addContact = async options => {
    const { data } = await instance.post('/', options);
    return data;
};

export const deleteContact = async id => {
    const { data } = await instance.delete(`/${id}`);
    return data;
};