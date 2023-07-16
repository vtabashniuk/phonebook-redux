import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const LS_Data = localStorage.getItem('contacts') ?? '[]';
const contactList = JSON.parse(LS_Data) ?? [];

const initialState = { contacts: contactList, filter: '' };

const phonebook = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
        localStorage.setItem('contacts', JSON.stringify(state.contacts));
      },
      prepare: ({ name, number }) => {
        const id = nanoid(4);
        return { payload: { id, name, number } };
      },
    },
    deleteContact: (state, action) => {
      state.contacts = [
        ...state.contacts.filter(item => item.id !== action.payload),
      ];
    },
    filterContact: {
      reducer: (state, action) => {
        state.filter = action.payload;
      },
      prepare: e => {
        const filter = e.currentTarget.value;
        return { payload: filter };
      },
    },
  },
});

export const { addContact, deleteContact, filterContact } = phonebook.actions;

export const phonebookReducer = phonebook.reducer;
