import { Note_Context } from "../context/note_context";
import { useContext } from "react";

export const Use_Notes_Context = () => {
  const context = useContext(Note_Context);

  if (!context) {
    throw new Error(
      "use_Notes_Context must be used within a Note_Context_Provider"
    );
  }

  return context;
};
