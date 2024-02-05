import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const dispatch = useDispatch();
  const [currentValue, setCurrentValue] = useState("");
  const handleButton = (e) => {
    e.preventDefault();
    const todo = {
      id: nanoid(),
      text: currentValue,
      completed: false,
    };

    dispatch(addTodo(todo));
    setCurrentValue("");
  };

  return (
    <form className="w-full flex" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Type something..."
        className="w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm"
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
      />
      <button
        type="submit"
        className="shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm"
        onClick={handleButton}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
