import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import DocumentPage from "../pages/DocumentPage";
import Document from "../pages/Document";
import Landing from "../pages/Landing";
import App from "../../App";
import CreateDocument from "../pages/CreateDocument";

const Navigation = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/graph-notes/" element={<Landing />} />
        <Route path="/graph-notes/document/" element={<DocumentPage />}>
          <Route path=":documentId" element={<Document />} />
          <Route path="new" element={<CreateDocument />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Navigation;
