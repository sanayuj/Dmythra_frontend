import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLoginPage from "../Pages/Admin/AdminLoginPage";

function AdminRouters() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminLoginPage/>}/>
      </Routes>
    </div>
  );
}

export default AdminRouters;
