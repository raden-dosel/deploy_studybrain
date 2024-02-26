/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const Note_Context = createContext();

export const noteReducer = (state, action) => {
  switch (action.type) {
    case "GET_NOTES":
      return {
        notes: action.payload,
      };
    case "CREATE_NOTE":
      return {
        notes: [action.payload, ...state.notes],
      };
    case "DELETE_NOTES":
      console.log("Deleting note with ID:", action.payload);
      console.log("Current state before deletion:", state);

      const updatedNotes = state.notes.filter(
        (note) => note._id !== action.payload
      );

      console.log("Updated state after deletion:", updatedNotes);

      return {
        ...state,
        notes: updatedNotes,
      };
    case "UPDATE_NOTE":
      console.log("Updating note with ID:", action.payload.id);

      const doneNotes = state.notes.map((note) =>
        note._id === action.payload.id
          ? { ...note, ...action.payload.doneNote }
          : note
      );

      console.log("Updated state after update:", doneNotes);

      return {
        ...state,
        notes: doneNotes,
      };

    case "UPDATE_NOTE_DATA":
      console.log("Updating note with ID:", action.payload.id);

      const updatedNotesData = state.notes.map((note) =>
        note._id === action.payload.id ? { ...note, ...action.payload } : note
      );

      console.log("Updated state after update:", updatedNotesData);

      return {
        ...state,
        notes: updatedNotesData,
      };

    default:
      return state;
  }
};

export const Note_Context_Provider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, { notes: [] });

  return (
    <Note_Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Note_Context.Provider>
  );
};
