import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/add', ({ name, number }) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

const deletedContact = createAction('phonebook/delete');

const getFilter = createAction('phonebook/getFilter');

export default { addContact, deletedContact, getFilter };
