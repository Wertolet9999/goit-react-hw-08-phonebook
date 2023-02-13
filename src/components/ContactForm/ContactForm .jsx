import { useState } from 'react';
import { toast } from 'react-toastify';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/contacts/contactsThunk';
import { contact } from 'Redux/selectors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });
  const contacts = useSelector(contact);
  const dispatch = useDispatch();

  const handleChange = event => {
    setFormData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = { name, number };
    contacts.contacts.find(contact => contact.name === name)
      ? toast.error('This contact already exists')
      : dispatch(addContact(formData));
    setFormData({ name: '', number: '' });
  };

  const { name, number } = formData;

  return (
    <>
      <Box
        className={css.form}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Phone"
          name="number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="(XXX) XXX-XX-XX"
          value={number}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit" size="medium">
          Add contact
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;

ContactForm.protoTypes = {
  name: PropTypes.string,
  phone: PropTypes.number,
  handleChange: PropTypes.func,
};
