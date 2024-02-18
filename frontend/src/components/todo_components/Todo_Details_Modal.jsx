import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { FaTimes } from "react-icons/fa";

/* eslint-disable react/prop-types */
const Todo_Details_Modal = ({ todo, onClose }) => {
  return (
    <>
      <div className="modal-container">
        <div onClick={onClose} className="modal-overlay"></div>
        <div className="modal-content">
          <div className="modal-content sm:max-w-[400px] sm:max-h-[400px] min-h-[400px] min-w-[400px] shadow-md bg-white  p-4 rounded-lg ">
            <div className="flex justify-between items-center pb-4 border-cadetgray border-b-2">
              <h2 className="text-2xl font-bold">To Do Details</h2>
              <button
                onClick={onClose}
                className="bg-transparent text-red text-lg px-2"
              >
                <FaTimes />
              </button>
            </div>
            <div className="flex flex-col justify-center items-start p-4 rounded-md">
              <p className="text-lg font-bold mb-2">Title: {todo.title}</p>

              <p className="text-md font-semibold mb-2">
                Description: {todo.description}
              </p>
              <p className="text-md font-semibold mb-2">Type: {todo.type}</p>
              <p className="text-md font-semibold mb-2">
                Modified:{" "}
                {formatDistanceToNow(new Date(todo.createdAt), {
                  addSuffix: true,
                })}
              </p>
              <p
                className={`text-md mb-2 font-semibold ${
                  todo.isCompleted ? "text-green" : "text-red"
                }`}
              >
                Is Completed: {todo.isCompleted ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo_Details_Modal;
