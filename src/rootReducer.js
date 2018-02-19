import { combineReducers } from 'redux';
import counter from './features/Counter/CounterReducer';

export default combineReducers({
  counter,
});
