import { CirclePlus, CircleX, NotebookPen } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { useDispatch } from "react-redux";
import { deleteAllNotes } from "../features/notesSlice";
import { ConfirmationModal } from "./ConfirmationModal";
import { useState } from "react";

export const Header = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const handleDeleteAllNotes = () => {
    dispatch(deleteAllNotes());
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
          message={"all notes"}
        />
      )}
    </>
  );
};
