import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./../reducers/index";
import initialState from "../reducers/InitialState";

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
