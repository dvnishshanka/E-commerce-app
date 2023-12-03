import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";
import initialState from "./InitialState";
import { findItemIndexFromID } from "../utils";

export const cartReducer = (state = initialState, action) => {
  if (action.type === ADD_TO_CART) {
    // Find index if the same product is added to cart earlier
    const itemIndex = findItemIndexFromID(action.newItem.id, state.cartItems);

    // If the item added is not in the cart
    if (itemIndex < 0)
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.newItem, qty: 1 }],
      };
    // If the item added is already in the cart
    else {
      const newItem = {
        ...state.cartItems[itemIndex],
        qty: state.cartItems[itemIndex].qty + 1,
      };

      return {
        ...state,
        cartItems: state.cartItems.map((el, index) =>
          index === itemIndex ? newItem : el
        ),
      };
    }
  } else if (action.type === REMOVE_FROM_CART) {
    return [...state, action.newItem];
  }
  return state;
};
