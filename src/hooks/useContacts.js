import { useSelector, useDispatch } from 'react-redux';
import { getVisibleFilter } from 'redux/selectors';

import { addContact, fetchContacts, deleteContact } from './../redux/operation.contacts'
import { useEffect } from 'react';

export const useContacts = () => {
  const contacts = useSelector(getVisibleFilter);
  const dispatch = useDispatch();

   useEffect(() => {
     dispatch(fetchContacts());
   }, [dispatch]);

  const onAddContact = payload => {
    const isFindCopyContact = contacts.find(
      el => el.name.toLocaleLowerCase() === payload.name.toLocaleLowerCase()
    );
    if (isFindCopyContact) {
      alert(`${payload.name} is in your Contacts`);
      return;
    }
    dispatch(addContact(payload));
  };

  const onDeleteContact = payload => {
    dispatch(deleteContact(payload));
  };
  return [contacts, onAddContact, onDeleteContact];
};
