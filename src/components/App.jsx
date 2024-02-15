// import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
import { setFilter } from '../redux/filter/filter-slice';
import { addContact, deleteContact } from '../redux/contacts/contacts-slice';

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isDuplicate = ({ name }) => {
    const normalizedName = name.toLowerCase();

    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  const onAddContact = data => {
    if (isDuplicate(data)) {
      return alert('Цей контакт вже їснує!');
    }

    const action = addContact(data);
    dispatch(action);
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div className="blockPhonebook">
        <h1 className="titlePhonebook">Phonebook</h1>
        <div>
          <ContactForm onSubmit={onAddContact} />
        </div>
        <h2 className="titleContacts">Contacts</h2>
        <div className="formContacts">
          <Filter filter={filter} changeFilter={changeFilter} />
          {contacts.length > 0 || filter ? (
            <ContactList
              items={filteredContacts}
              deleteContact={onDeleteContact}
            />
          ) : (
            <p className="pMessage">No contacts found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
