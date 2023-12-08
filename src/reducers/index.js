import { combineReducers } from "redux";
import { cartReducer } from "./Cart";
import { authReducer } from "./Auth";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

export default rootReducer;
