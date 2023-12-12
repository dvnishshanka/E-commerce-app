import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from '../actions';
import initialState from './InitialState';
import { findItemIndexFromID } from '../utils';

export const cartReducer = (state = initialState.cart, action) => {
  // Find index of the product in the cart array
  const itemIndex = findItemIndexFromID(action.item?.id, state.cartItems);

  if (action.type === ADD_TO_CART) {
    // If the item added is not in the cart
    if (itemIndex < 0)
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.item, qty: 1 }],
        totalQty: state.totalQty + 1,
        totalPrice: state.totalPrice + action.item?.price * (1 - action.item?.discountRate / 100),
      };
    // If the item is already in the cart
    else {
      const updatedItem = {
        ...state.cartItems[itemIndex],
        qty: state.cartItems[itemIndex].qty + 1,
      };

      return {
        ...state,
        cartItems: state.cartItems.map((el, index) => (index === itemIndex ? updatedItem : el)),
        totalQty: state.totalQty + 1,
        totalPrice: state.totalPrice + action.item?.price * (1 - action.item?.discountRate / 100),
      };
    }
  } else if (action.type === REMOVE_FROM_CART) {
    // If the item is in the cart
    if (itemIndex >= 0) {
      const updatedItem = {
        ...state.cartItems[itemIndex],
        qty: state.cartItems[itemIndex].qty > 0 ? state.cartItems[itemIndex].qty - 1 : 0,
      };

      return {
        ...state,
        totalQty: state.totalQty - 1,
        totalPrice: state.totalPrice - action.item?.price * (1 - action.item?.discountRate / 100),
        cartItems: state.cartItems.map((el, index) => (index === itemIndex ? updatedItem : el)),
      };
    }
  } else if (action.type === CLEAR_CART) {
    return initialState.cart;
  }
  return state;
};
