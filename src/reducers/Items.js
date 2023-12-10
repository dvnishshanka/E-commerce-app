import { ADD_ALL_ITEMS } from '../actions';
import initialState from './InitialState';

export const itemsReducer = (state = initialState.items, action) => {
  if (action.type === ADD_ALL_ITEMS) {
    return action.payload;
  }
  return state;
};
