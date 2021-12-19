import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import s from './ContactList.module.css';
import phonebookActions from '../../redux/phonebook/phonebook-actions';

function ContactList() {
  const contactList = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <ul className={'js-list'}>
      {contactList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button
              className={s.btnList}
              type="button"
              onClick={() => dispatch(phonebookActions.deletedContact(id))}
            >
              Deleted
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func,
};
export default ContactList;
