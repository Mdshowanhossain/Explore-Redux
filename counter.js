// state;

const { createStore } = require("redux");

// action;
// reducer;
// store;

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const initialState = {
  count: 5,
};

const incrementAction = (data) => {
  return {
    type: INCREMENT,
    payload: data,
  };
};
const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetAction = () => {
  return {
    type: RESET,
  };
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementAction(5));
store.dispatch(incrementAction(5));
store.dispatch(incrementAction(5));

store.dispatch(decrementAction());
store.dispatch(resetAction());
