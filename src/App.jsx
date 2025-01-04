import { Header } from "./components/Header";
import { NoteBody } from "./components/NoteBody";
import Sidebar from "./components/Sidebar";

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
