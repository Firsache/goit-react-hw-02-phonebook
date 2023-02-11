import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section } from 'components/Section/Section';
import { FormComponent, Label, Span, Input, Button } from './Form.styled';

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
        <FormComponent onSubmit={this.handleSubmit}>
          <Label>
            <Span>Name</Span>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </Label>
          <Label>
            <Span>Number</Span>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleInputChange}
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </FormComponent>
      </Section>
    );
  }
}
