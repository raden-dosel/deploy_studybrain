import { Event_Context } from "../context/event_context";
import { useContext } from "react";

export const Use_Events_Context = () => {
  const context = useContext(Event_Context);

  if (!context) {
    throw new Error(
      "use_Event_Context must be used within a Event_Context_Provider"
    );
  }

  return context;
};
