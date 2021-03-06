import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import { CREATE_BOOK } from './actions';

const initialState = [
  {
    id: 1,
    title: 'Things fall apart',
    category: 'Learning',
  },
  {
    id: 2,
    title: 'The History of the Ancient World',
    category: 'History',
  },
];

initialState.map(book => store.dispatch(CREATE_BOOK(book)));

const wrappedApp = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(wrappedApp, document.getElementById('root'));
