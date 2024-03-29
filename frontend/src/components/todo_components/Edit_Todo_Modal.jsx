/* eslint-disable react/prop-types */
// ModalContent.js

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { Use_Todos_Context } from "../../hooks/use_Todos_Context";
import TodoType from "../../core/values/todoType";

const Edit_Todo_Modal = ({ todo, onClose }) => {
  const { dispatch } = Use_Todos_Context();
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [type, setType] = useState(todo.type);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !type.trim()) {
      toast.error("Please fill in all the required fields");
      return;
    }

    if (title.length > 16) {
      toast.error("Maximum title length is 16 characters");
      return;
    }

    const newTodo = {
      title,
      description,
      type,
      isCompleted,
    };

    console.log(newTodo);

    const response = await fetch(
      "https://studybrain-backend.onrender.com/api/todos/" + todo._id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newTodo }),
      }
    );

    const jsonResponse = await response.json();

    console.log("Updated Data", jsonResponse); // Log the API response

    if (!response.ok) {
      console.error("Error:", response);
    } else {
      // Add the new todo to the list of todos
      // setTodos([...todos, jsonResponse.todo]);
      // Reset the form
      toast.success("Todo updated successfully");
      dispatch({
        type: "UPDATE_TODO_DATA",
        payload: {
          id: todo._id,
          ...newTodo,
        },
      });
      setTitle("");
      setDescription("");
      setType("");
      setIsCompleted(false);
      // Close the modal
      onClose();
    }
  };

  return (
    <div className="modal-container">
      <div onClick={onClose} className="modal-overlay"></div>
      <div className="modal-content min-w-[350px] min-h-[400px] bg-white p-4 rounded-lg shadow-md ">
        <div className="flex justify-between items-center pb-4 border-cadetgray border-b-2">
          <h2 className="text-2xl font-bold">Add a To Do</h2>
          <button
            onClick={onClose}
            className="bg-transparent text-red text-lg px-2"
          >
            <FaTimes />
          </button>
        </div>
        <div className="mt-4">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="title" className="text-lg mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="border-2 border-cadetgray rounded-lg py-2 px-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="title" className="text-lg mb-2 mt-4">
              Description
            </label>
            <input
              type="text"
              id="description"
              className="border-2 border-cadetgray rounded-lg py-2 px-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="title" className="text-lg mb-2 mt-4">
              Type
            </label>
            <select
              id="type"
              className="border-2 border-cadetgray rounded-lg py-2 px-2"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              {Object.keys(TodoType).map((key) => (
                <option key={key} value={TodoType[key]}>
                  {TodoType[key]}
                </option>
              ))}
            </select>
            <button className="mt-8 px-2 py-2 bg-slateblue text-white rounded-lg active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit_Todo_Modal;
