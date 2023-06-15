import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filters: '',
};

// import { configureStore } from '@reduxjs/toolkit';
// import { todosReducer } from './todoSlice';

// export const store = configureStore({
//   reducer: {
//     todos: todosReducer,
//   },
// });