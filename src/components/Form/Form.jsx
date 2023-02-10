import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

import { Section } from 'components/Section/Section';

export class Form extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };
  handleInputChange = evt => {
    let name = evt.target.name;
    let value = evt.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    console.log(evt);
    evt.preventDefault();
    // let id = nanoid();
  };
  render() {
    return (
      <Section title="Phonebook">
        <form>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            <span>Phone number</span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit" onSuspend={this.handleSubmit}>
            Add contact
          </button>
        </form>
      </Section>
    );
  }
}
