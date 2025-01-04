import { useSelector } from "react-redux";
import { NoteCard } from "./NoteCard";

export const NoteBody = () => {
  const selectedCategory = useSelector((state) => state.category.category);
  const notes = useSelector((state) => state.notes);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {notes
        .filter(
          (note) => note.cat === selectedCategory || selectedCategory === "all"
        )
        .map((note) => (
          <NoteCard
            key={note.id}
            title={note.title}
            content={note.content}
            id={note.id}
          />
        ))}
    </div>
  );
};
