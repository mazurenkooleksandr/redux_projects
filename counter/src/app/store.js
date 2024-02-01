import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlider";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
