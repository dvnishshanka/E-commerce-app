import initialState from "./InitialState";
import { ADD_USER_DATA, REMOVE_USER_DATA } from "../actions";

export const authReducer = (state = initialState.auth, action) => {
  if (action.type === ADD_USER_DATA) {
    // console.log("action", action, action.userDetails);
    return action?.userDetails;
  } else if (action.type === REMOVE_USER_DATA) {
    return null;
  }
  return state;
};
