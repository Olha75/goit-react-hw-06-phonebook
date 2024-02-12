import { ADD_CONTACT, DELETE_CONTACT } from './constants';

const initialState = { contacts: [], filter: '' };

const reducer = (state = initialState, { type, payload }) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      const { contacts } = state;
      return {
        contacts: [...contacts, action.payload],
      };

    case DELETE_CONTACT:
      const newContacts = state.contacts.filter(item => item.id !== payload);
      return { contacts: newContacts };
    default:
      return state;
  }
};
export default reducer;
