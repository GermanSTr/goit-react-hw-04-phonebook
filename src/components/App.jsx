import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevState, prevProps) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddName = formData => {
    const hasDuplicates = this.state.contacts.some(
      profile => profile.name.toLowerCase() === formData.name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`${formData.name} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...formData, id: uuidv4() }],
      };
    });
  };

  handleChangeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  handleDeleteContacts = profileId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== profileId),
    }));
  };

  render() {
    const filterProfiles = this.state.contacts.filter(profile =>
      profile.name
        .toLowerCase()
        .includes(this.state.filter.trim().toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleAddName={this.handleAddName} />

        <h2>Contacts</h2>
        <Filter
          handleChangeFilter={this.handleChangeFilter}
          filter={this.state.filter}
        />
        <ContactList
          contacts={filterProfiles}
          handleDeleteContacts={this.handleDeleteContacts}
        />
      </div>
    );
  }
}
