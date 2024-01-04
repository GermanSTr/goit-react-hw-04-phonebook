import css from './ContactForm.module.css';

export const ContactForm = ({ handleAddName }) => {
  const handleFormSubmit = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.elements.name.value;
    const number = evt.currentTarget.elements.number.value;
    const formData = { name, number };
    handleAddName(formData);
    evt.currentTarget.reset();
  };

  return (
    <form className={css.formContacts} onSubmit={handleFormSubmit}>
      <label className={css.formLabel}>
        <span className={css.formSpan}>Name</span>
        <input type="text" name="name" className={css.formInput} required />
      </label>
      <label className={css.formLabel}>
        <span className={css.formSpan}>Number</span>
        <input type="tel" name="number" className={css.formInput} required />
      </label>
      <button type="submit" className={css.formButton}>
        Add Contact
      </button>
    </form>
  );
};
