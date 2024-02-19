/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import Main_Header from "../components/Main_Header";
import Add_Todo_Modal from "../components/todo_components/Add_Todo_Modal";
import { Use_Todos_Context } from "../hooks/use_Todos_Context";
import Todo_Item from "../components/todo_components/Todo_Item";
import Completed_Todo_Item from "../components/todo_components/Completed_Todo_Item";

function Todo_Page() {
  const { todos, dispatch } = Use_Todos_Context();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://studybrain-backend.onrender.com/api/todos"
        );

        const jsonResponse = await response.json();

        console.log(jsonResponse); // Log the API response

        if (jsonResponse) {
          dispatch({ type: "GET_TODOS", payload: jsonResponse.todos });
        } else {
          console.error(
            "Response does not contain an array of todos:",
            jsonResponse
          );
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchTodos();
  }, [dispatch, todos]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <Main_Header />
        <div className="w-full max-w-6xl mx-auto mt-8 ">
          <div className="mx-auto my-4 h-auto flex justify-between items-center">
            <h1 className="text-4xl font-bold text-darkpurple">TO-DO</h1>
            <button
              onClick={openModal}
              className="bg-offwhite text-slateblue shadow font-bold py-2 px-4 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out"
            >
              <FaPlus />
            </button>
          </div>
          {isModalOpen && (
            <div className="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <Add_Todo_Modal closeModal={closeModal} />
            </div>
          )}
          {/* Map the to do list here */}
          <div className="flex lg:flex-row flex-col w-full lg:justify-between gap-4">
            <div className=" flex flex-col sm:max-h-[400px] lg:h-[400px] lg:w-[48%] sm:max-w-[48%] p-2 rounded-lg bg-[#f2f3f4] shadow">
              <h1 className="text-center text-2xl font-bold text-darkpurple mb-2">
                Not Done
              </h1>
              <div className="gap-4 overwflow-y-auto ">
                {todos.filter((todo) => !todo.isCompleted).length === 0 ? (
                  <>
                    <div className="py-8 px-4 flex flex-col items-center justify-center">
                      <h2 className="text-center font-semibold text-2xl text-cadetgray">
                        There is no task. Add you goals now.
                      </h2>
                    </div>
                  </>
                ) : (
                  // Map the to do list here
                  <div className="flex flex-col gap-4 max-h-64 scrollbar p-2 overflow-y-auto">
                    {todos
                      .filter((todo) => !todo.isCompleted)
                      .map((todo) => (
                        <Todo_Item key={todo._id} todo={todo} />
                      ))}
                  </div>
                )}
              </div>
            </div>
            <div className=" flex flex-col sm:max-h-[400px] lg:h-[400px] lg:w-[48%] sm:max-w-[48%] p-2 rounded-lg bg-[#f2f3f4] shadow">
              <h1 className="text-center text-2xl font-bold text-darkpurple mb-2">
                Done
              </h1>
              <div className="gap-4 overflow-y-auto ">
                {todos.filter((todo) => todo.isCompleted).length === 0 ? (
                  <>
                    <div className="py-8 px-4 rounded-lg flex flex-col items-center justify-center">
                      <h2 className="text-center font-semibold text-2xl text-cadetgray">
                        There are no completed tasks.
                      </h2>
                    </div>
                  </>
                ) : (
                  // Map the completed todos here
                  <div className="flex flex-col gap-4 p-2 max-h-64 overflow-y-auto">
                    {todos
                      .filter((todo) => todo.isCompleted)
                      .map((todo) => (
                        <Completed_Todo_Item key={todo._id} todo={todo} />
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todo_Page;
