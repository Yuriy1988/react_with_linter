import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';

export default function configureStore(initialState = {}) {
  // Define middleware for all environments
  let middleware = [];

  // Define middleware for development environment only
  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware];
  }

  // Create store with required middleware
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
  );
}
