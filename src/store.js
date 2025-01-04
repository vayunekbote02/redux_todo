import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import notesReducer from "./features/notesSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    notes: notesReducer,
  },
});

export default store;
