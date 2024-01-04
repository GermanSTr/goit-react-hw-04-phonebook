import css from './ContactListItem.module.css';

const ContactListItem = ({ name, number, handleDeleteContacts, id }) => {
  return (
    <li className={css.itemLi}>
      {name}: {number}
      <button
        onClick={() => handleDeleteContacts(id)}
        type="button"
        className={css.contactsDelete}
      >
        Delete
      </button>
    </li>
  );
};

export { ContactListItem };
