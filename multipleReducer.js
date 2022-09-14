const { createStore, combineReducers } = require("redux");

// PRODUCTS
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

// CART PRODUCTS
const GET_CART = "GET_CART";
const GET_CART_LENGTH = "GET_CART_LENGTH";

const initialState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};
const initialCartState = {
  cart: ["sugar"],
  cartLength: 1,
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

const cartProductsLength = () => {
  return {
    type: GET_CART_LENGTH,
  };
};

const cartProducts = (cart) => {
  return {
    type: GET_CART,
    payload: cart,
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

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_LENGTH:
      return {
        ...state,
      };
    case GET_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartLength: state.cartLength + 1,
      };

    default:
      return state;
  }
};

const rooteRuducer = combineReducers({
  productReducerR: productReducer,
  cartReducerR: cartReducer,
});

// const store = createStore(productReducer);
const store = createStore(rooteRuducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("OSMAN"));

store.dispatch(cartProductsLength());
store.dispatch(cartProducts("salt"));
