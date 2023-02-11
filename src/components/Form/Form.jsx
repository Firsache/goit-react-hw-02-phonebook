import { Component } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

import { Section } from 'components/Section/Section';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = evt => {
    let name = evt.target.name;
    let value = evt.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.props.onSubmit(contact);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <Section title="Phonebook">
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
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
              value={this.state.number}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </Section>
    );
  }
}
