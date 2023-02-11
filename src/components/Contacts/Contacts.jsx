import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';

export function Contacts({ contacts, deleteContact }) {
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
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: <span>{number}</span>
            </p>
            <button
              onClick={() => {
                deleteContact(number);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
