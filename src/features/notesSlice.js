import { createSlice } from "@reduxjs/toolkit";

const notes = [
  {
    id: "ceab1009-d5fd-4869-886d-d701a235e68d",
    title: "Finish reading 'Atomic Habits' by James Clear",
    content: "Complete the last chapter and take notes on key points.",
    cat: "personal",
    completed: true,
  },
  {
    id: "293e4fee-1d2f-4f23-baa7-33140a1cef62",
    title: "Meeting with John",
    content:
      "Discuss the project timeline and milestones. Prepare the report beforehand.",
    cat: "work",
    completed: false,
  },
  {
    id: "69516e7a-3dbc-4fce-a05b-faf5231bf122",
    title: "Buy groceries",
    content:
      "Purchase milk, eggs, bread, and fresh fruits. Don't forget the weekly discount card.",
    cat: "personal",
    completed: false,
  },
  {
    id: "48088b4d-8b68-4782-8688-4e2e7726b6b0",
    title: "Workout",
    content:
      "Do 30 minutes of cardio and a 15-minute stretch session. Stay hydrated!",
    cat: "personal",
    completed: false,
  },
  {
    id: "f7f3d1d0-4e3c-4f5e-8f6d-3b4f5c5d3b0d",
    title: "Plan vacation",
    content:
      "Research destinations for a 5-day trip. Look for flight and hotel deals.",
    cat: "personal",
    completed: false,
  },
  {
    id: "19691d9e-432f-408f-b57f-60a22c418be8",
    title: "Fix the bike",
    content:
      "Repair the flat tire and lubricate the chain. Check if brakes need adjustment.",
    cat: "personal",
    completed: false,
  },
  {
    id: "b50a0be6-9ab9-4695-95f9-6f3bca19d1ed",
    title: "Call mom",
    content: "Catch up on family updates and share recent work progress.",
    cat: "personal",
    completed: false,
  },
  {
    id: "774119df-1320-4783-8399-224ddd896293",
    title: "Water the plants",
    content:
      "Give all the indoor plants a good soak. Check for signs of pests or dryness.",
    cat: "personal",
    completed: false,
  },
];

const initialState = {
  allNotes: notes,
  filteredNotes: notes,
  searchTerm: "",
  selectedCategory: "all",
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    resetNotes(state) {
      state.allNotes = notes;
      state.filteredNotes = notes;
      state.searchTerm = "";
      state.selectedCategory = "all";
    },
    findNotes(state, action) {
      state.searchTerm = action.payload;
      state.filteredNotes = state.allNotes.filter(
        (note) =>
          (note.cat === state.selectedCategory ||
            state.selectedCategory === "all") &&
          (note.title.toLowerCase().includes(action.payload.toLowerCase()) ||
            note.content.toLowerCase().includes(action.payload.toLowerCase()))
      );
    },
    setCategory(state, action) {
      state.selectedCategory = action.payload;
      state.filteredNotes = state.allNotes.filter(
        (note) =>
          (note.cat === action.payload || action.payload === "all") &&
          (note.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            note.content.toLowerCase().includes(state.searchTerm.toLowerCase()))
      );
    },
    deleteNote(state, action) {
      state.allNotes = state.allNotes.filter(
        (note) => note.id !== action.payload
      );
      state.filteredNotes = state.filteredNotes.filter(
        (note) => note.id !== action.payload
      );
    },
    deleteAllNotesOfSelectedCategory(state, action) {
      if (action.payload === "all") {
        state.allNotes = [];
        state.filteredNotes = [];
      } else {
        state.allNotes = state.allNotes.filter(
          (note) => note.cat !== action.payload
        );
        state.filteredNotes = state.filteredNotes.filter(
          (note) => note.cat !== action.payload
        );
      }
    },
  },
});

export const {
  deleteNote,
  deleteAllNotesOfSelectedCategory,
  findNotes,
  setCategory,
  resetNotes,
} = notesSlice.actions;
export default notesSlice.reducer;
