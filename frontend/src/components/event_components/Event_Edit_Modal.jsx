/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// EventForm.js

import { useState } from "react";
import { toast } from "react-toastify";
import { Use_Events_Context } from "../../hooks/use_Events_Context";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { set } from "date-fns";
import { FaCalendar, FaTimes } from "react-icons/fa";

const Event_Edit_Modal = ({ event, onClose }) => {
  const { dispatch } = Use_Events_Context();
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);
  const [isDone, setIsDone] = useState(event.isDone);
  const [startDate, setStartDate] = useState(new Date(event.startDate));
  const [endDate, setEndDate] = useState(new Date(event.endDate));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      toast.error("Please fill in all the required fields");
      return;
    }

    const newEvent = {
      title,
      description,
      startDate,
      endDate,
      isDone,
    };

    console.log(newEvent);

    const response = await fetch(
      "https://studybrain-backend.onrender.com/api/events/" + event.id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newEvent }),
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
        type: "UPDATE_EVENT_DATA",
        payload: {
          id: event.id,
          ...newEvent,
        },
      });
      setTitle("");
      setDescription("");
      setIsDone("event.isDone");
      setStartDate(new Date(null));
      setEndDate(new Date(null));
      // Close the modal
      onClose();
    }
  };

  return (
    <div className="modal-container">
      <div onClick={onClose} className="modal-overlay"></div>
      <div className="modal-content min-w-[350px] min-h-[400px] bg-white p-4 rounded-lg shadow-md ">
        <div className="flex justify-between items-center pb-4 border-cadetgray border-b-2">
          <h2 className="text-2xl font-bold">Add an Event</h2>
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
            className="flex flex-col justify-start items-start p-2"
          >
            <label className="my-2 font-semibold">Event Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="border-2 border-frenchgray p-2 rounded"
            />
            <label className="my-2 font-semibold">Event Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="border-2 border-frenchgray p-2 rounded"
            />
            <label className="my-2 font-semibold">Event Start Date:</label>
            <div className="flex flex-row">
              <DatePicker
                dateFormat="yyyy-MM-dd"
                style={{ marginRight: "10px" }}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <FaCalendar className="ml-2 size-5" />
            </div>

            <label className="my-2 font-semibold">Event End Date:</label>
            <div className="flex flex-row">
              <DatePicker
                dateFormat="yyyy-MM-dd"
                style={{ marginRight: "10px" }}
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
              <FaCalendar className="ml-2 size-5" />
            </div>

            <button className="bg-slateblue text-white my-8 py-2 px-4 rounded active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out">
              Update Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Event_Edit_Modal;
