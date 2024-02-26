import { Category_Context } from "../context/category_context";
import { useContext } from "react";

export const Use_Category_Context = () => {
  const context = useContext(Category_Context);

  if (!context) {
    throw new Error(
      "use_Category_Context must be used within a Category_Context_Provider"
    );
  }

  return context;
};
