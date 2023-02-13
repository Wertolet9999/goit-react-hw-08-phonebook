import css from './ContactList.module.css';
import { useContacts } from 'hooks/useContacts';

export const ContactList = () => {
const [contacts, ,onDeleteContact] = useContacts();
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.listItem} key={id}>
          {name + ': ' + number}
          <button
            className={css.deleteButton}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};


