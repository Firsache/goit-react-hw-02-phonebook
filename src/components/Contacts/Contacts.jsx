import PropTypes from 'prop-types';

import { Section } from 'components/Section/Section';

export function Contacts() {
  // state = {
  //  contacts: [
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ],
  //   filter: '',
  //   name: '',
  //   number: '',
  // };
  return (
    <Section title="Contacts">
      <label>
        <span>Find contacts by name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title=""
          required
        />
      </label>
      {/* <ul contacts={this.state.contacts}>
                <li key={id}><p>{name}:<span>{number}</span></p></li>
                <button>Delete</button>
          </ul> */}
    </Section>
  );
}
