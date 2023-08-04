import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./reducers";

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
