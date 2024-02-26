import { useEffect, useState } from "react";
import Main_Header from "../components/Main_Header";
import Add_Card from "../components/note_components/Add_Card";
import Add_Category_Modal from "../components/note_components/Add_Category_Modal";
import { Use_Category_Context } from "../hooks/use_Categories_Context";
import Category_Card from "../components/note_components/Category_Card";

function Note_Page() {
  const { dispatch, categories } = Use_Category_Context();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://studybrain-backend.onrender.com/api/categories"
        );
        const jsonResponse = await response.json();

        console.log("Categories:", jsonResponse); // Log the API response

        if (jsonResponse) {
          dispatch({ type: "GET_CATEGORY", payload: jsonResponse });
        } else {
          console.error(
            "Response does not contain an array of categories:",
            jsonResponse
          );
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchCategories();
  }, [dispatch, categories]);

  const handleModalClose = () => {
    setShowModal(false);
  };
  const handleModalOpen = () => {
    setShowModal(true);
  };

  return (
    <>
      <div>
        <Main_Header />
        <div className="w-full max-w-6xl mx-auto mt-8 ">
          <div className="mx-auto my-4 h-auto flex justify-between items-center">
            <h1 className="text-4xl font-bold text-darkpurple">Note Taking</h1>
          </div>
          <div className="bg-offwhite shadow rounded-md lg:min-h-[400px] ">
            <div className="p-4 mx-auto flex flex-row items-center overflow-x-auto pt-[90px]">
              <div onClick={handleModalOpen} className="mx-4">
                <Add_Card />
              </div>
              <div className=" flex flex-row gap-4">
                {notes &&
                  notes.category.value.length > 0 &&
                  notes.category.map((note) => (
                    <Category_Card key={note._id} note={note} />
                  ))}

                {notes && notes.length === 0 && <p>No notes found.</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <Add_Category_Modal onClose={handleModalClose} />}
    </>
  );
}

export default Note_Page;
