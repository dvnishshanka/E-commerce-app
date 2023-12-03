import { combineReducers } from "redux";
import { cartReducer } from "./Cart";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
