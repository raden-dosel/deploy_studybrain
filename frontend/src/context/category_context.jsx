/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const Category_Context = createContext();

export const categoryReducer = (state, action) => {
  switch (action.type) {
    case "GET_CATEGORY":
      return {
        categories: action.payload,
      };
    case "CREATE_CATEGORY":
      return {
        categories: [action.payload, ...state.categories],
      };
    case "DELETE_CATEGORY":
      console.log("Deleting category with ID:", action.payload);
      console.log("Current state before deletion:", state);

      const updatedCategory = state.categories.filter(
        (category) => category._id !== action.payload
      );

      console.log("Updated state after deletion:", updatedCategory);

      return {
        ...state,
        categories: updatedCategory,
      };

    case "UPDATE_CATEGORY_DATA":
      console.log("Updating category with ID:", action.payload.id);

      const updatedCategoriesData = state.categories.map((category) =>
        category._id === action.payload.id
          ? { ...category, ...action.payload }
          : category
      );

      console.log("Updated state after update:", updatedCategoriesData);

      return {
        ...state,
        categories: updatedCategoriesData,
      };

    default:
      return state;
  }
};

export const Category_Context_Provider = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, { categories: [] });

  return (
    <Category_Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Category_Context.Provider>
  );
};
