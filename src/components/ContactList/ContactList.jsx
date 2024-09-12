import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
// console.log(filteredContacts);
    return (
        <ul className={css.contactList}>
            {filteredContacts.map(contact => (
                <li key={contact.id} className={css.contactListItem}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
