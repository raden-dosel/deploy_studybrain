/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const Event_Context = createContext();

export const eventReducer = (state, action) => {
  switch (action.type) {
    case "GET_EVENTS":
      return {
        events: action.payload,
      };
    case "CREATE_EVENT":
      return {
        events: [action.payload, ...state.events],
      };
    case "DELETE_EVENT":
      console.log("Deleting event with ID:", action.payload);
      console.log("Current state before deletion:", state);

      const updatedEvents = state.events.filter(
        (event) => event._id !== action.payload
      );

      console.log("Updated state after deletion:", updatedEvents);

      return {
        ...state,
        events: updatedEvents,
      };
    case "UPDATE_EVENT":
      console.log("Updating event with ID:", action.payload.id);

      const doneEvents = state.events.map((event) =>
        event._id === action.payload.id
          ? { ...event, ...action.payload.doneEvent }
          : event
      );

      console.log("Updated state after update:", doneEvents);

      return {
        ...state,
        events: doneEvents,
      };

    case "UPDATE_EVENT_DATA":
      console.log("Updating todo with ID:", action.payload.id);

      const updatedEventsData = state.events.map((event) =>
        event._id === action.payload.id
          ? { ...event, ...action.payload }
          : event
      );

      console.log("Updated state after update:", updatedEventsData);

      return {
        ...state,
        events: updatedEventsData,
      };

    default:
      return state;
  }
};

export const Event_Context_Provider = ({ children }) => {
  const [state, dispatch] = useReducer(eventReducer, { events: [] });

  return (
    <Event_Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Event_Context.Provider>
  );
};
