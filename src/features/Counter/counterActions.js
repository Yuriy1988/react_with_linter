import { INCREMENT, DECREMENT, SET_COUNTER_VALUE } from './types';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const setCounterValue = (value) => ({
  type: SET_COUNTER_VALUE,
  payload: value,
});
