/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// EventForm.js

import { useState } from "react";
import { toast } from "react-toastify";
import { Use_Events_Context } from "../../hooks/use_Events_Context";

import { FaCalendar, FaTimes } from "react-icons/fa";
import TodoType from "../../core/values/todoType";

const Add_Category_Modal = ({ onClose }) => {
  const { dispatch } = Use_Events_Context();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category.trim()) {
      toast.error("Please fill in all the required fields");
      return;
    }

    const newNotes = {
      title,
      content,
      category,
    };

    console.log(newNotes);

    const response = await fetch(
      "https://studybrain-backend.onrender.com/api/notes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNotes),
      }
    );

    console.log(JSON.stringify(newNotes));

    const jsonResponse = await response.json();

    console.log(jsonResponse); // Log the API response

    if (!response.ok) {
      console.error("Error:", jsonResponse.message);
    } else {
      // Add the new todo to the list of events
      // setTodos([...todos, jsonResponse.event]);
      // Reset the form
      toast.success("Event added successfully");
      setTitle("");
      setCategory("");
      setContent("");

      // Close the modal
      dispatch({ type: "CREATE_NOTE", payload: jsonResponse.note });
      onClose();
    }
  };

  return (
    <div className="modal-container">
      <div onClick={onClose} className="modal-overlay"></div>
      <div className="modal-content min-w-[800px] min-h-[600Px] bg-white p-4 rounded-lg shadow-md ">
        <div className="flex justify-between items-center pb-4 border-cadetgray border-b-2">
          <h2 className="text-2xl font-bold">Add Category</h2>
          <button
            onClick={onClose}
            className="bg-transparent text-red text-lg px-2"
          >
            <FaTimes />
          </button>
        </div>
        <div className="mt-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-start p-2"
          >
            <label className="my-2 font-semibold">Note Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="border-2 border-frenchgray p-2 rounded h-[40px]"
              style={{
                width: "740px",
                height: "50px",
                backgroundColor: "transparent",
                padding: "4px",
              }}
            />
            <label className="my-2 font-semibold">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="border-2 border-frenchgray P-2 rounded"
              style={{
                width: "740px",
                height: "200px",
                backgroundColor: "transparent",
                padding: "4px",
              }}
            />
            <label className="my-2 font-semibold">Note Category:</label>
            <select
              id="type"
              className="border-2 border-cadetgray rounded-lg P-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: "740px",
                height: "50px",
                backgroundColor: "transparent",
                padding: "4px",
              }}
            >
              {Object.keys(TodoType).map((key) => (
                <option key={key} value={TodoType[key]}>
                  {TodoType[key]}
                </option>
              ))}
            </select>

            <button className="bg-slateblue text-white my-8 py-2 px-4 rounded active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add_Category_Modal;
