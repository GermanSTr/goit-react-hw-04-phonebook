import { ContactListItem } from './ContactListItem';

const ContactList = ({ contacts, handleDeleteContacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          name={contact.name}
          number={contact.number}
          key={contact.id}
          handleDeleteContacts={handleDeleteContacts}
          id={contact.id}
        />
      ))}
    </ul>
  );
};

export { ContactList };
