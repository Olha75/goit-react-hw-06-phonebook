import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './contacts-actions';

const initialState = [];

const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(addContact, (state, { payload }) => [...state, payload])
    .addCase(deleteContact, (state, { payload }) =>
      state.filter(item => item.id !== payload)
    );
});

export default contactsReducer;
