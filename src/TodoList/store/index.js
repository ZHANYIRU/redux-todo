import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Reducer/todoReducer";

const store = configureStore({ reducer: todoReducer });

export default store;
