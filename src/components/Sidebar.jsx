import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../features/categorySlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  const totalNoteCount = useSelector(
    (state) =>
      state.notes.filter(
        (note) => note.cat === selectedCategory || selectedCategory === "all"
      ).length
  );

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <div className="flex flex-col w-64 h-screen p-4 bg-stone-400">
      <div className="flex flex-col items-center">
        <img
          src="https://images.pexels.com/photos/27977072/pexels-photo-27977072/free-photo-of-black-white-horse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Logo"
          className="w-12 h-12 mb-2 rounded-full"
        />
        <h1 className="text-xl font-bold">Categories</h1>
      </div>
      <div className="flex justify-center mt-4 text-2xl text-white bg-stone-500">
        {totalNoteCount} {totalNoteCount === 1 ? "Note" : "Notes"}
      </div>
      <div className="flex flex-col gap-4 mt-4 ml-4 text-xl">
        <label className="flex items-baseline cursor-pointer">
          <input
            type="radio"
            name="category"
            value="personal"
            className="mr-2"
            checked={selectedCategory === "personal"}
            onChange={() => handleCategoryChange("personal")}
          />
          Personal
        </label>
        <label className="flex items-baseline cursor-pointer">
          <input
            type="radio"
            name="category"
            value="work"
            className="mr-2"
            checked={selectedCategory === "work"}
            onChange={() => handleCategoryChange("work")}
          />
          Work
        </label>
        <label className="flex items-baseline cursor-pointer">
          <input
            type="radio"
            name="category"
            value="all"
            className="mr-2"
            checked={selectedCategory === "all"}
            onChange={() => handleCategoryChange("all")}
          />
          All
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
