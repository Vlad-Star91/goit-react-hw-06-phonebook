import s from '../PhoneBook/PhoneBook.module.css';
import Form from '../ContactForm/Form';
import ContactList from '../ContactList/ContactList';
import SearchContact from '../SearchContact/SearchContact';

export default function Mobile() {
  return (
    <div className={s.container}>
      <h1 className={s.headingForm}>Phonebook</h1>
      <Form />
      <h2 className={s.contactList}>Contacts</h2>
      <SearchContact />
      <ContactList />
    </div>
  );
}
