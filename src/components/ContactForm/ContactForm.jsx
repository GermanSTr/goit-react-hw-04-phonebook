import React, { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  handleFormSubmit = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.elements.name.value;
    const number = evt.currentTarget.elements.number.value;
    const formData = { name, number };
    this.props.handleAddName(formData);
    evt.currentTarget.reset();
  };

  render() {
    return (
      <form className={css.formContacts} onSubmit={this.handleFormSubmit}>
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
  }
}
