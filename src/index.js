import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './app/configureStore';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();

