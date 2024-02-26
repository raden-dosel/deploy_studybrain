/* eslint-disable react/prop-types */
import { useState } from "react";

import Notes_By_Category from "./Notes_By_Category";

function Category_Card({ category }) {
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
        className="m-2 min-h-[200px] min-w-[200px] flex items-center justify-center rounded-lg bg-lavender shadow hover:cursor-pointer hover:scale-[1.03] duration-150 hover:shadow-md"
        onClick={openModal}
      >
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-darkpurple">
            {note.category}
          </h2>
        </div>
      </div>

      {isModalOpen && (
        <Notes_By_Category category={category} onClose={closeModal} />
      )}
    </>
  );
}

export default Category_Card;
