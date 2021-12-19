import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phonebookActions from './phonebook-actions';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const items = createReducer(initialState, {
  [phonebookActions.addContact]: (state, { payload }) => {
    if (
      state.some(
        ({ name }) => name.toLowerCase() === payload.name.toLowerCase(),
      )
    ) {
      alert(`${payload.name} is already in contacts!`);
      return state;
    }
    return [...state, payload];
  },
  [phonebookActions.deletedContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});
const filter = createReducer('', {
  [phonebookActions.getFilter]: (_, { payload }) => payload,
});
export default combineReducers({
  items,
  filter,
});
