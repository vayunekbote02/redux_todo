import { Header } from "./components/main/Header.jsx";
import { NoteBody } from "./components/note/NoteBody.jsx";
import Sidebar from "./components/main/Sidebar.jsx";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full p-4">
        <Header />
        <NoteBody />
      </div>
    </div>
  );
}

export default App;
