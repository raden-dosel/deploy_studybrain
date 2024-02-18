import { FaEdit, FaSquare, FaTimes, FaTrash } from "react-icons/fa";
import { Use_Todos_Context } from "../../hooks/use_Todos_Context";
import { toast } from "react-toastify";
import { useState } from "react";
import Event_Edit_Modal from "./Event_Edit_Modal";

/* eslint-disable react/prop-types */
const Event_Details_Modal = ({ event, onClose }) => {
  const { dispatch } = Use_Todos_Context();
  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const Handle_Delete = async () => {
    const response = await fetch(
      "https://studybrain-backend.onrender.com/events/" + event.id,
      {
        method: "DELETE",
      }
    );

    const jsonResponse = await response.json();
    console.log("Delete response:", jsonResponse);

    if (response.ok) {
      toast.success("Event deleted successfully");
      onClose();
      dispatch({ type: "DELETE_EVENT", payload: event.id });
    }
  };

  const Handle_IsDone = async () => {
    const response = await fetch(
      "https://studybrain-backend.onrender.com/events/" + event._d,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isDone: !event.isDone }),
      }
    );

    console.log("Event is done:", !event.isDone);
    const jsonResponse = await response.json();
    console.log("Update response:", jsonResponse);

    if (response.ok) {
      toast.success("Event updated successfully");
      dispatch({
        type: "UPDATE_EVENT",
        payload: {
          id: event.id,
          doneEvent: { isDone: !event.isDone },
        },
      });
      onClose();
    } else {
      toast.error("Todo updated unsuccessfully");
    }
  };
  return (
    <>
      <div className="modal-container">
        <div onClick={onClose} className="modal-overlay"></div>
        <div className="modal-content min-w-[350px] min-h-[250px] bg-white p-4 rounded-lg shadow-md ">
          <div className="flex justify-between items-center pb-4 border-cadetgray border-b-2">
            <h2 className="text-2xl font-bold">Event Details</h2>

            <button
              onClick={onClose}
              className="bg-transparent text-red text-lg px-2"
            >
              <FaTimes />
            </button>
          </div>
          <div className=" flex flex-col justify-center items-start p-4 rounded-md">
            <p className="text-lg font-bold mb-2">Title: {event.title}</p>
            <p className="text-md font-semibold mb-2">
              Description: {event.description}
            </p>

            <p
              className={`text-md mb-2 font-semibold ${
                event.isDone ? "text-green" : "text-red"
              }`}
            >
              Is Done: {event.isDone ? "Yes" : "No"}
            </p>
          </div>
          <div className="p-6 bg-offwhite shadow rounded-lg ">
            <div className="flex flex-row justify-evenly">
              <button
                onClick={Handle_IsDone}
                className="text-darkpurple active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out"
              >
                <FaSquare />
              </button>
              <button className="text-darkpurple active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out">
                <FaEdit onClick={openEditModal} className="size-5" />
              </button>
              <button
                onClick={Handle_Delete}
                className="text-red active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out"
              >
                <FaTrash className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {showEditModal && (
        <Event_Edit_Modal event={event} onClose={closeEditModal} />
      )}
    </>
  );
};

export default Event_Details_Modal;
