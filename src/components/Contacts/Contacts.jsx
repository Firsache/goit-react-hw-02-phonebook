import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';

export function Contacts({ contacts, deleteContact, children }) {
  return (
    <Section title="Contacts">
      {children}
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
  deleteContact: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
