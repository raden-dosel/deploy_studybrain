import { Todo_Context } from "../context/todo_context";
import { useContext } from "react";

export const Use_Todos_Context = () => {
  const context = useContext(Todo_Context);

  if (!context) {
    throw new Error(
      "use_Todos_Context must be used within a Todo_Context_Provider"
    );
  }

  return context;
};
