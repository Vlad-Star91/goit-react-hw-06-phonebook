import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';

import s from './SearchContact.module.css';

function SearchContact() {
  const value = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();
  const id = shortid.generate();
  return (
    <div className={s.containerSearch}>
      <label className={s.labelSearch} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(phonebookActions.getFilter(e.target.value))}
        id={id}
        className={s.inputSearch}
      ></input>
    </div>
  );
}
SearchContact.propTypes = {
  value: PropTypes.string,
  SearchContact: PropTypes.func,
};
export default SearchContact;
