import { CircleArrowLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router";

export const NotePage = () => {
  const { id } = useParams();
  const note = useSelector((state) =>
    state.notes.find((notes) => notes.id === id)
  );

  return (
    <>
      {note ? (
        <div className="flex flex-col h-screen pt-8 pb-6 pl-8 pr-8 bg-white">
          <h1 className="mb-4 text-3xl font-bold text-gray-800">
            {note.title}
          </h1>
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
