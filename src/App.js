import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserRouters from "./Routers/UserRouters";
import AdminRouters from "./Routers/AdminRouters";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRouters />} />
          <Route path="/admin/*" element={<AdminRouters />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
