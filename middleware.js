const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// PRODUCTS
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

const initialState = {
  products: ["Sugar", "Salt"],
  numberOfProducts: 2,
};

const getProducts = () => {
  return {
    type: GET_PRODUCT,
  };
};

const addProduct = (prod) => {
  return {
    type: ADD_PRODUCT,
    payload: prod,
  };
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("Apple"));
