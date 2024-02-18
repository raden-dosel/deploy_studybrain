/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaSquare, FaTrash, FaInfoCircle } from "react-icons/fa";
import { Use_Events_Context } from "../../hooks/use_Events_Context";
import { toast } from "react-toastify";
import formatDistancetoNow from "date-fns/formatDistanceToNow";
import Event_Details_Modal from "./Event_Details_Modal";

const Event_Item = ({ event }) => {
  const { dispatch } = Use_Events_Context();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Handle_Details = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const Handle_Delete = async () => {
    const response = await fetch("/api/events/" + event._id, {
      method: "DELETE",
    });

    const jsonResponse = await response.json();
    console.log("Delete response:", jsonResponse);

    if (response.ok) {
      toast.success("Event deleted successfully");
      dispatch({ type: "DELETE_EVENT", payload: event._id });
    }
  };

  const Handle_IsDone = async () => {
    const response = await fetch("/api/events/" + event._id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone: !event.isDone }),
    });

    const jsonResponse = await response.json();
    console.log("Update response:", jsonResponse);

    if (response.ok) {
      toast.success("Event updated successfully");
      dispatch({
        type: "UPDATE_TODO",
        payload: { id: event._id, doneEvent: { isDone: !event.isDone } },
      });
    } else {
      toast.error("Event updated unsuccessfully");
    }
  };

  return (
    <>
      <div className="flex justify-between items-center bg-lavender border-2 border-cadetgray shadow-md rounded-lg p-4">
        <div className="flex gap-8">
          <button
            onClick={Handle_IsDone}
            className="bg-transparent  text-lg px-2"
          >
            <FaSquare />
          </button>
          <div className="flex gap-2 items-center">
            <h2 className="text-xl font-bold">{event.title}</h2>
            <p className="text-sm">
              Created on
              {formatDistancetoNow(new Date(event.createdAt), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={Handle_Details}
            className="bg-transparent text-indigodye text-lg px-2"
          >
            <FaInfoCircle />
          </button>
          <button
            onClick={Handle_Delete}
            className="bg-transparent text-red text-lg px-2"
          >
            <FaTrash />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <Event_Details_Modal event={event} onClose={closeModal} />
      )}
    </>
  );
};

export default Event_Item;
