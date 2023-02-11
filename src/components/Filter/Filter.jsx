import PropTypes from 'prop-types';

export function Filter({ value, filterChange }) {
  return (
    <label>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filterName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={value}
        onChange={filterChange}
      />
    </label>
  );
}
Filter.propTrypes = {
  value: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};
