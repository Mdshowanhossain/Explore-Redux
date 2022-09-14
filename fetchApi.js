const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

const REQUEST_DATA = "REQUEST_DATA";
const SUCCESS_DATA = "SUCCESS_DATA";
const FAILURE_DATA = "REQUEST_DATA";
const API_URL = "https://jsonplaceholder.typicode.comtodos";

const initialState = {
  loading: false,
  todos: [],
  error: null,
};

const requestData = () => {
  return {
    type: REQUEST_DATA,
  };
};

const successData = (todos) => {
  return {
    type: SUCCESS_DATA,
    payload: todos,
  };
};

const failureData = (error) => {
  return {
    type: FAILURE_DATA,
    payload: error,
  };
};

const getDataLoadReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        loading: true,
        // error: action.payload,
      };
    case SUCCESS_DATA:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false,
        // error: action.payload,
      };
    case FAILURE_DATA:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const fethApiData = () => {
  return (dispatch) => {
    dispatch(requestData());

    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data.map((data) => data.title);
        // console.log(todos);
        dispatch(successData(todos));
      })
      .catch((err) => dispatch(failureData(err.message)));
  };
};

const store = createStore(getDataLoadReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fethApiData());
store.dispatch(successData());
store.dispatch(failureData());
