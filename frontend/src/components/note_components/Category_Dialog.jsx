/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Use_Notes_Context } from "../../hooks/use_Notes_Context";
import Edit_Note_Modal from "./Edit_Note_Modal";

function Category_Dialog({ onClose, note }) {
  const { dispatch } = Use_Notes_Context();
  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const Handle_Delete = async () => {
    const response = await fetch(
      "https://studybrain-backend.onrender.com/api/notes/" + note._id,
      {
        method: "DELETE",
      }
    );

    const jsonResponse = await response.json();
    console.log("Delete response:", jsonResponse);

    if (response.ok) {
      toast.success("Notes deleted successfully");
      onClose();
      dispatch({ type: "DELETE_NOTE", payload: note._id });
    }
  };

  return (
    <>
      <div className="modal-container">
        <div onClick={onClose} className="modal-overlay"></div>
        <div className="modal-content bg-offwhite h-[700px] w-[1300px] shadow-md  p-4 rounded-lg">
          <div className="flex justify-between items-center pb-4 border-cadetgray border-b-2">
            <h2 className="text-2xl font-bold">Notes</h2>
            <button
              onClick={onClose}
              className="bg-transparent text-red text-lg px-2"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex flex-col justify-center items-start p-4 rounded-md">
            <p className="text-xl font-bold mb-2">Title: {note.title}</p>
            <div className="flex flex-col">
              <p className="text-md font-semibold mb-2">Content:</p>
              <div className="flex ">
                <div className="h-[400px] w-[1220px] bg-white p-4 rounded-lg shadow">
                  <p className="text-md font-semibold mb-2">{note.content}</p>
                </div>
              </div>
            </div>

            <p className="text-md font-semibold my-2">Type: {note.category}</p>

            <div className="mt-4 p-6 bg-lavender shadow rounded-lg w-[1220px]">
              <div className="flex flex-row justify-evenly">
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
      </div>
      {showEditModal && (
        <Edit_Note_Modal note={note} onClose={closeEditModal} />
      )}
    </>
  );
}

export default Category_Dialog;
