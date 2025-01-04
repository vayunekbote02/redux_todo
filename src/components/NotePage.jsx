import { useSelector } from "react-redux";
import { useParams } from "react-router";

export const NotePage = () => {
  const { id } = useParams();
  const note = useSelector((state) =>
    state.notes.find((notes) => notes.id === id)
  );
  return (
    <>
      {note ? (
        <div>
          <h1>{note.title}</h1>
          <p>{note.content}</p>
        </div>
      ) : (
        <h1>Note not found</h1>
      )}
    </>
  );
};
