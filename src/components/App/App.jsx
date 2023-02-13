
import { Form } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import css from './App.module.css';

export function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
        <Form/>
      <h2 className={css.title}>Contacts</h2>
      <Filter/>
          <ContactList/>    
    </div>
  );
}
