import { INCREMENT, DECREMENT, SET_COUNTER_VALUE } from "./types";

const initialState = {
  counterValue: 0,
};

export default function counter(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        counterValue: state.counterValue + 1,
      };

    case DECREMENT: {
      return {
        counterValue: state.counterValue - 1,
      };
    }

    case SET_COUNTER_VALUE: {
      return {
        counterValue: action.payload,
      };
    }
    default:
      return state;
  }
}
