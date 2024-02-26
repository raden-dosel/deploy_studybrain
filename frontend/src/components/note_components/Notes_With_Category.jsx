/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

import { Use_Notes_Context } from "../../hooks/use_Notes_Context";
import Category_Dialog from "./Category_Dialog";
import Edit_Note_Modal from "./Edit_Note_Modal";

const Note_With_Category = ({ note }) => {
  const { dispatch } = Use_Notes_Context();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const Handle_Details = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
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
      toast.success("Note deleted successfully");
      dispatch({ type: "DELETE_NOTE", payload: note._id });
    }
  };

  return (
    <>
      <div
        className=" px-4 py-2 flex justify-between items-center rounded-lg bg-offwhite shadow hover:cursor-pointer hover:scale-[1.03] duration-150 hover:shadow-md"
        onClick={Handle_Details}
      >
        <div className="flex">
          <div className="flex gap-2 items-center">
            <h2 className="text-xl font-bold">{note.title}</h2>
            <p className="text-sm text-cadetgray">
              Created{" " + new Date(note.createdAt)}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={(event) => {
              event.stopPropagation(); // Stop event propagation to parent div
              setIsEditModalOpen(true);
            }}
            className="bg-transparent text-indigodye text-lg px-2"
          >
            <FaEdit />
          </button>
          <button
            onClick={(event) => {
              event.stopPropagation(); // Stop event propagation to parent div
              Handle_Delete();
            }}
            className="bg-transparent text-red text-lg px-2"
          >
            <FaTrash />
          </button>
        </div>
      </div>
      {isModalOpen && <Category_Dialog note={note} onClose={closeModal} />}
      {isEditModalOpen && (
        <Edit_Note_Modal note={note} onClose={closeEditModal} />
      )}
    </>
  );
};

export default Note_With_Category;
