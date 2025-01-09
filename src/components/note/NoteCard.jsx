import { Trash, Edit } from "lucide-react"; // Importing icons from lucide-react
import { deleteNote } from "../../features/notesSlice";
import { useDispatch } from "react-redux";
import { ConfirmationModal } from "../modal/ConfirmationModal";
import { useState } from "react";
import { Link } from "react-router";
import { clipTitle } from "../../common_functions";

export const NoteCard = ({ title, content, id }) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const handleDeleteNotes = () => {
    dispatch(deleteNote(id));
    setModalOpen(false);
  };

  return (
    <>
      <div className="p-4 transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
        {/* Title Section */}
        <div className="flex items-start justify-between">
          <Link to={`/${id}`}>
            <h1
              className="text-lg font-semibold text-gray-800 cursor-pointer"
              title={
                title.length > 30 &&
                (title.length > 50 ? title.substring(0, 50) + "..." : title)
              }
            >
              {clipTitle(title, "cardTitle")}
            </h1>
          </Link>
          <div className="flex space-x-2">
            <button
              aria-label="Edit Note"
              className="p-2 transition-colors bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <Edit className="w-4 h-4 text-gray-600" />
            </button>
            <button
              aria-label="Delete Note"
              className="p-2 transition-colors bg-gray-100 rounded-full hover:bg-red-100"
            >
              <Trash
                className="w-4 h-4 text-red-500"
                onClick={() => setModalOpen(true)}
              />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <Link to={`/${id}`}>
          <p className="mt-2 text-sm text-gray-600">{content}</p>
        </Link>
      </div>
      {modalOpen && (
        <ConfirmationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onConfirm={handleDeleteNotes}
          message={clipTitle(title, "modal")}
        />
      )}
    </>
  );
};
