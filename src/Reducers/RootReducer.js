import changeTheNumber from "./Counter";
import multyAndDivide from "./mulyDiv"

import { combineReducers } from "redux";

const RootReducer = combineReducers({
    changeTheNumber, multyAndDivide
});
export default RootReducer;
