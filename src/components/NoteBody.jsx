import { useSelector } from "react-redux";
import { NoteCard } from "./NoteCard";

export const NoteBody = () => {
  const selectedCategory = useSelector((state) => state.category.category);
  const filteredNotes = useSelector((state) =>
    state.notes.filter(
      (note) => note.cat === selectedCategory || selectedCategory === "all"
    )
  );

  const checkLength = filteredNotes.length !== 0;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {checkLength ? (
        filteredNotes.map((note) => (
          <NoteCard
            key={note.id}
            title={note.title}
            content={note.content}
            id={note.id}
          />
        ))
      ) : (
        <div className="p-6 text-xl">
          <p>No notes created yet. 😔</p>
        </div>
      )}
    </div>
  );
};
