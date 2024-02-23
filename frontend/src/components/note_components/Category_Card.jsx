/* eslint-disable react/prop-types */
import { useState } from "react";
import Category_Dialog from "./Category_Dialog";

function Category_Card({ note }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        className="m-2 h-[200px] w-[200px] flex items-center justify-center rounded-lg bg-lavender shadow hover:cursor-pointer hover:scale-[1.03] duration-150 hover:shadow-md"
        onClick={openModal}
      >
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-darkpurple">
           {note.title}
            
            
          </h2>
          <h2 className="text-md font-semibold text-cadetgray">
          {note.category}
            </h2>
        </div>
      </div>

      {isModalOpen && <Category_Dialog note={note} onClose={closeModal} />}
    </>
  );
}

export default Category_Card;
