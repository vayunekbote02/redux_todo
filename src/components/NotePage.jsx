import {
  CircleArrowLeft,
  CircleCheck,
  CirclePlus,
  CircleX,
  Edit,
} from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router";
import { ConfirmationModal } from "./ConfirmationModal";
import { deleteNote } from "../features/notesSlice";
import { clipTitle } from "../common_functions";

export const NotePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const note = useSelector((state) =>
    state.notes.find((notes) => notes.id === id)
  );
  const [modalOpen, setModalOpen] = useState(false);

  const handleDeleteNote = () => {
    dispatch(deleteNote(id));
    setModalOpen(false);
    navigate("/");
  };

  return (
    <>
      {note ? (
        <div className="flex flex-col h-screen px-8 pt-4 pb-6 bg-white">
          <div className="flex items-center justify-between">
            {/* Back button and title */}
            <div className="flex items-center gap-5">
              <NavLink
                to="/"
                className="pb-4 cursor-pointer"
                title="Back to the homepage"
              >
                <CircleArrowLeft />
              </NavLink>
              <h1 className="mb-4 text-3xl font-bold text-gray-800">
                {note.title}
              </h1>
            </div>
            {/* Edit, Delete, Complete*/}
            <div className="flex gap-4">
              <button
                className="text-green-600 hover:text-green-700"
                title={
                  !note.completed ? "Mark as completed" : "Mark as incomplete"
                }
              >
                {!note.completed ? (
                  <CircleCheck size={32} />
                ) : (
                  <CircleX size={32} />
                )}
              </button>

              <button
                className="text-green-600 hover:text-green-700"
                title="Edit Note"
              >
                <Edit />
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
          <div className="flex-1 p-4 border-4 border-black border-dashed shadow-inner">
            {note.content}
          </div>
          <p className="mt-3 text-xs text-right text-gray-600">
            Made with love by Vayun ❤️
          </p>
        </div>
      ) : (
        <NoteNotFound />
      )}
      {modalOpen && (
        <ConfirmationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onConfirm={handleDeleteNote}
          message={clipTitle(note.title, "modal")}
        />
      )}
    </>
  );
};

const NoteNotFound = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex flex-col">
        <NavLink
          to="/"
          className="pb-4 cursor-pointer"
          title="Back to the homepage"
        >
          <CircleArrowLeft />
        </NavLink>
        <h1 className="p-6 text-2xl font-semibold text-gray-700 border-4 border-black border-dashed shadow-md shadow-stone-300">
          Note not found
        </h1>
      </div>
    </div>
  );
};
