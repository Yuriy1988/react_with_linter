import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './configureStore';

const store = configureStore();

const mountApp = document.getElementById('root');
render(
  <Provider store={store}>
    <BrowserRouter basename="/" >
      <App />
    </BrowserRouter>
  </Provider>,
  mountApp
);
