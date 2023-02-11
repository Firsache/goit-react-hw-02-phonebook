import { Component } from 'react';
import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContact = contact => {
    // const isInclude = this.state.contacts.find(
    //   el => el.number === contact.number
    // );
    if (this.state.contacts.some(c => c.number === contact.number)) {
      alert('there is such a number');
    } else {
      this.setState({ contacts: [contact, ...this.state.contacts] });
    }
  };

  deleteContact = number => {
    const newContacts = this.state.contacts.filter(c => c.number !== number);
    this.setState({ contacts: newContacts });
  };
  render() {
    return (
      <>
        <Form onSubmit={this.addContact} />
        <Contacts
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
