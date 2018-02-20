import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';

// Redux dev tools
let devTools = f => f;
// const sagaMiddleware = createSagaMiddleware()


if (process.browser &&
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const configureStore = (initialState = {}) => (
  createStore(
    rootReducer,
    // applyMiddleware(sagaMiddleware),
    initialState,
    devTools,
  )
);

export default configureStore;
