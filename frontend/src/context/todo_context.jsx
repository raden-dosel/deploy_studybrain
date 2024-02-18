/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const Todo_Context = createContext();

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        todos: action.payload,
      };
    case "CREATE_TODO":
      return {
        todos: [action.payload, ...state.todos],
      };
    case "DELETE_TODO":
      console.log("Deleting todo with ID:", action.payload);
      console.log("Current state before deletion:", state);

      const updatedTodos = state.todos.filter(
        (todo) => todo._id !== action.payload
      );

      console.log("Updated state after deletion:", updatedTodos);

      return {
        ...state,
        todos: updatedTodos,
      };
    case "UPDATE_TODO":
      console.log("Updating todo with ID:", action.payload.id);

      const doneTodos = state.todos.map((todo) =>
        todo._id === action.payload.id
          ? { ...todo, ...action.payload.doneTodo }
          : todo
      );

      console.log("Updated state after update:", doneTodos);

      return {
        ...state,
        todos: doneTodos,
      };

    case "UPDATE_TODO_DATA":
      console.log("Updating todo with ID:", action.payload.id);

      const updatedTodosData = state.todos.map((todo) =>
        todo._id === action.payload.id ? { ...todo, ...action.payload } : todo
      );

      console.log("Updated state after update:", updatedTodosData);

      return {
        ...state,
        todos: updatedTodosData,
      };

    default:
      return state;
  }
};

export const Todo_Context_Provider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  return (
    <Todo_Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Todo_Context.Provider>
  );
};
