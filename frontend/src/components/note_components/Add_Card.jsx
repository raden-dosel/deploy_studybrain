import { FaPlus } from "react-icons/fa";

function Add_Card() {
  return (
    <div className=" flex flex-col justify-center items-center h-[100px] w-[100px] bg-transparent shadow-md rounded-md border-cadetgray border-2 border-dashed active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out">
      <FaPlus className="text-cadetgray size-6" />
    </div>
  );
}

export default Add_Card;
