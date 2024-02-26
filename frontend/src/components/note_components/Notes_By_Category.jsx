/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { FaEdit, FaPlus, FaTimes, FaTrash } from "react-icons/fa";
import { Use_Notes_Context } from "../../hooks/use_Notes_Context";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Note_With_Category from "./Notes_With_Category";
import Add_Note_Modal from "./Add_Note_Modal";
import Edit_Category_Modal from "./Edit_Category";

function Notes_By_Category({ onClose, category }) {
  const { dispatch, notes } = Use_Notes_Context();
  const [showModal, setShowModal] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };
  const handleModalOpen = () => {
    setShowModal(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };
  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  useEffect(() => {
    const fetchNotesByCategory = async () => {
      try {
        const response = await fetch(
          "https://studybrain-backend.onrender.com/api/notes/category/" +
            category._id
        );
        const jsonResponse = await response.json();
        console.log("Notes by category:", jsonResponse); // Log the API response
        if (jsonResponse) {
          dispatch({ type: "GET_NOTES", payload: jsonResponse });
        } else {
          console.error(
            "Response does not contain an array of notes:",
            jsonResponse
          );
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchNotesByCategory();
  }, [dispatch, category._id, notes]);

  const Handle_Delete = async () => {
    const response = await fetch(
      "https://studybrain-backend.onrender.com/api/categories/" + category._id,
      {
        method: "DELETE",
      }
    );

    const jsonResponse = await response.json();
    console.log("Delete response:", jsonResponse);

    if (response.ok) {
      toast.success("Category deleted successfully");
      dispatch({ type: "DELETE_CATEGORY", payload: category._id });
    }
  };

  return (
    <>
      <div className="modal-container">
        <div onClick={onClose} className="modal-overlay"></div>
        <div className="modal-content lg:min-w-[1024px] max-w-[600px] max-h-[350px] lg:min-h-[700px] bg-white p-4 rounded-lg shadow-md ">
          <div className="flex justify-between items-center pb-4 border-cadetgray border-b-2">
            <h2 className="text-4xl font-bold">{category.name}</h2>
            <button
              onClick={onClose}
              className="bg-transparent text-red text-lg px-2"
            >
              <FaTimes />
            </button>
          </div>
          <div className="lg:h-[500px] sm:max-h-[500px]">
            <div className="my-4 flex justify-between">
              <h2 className="text-2xl font-bold">Notes</h2>
              <button
                onClick={handleModalOpen}
                className="bg-offwhite text-slateblue shadow font-bold py-2 px-4 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out"
              >
                <FaPlus />
              </button>
            </div>
            <div className="flex flex-col gap-4 max-h-64 scrollbar p-2 overflow-y-auto">
              {notes &&
                notes.length > 0 &&
                notes.map((note) => (
                  <div key={note._id}>
                    <Note_With_Category note={note} />
                  </div>
                ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-2 p-6 bg-lavender shadow rounded-lg w-[900px]">
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
      {showModal && <Add_Note_Modal onClose={handleModalClose} />}
      {isEditModalOpen && (
        <Edit_Category_Modal category={category} onClose={closeEditModal} />
      )}
    </>
  );
}

export default Notes_By_Category;
