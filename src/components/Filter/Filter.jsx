import css from './Filter.module.css';

const Filter = ({ handleChangeFilter, filter }) => {
  return (
    <div className={css.filter}>
      <p>Find contacts by name</p>
      <input
        onChange={handleChangeFilter}
        value={filter}
        type="text"
        name="filter"
        className={css.filterInput}
      />
    </div>
  );
};

export { Filter };
