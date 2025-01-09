import { CirclePlus, CircleX, NotebookPen } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllNotesOfSelectedCategory } from "../../features/notesSlice";
import { ConfirmationModal } from "../modal/ConfirmationModal.jsx";
import { useState } from "react";
import { capitalizeFirstLetter } from "../../common_functions/index.js";

export const Header = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const selectedCategory = useSelector((state) => state.notes.selectedCategory);

  const handleDeleteAllNotes = () => {
    dispatch(deleteAllNotesOfSelectedCategory(selectedCategory));
    setModalOpen(false);
  };
  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-4 ">
        <div className="flex items-center gap-2 text-3xl icon-titl">
          <NotebookPen
            color="gray"
            absoluteStrokeWidth
            className="cursor-pointer"
          />
          The Good Notes
        </div>
        <div className="flex gap-2 search-new-delete">
          <SearchBar />
          <div className="flex items-center gap-2">
            <button
              className="text-green-600 hover:text-green-700 btn"
              title="New Note"
            >
              <CirclePlus />
            </button>
            <button
              className="text-red-600 btn hover:text-red-700"
              title="Delete All Notes"
              onClick={() => setModalOpen(true)}
            >
              <CircleX />
            </button>
          </div>
        </div>
      </div>
      {modalOpen && (
        <ConfirmationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onConfirm={handleDeleteAllNotes}
          message={
            selectedCategory === "all"
              ? "all notes"
              : "your " + capitalizeFirstLetter(selectedCategory) + " notes"
          }
        />
      )}
    </>
  );
};
