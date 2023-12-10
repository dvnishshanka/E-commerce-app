import axios from 'axios';
import { ADD_ALL_ITEMS } from './ActionTypes';

export const fetchAllItems = () => {
  return (dispatch) => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        const allItems = response.data;
        dispatch({ type: ADD_ALL_ITEMS, payload: allItems });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
