import { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar";

function Progress_Page() {
  const [todos, setTodos] = useState([]);

  // Use state variables to store calculated values for reactivity
  const [activeTodos, setActiveTodos] = useState(0);
  const [completedTodos, setCompletedTodos] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Fetch todos on mount
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://studybrain-backend.onrender.com/api/todos"
        );
        const data = await response.json();

        if (response.ok) {
          setTodos(data.todos);
        } else {
          console.error("Error fetching todos:", data.message);
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    // Calculate and update values whenever todos change
    const calculateAndUpdate = () => {
      const completedCount = todos.filter((todo) => todo.isCompleted).length;
      setCompletedTodos(completedCount);
      setActiveTodos(todos.length - completedCount);
      setPercentage((completedCount / todos.length) * 100);
    };

    calculateAndUpdate();
  }, [todos]);

  return (
    <div className="mt-10 py-8 flex justify-center">
      <div className="bg-darkpurple max-h-[200px] max-w-[600px] rounded flex col-span-2 justify-around items-center px-8 py-8">
        <div className="flex flex-col">
          <h1 className="my-4 mx-4 text-4xl font-bold text-white  ">
            Track Progress
          </h1>
          <div className="my-4 flex col-span-3 justify-between">
            {/* Use state variables directly for reactive display */}
            <div className="mx-4 flex flex-col items-center">
              <h2 className="mx-3 font-semibold text-white text-2xl">
                {activeTodos}
              </h2>
              <h3 className="text-red">Active</h3>
            </div>
            <div className="mx-4 flex flex-col items-center">
              <h2 className="mx-3 font-semibold text-white text-2xl">
                {completedTodos}
              </h2>
              <h3 className="text-green">Completed</h3>
            </div>
            <div className="mx-4 flex flex-col items-center">
              <h2 className="mx-3 font-semibold text-white text-2xl">
                {todos.length}
              </h2>
              <h3 className="text-cadetgray">Total</h3>
            </div>
          </div>
          <div className="h-max p-4">
            <ProgressBar percentage={percentage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress_Page;
