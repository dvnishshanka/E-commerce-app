import { combineReducers } from 'redux';
import { cartReducer } from './Cart';
import { authReducer } from './Auth';
import { itemsReducer } from './Items';

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  items: itemsReducer,
});

export default rootReducer;
