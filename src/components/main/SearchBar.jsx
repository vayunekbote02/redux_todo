import { useDispatch } from "react-redux";
import { findNotes } from "../../features/notesSlice";
import { useState } from "react";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    dispatch(findNotes(value));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="p-1 border border-gray-300 rounded"
        onChange={handleSearch}
        value={searchTerm}
      />
    </div>
  );
};
