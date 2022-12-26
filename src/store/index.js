import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Reducer/todoReducer";
const allReducer = combineReducers({
  TodoList: todoReducer,
});
const store = configureStore({ reducer: allReducer });

export default store;
