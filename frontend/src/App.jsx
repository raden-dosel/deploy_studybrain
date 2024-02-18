import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Todo_Page from "./pages/Todo_Page";
import Cover_Page from "./pages/Cover_Page";
import Event_Page from "./pages/Event_Page";
import Note_Page from "./pages/Note_Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cover_Page />} />
          <Route path="/todo" element={<Todo_Page />} />
          <Route path="/event" element={<Event_Page />} />
          <Route path="/note" element={<Note_Page />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
