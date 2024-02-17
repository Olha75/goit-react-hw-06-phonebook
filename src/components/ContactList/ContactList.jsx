import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem/ContactItem';
import { getFilteredContacts } from '../../../redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-slice';
import css from './contactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <ol className={css.allContact}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ol>
  );
};

export default ContactList;
