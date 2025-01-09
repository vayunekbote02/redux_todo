import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App.jsx";
import { NotePage } from "../components/note/NotePage.jsx";
import { EmptyLayout } from "../layouts";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmptyLayout />}>
          <Route index element={<App />} />
          <Route path=":id" element={<NotePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
