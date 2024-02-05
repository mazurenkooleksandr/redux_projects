import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import todoReducer from "../features/todo/todoSlice";
import postsReducer from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer,
    post: postsReducer,
  },
});
