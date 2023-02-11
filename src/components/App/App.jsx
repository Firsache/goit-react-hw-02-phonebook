import { Component } from 'react';
import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

import { Container } from './App.styled';
import { GlobalStyles } from 'styles/globalStyles.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filteredName: '',
  };

  addContact = contact => {
    if (this.state.contacts.some(c => c.number === contact.number)) {
      alert(`Contact ${contact.number} already exists!`);
    } else {
      this.setState({ contacts: [contact, ...this.state.contacts] });
    }
  };

  deleteContact = number => {
    const newContacts = this.state.contacts.filter(c => c.number !== number);
    this.setState({ contacts: newContacts });
  };

  handleFilter = event => {
    this.setState({ filteredName: event.target.value });
  };
  render() {
    const { contacts, filteredName } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(filteredName.toLowerCase().trim())
    );

    return (
      <Container>
        <Form onSubmit={this.addContact} />

        <Contacts
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        >
          <Filter value={filteredName} filterChange={this.handleFilter} />
        </Contacts>
        <GlobalStyles />
      </Container>
    );
  }
}
