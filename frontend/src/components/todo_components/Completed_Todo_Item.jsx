/* eslint-disable react/prop-types */

import { FaCheckSquare, FaTrash, FaEdit } from "react-icons/fa";
import { Use_Todos_Context } from "../../hooks/use_Todos_Context";
import { toast } from "react-toastify";
import { useState } from "react";
import Todo_Details_Modal from "./Todo_Details_Modal";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import Edit_Todo_Modal from "./Edit_Todo_Modal";

const Completed_Todo_Item = ({ todo }) => {
  const { dispatch } = Use_Todos_Context();
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
    const response = await fetch("/api/todos/" + todo._id, {
      method: "DELETE",
    });

    const jsonResponse = await response.json();
    console.log("Delete response:", jsonResponse);

    if (response.ok) {
      toast.success("Todo deleted successfully");
      dispatch({ type: "DELETE_TODO", payload: todo._id });
    }
  };

  const Handle_IsCompleted = async () => {
    const response = await fetch("/api/todos/" + todo._id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted: !todo.isCompleted }),
    });

    const jsonResponse = await response.json();
    console.log("Update response:", jsonResponse);

    if (response.ok) {
      toast.success("Todo updated successfully");
      dispatch({
        type: "UPDATE_TODO",
        payload: { id: todo._id, doneTodo: { isCompleted: !todo.isCompleted } },
      });
    } else {
      toast.error("Todo updated unsuccessfully");
    }
  };

  return (
    <>
      <div
        onClick={Handle_Details}
        className="flex justify-between items-center rounded-lg  bg-offwhite shadow hover:cursor-pointer hover:scale-[1.03] duration-150 hover:shadow-md"
      >
        <div className="flex">
          <button
            onClick={(event) => {
              event.stopPropagation(); // Stop event propagation to parent div
              Handle_IsCompleted();
            }}
            className="bg-transparent  text-lg px-2"
          >
            <FaCheckSquare />
          </button>
          <div className="flex gap-2 items-center">
            <h2 className="text-xl font-bold">{todo.title}</h2>
            <p className="text-sm text-cadetgray">
              Created{" "}
              {formatDistanceToNow(new Date(todo.createdAt), {
                addSuffix: true,
              })}
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
      {isModalOpen && <Todo_Details_Modal todo={todo} onClose={closeModal} />}
      {isEditModalOpen && (
        <Edit_Todo_Modal todo={todo} onClose={closeEditModal} />
      )}
    </>
  );
};

export default Completed_Todo_Item;
