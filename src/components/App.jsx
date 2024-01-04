import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddName = formData => {
    const hasDuplicates = contacts.some(
      profile => profile.name.toLowerCase() === formData.name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`${formData.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [...prevState, { ...formData, id: uuidv4() }]);
  };

  const handleChangeFilter = evt => {
    setFilter(evt.target.value);
  };

  const handleDeleteContacts = profileId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== profileId)
    );
  };

  const filterProfiles = contacts.filter(profile =>
    profile.name.toLowerCase().includes(filter.trim().toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddName={handleAddName} />

      <h2>Contacts</h2>
      <Filter handleChangeFilter={handleChangeFilter} filter={filter} />
      <ContactList
        contacts={filterProfiles}
        handleDeleteContacts={handleDeleteContacts}
      />
    </div>
  );
};
