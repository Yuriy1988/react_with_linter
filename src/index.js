import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

const mountApp = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountApp
);
