import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Todo_Context_Provider } from "./context/todo_context.jsx";
import { Event_Context_Provider } from "./context/event_context.jsx";
import { Note_Context_Provider } from "./context/note_context.jsx";
import { Category_Context_Provider } from "./context/category_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Category_Context_Provider>
      <Note_Context_Provider>
        <Event_Context_Provider>
          <Todo_Context_Provider>
            <App />
          </Todo_Context_Provider>
        </Event_Context_Provider>
      </Note_Context_Provider>
    </Category_Context_Provider>
  </React.StrictMode>
);
