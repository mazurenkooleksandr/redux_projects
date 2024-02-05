import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleCompletedTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      toggleTodo.completed = !toggleTodo.completed;
    },
    removeTodo: (state, action) => {
      const filteredTodo = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      state.todos = filteredTodo;
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, toggleCompletedTodo, removeTodo } = todoSlice.actions;
