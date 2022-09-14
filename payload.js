const { createStore } = require("redux");

const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const ADD_USER = "INCREMENT_BY_VALUE";

const initialState = {
  count: 1,
  users: ["SOHAN"],
};
const incrementByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};
const addUser = (value) => {
  return {
    type: ADD_USER,
    payload: value,
  };
};

const incrementByValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        count: state.count + 1,
        users: [...state.users, action.payload],
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      state;
  }
};

const store = createStore(incrementByValueReducer);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incrementByValue(5));
store.dispatch(incrementByValue(5));
store.dispatch(incrementByValue(5));
// store.dispatch(incrementByValue(5));
store.dispatch(addUser("OSMAN"));
