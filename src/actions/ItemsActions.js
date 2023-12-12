// import axios from 'axios';
import { ADD_ALL_ITEMS } from './ActionTypes';
import { db } from '../auth';
import { onValue, ref } from 'firebase/database';

export const fetchAllItems = () => {
  return (dispatch) => {
    // Data fetching using the fakestore API
    /*
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        const allItems = response.data;
        dispatch({ type: ADD_ALL_ITEMS, payload: allItems });
      })
      .catch((error) => {
        console.error(error);
      });*/

    const referance = ref(db, '/items');

    onValue(
      referance,
      (snapshot) => {
        const allItems = Object.values(snapshot.val());
        dispatch({ type: ADD_ALL_ITEMS, payload: allItems });
      },
      (errorObject) => {
        console.error('The read failed: ' + errorObject.name);
      },
    );
  };
};
