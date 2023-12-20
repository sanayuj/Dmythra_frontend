import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLoginPage from "../Pages/Admin/AdminLoginPage";
import AdminHome from "../Pages/Admin/AdminHome";

function AdminRouters() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminLoginPage/>}/>
        <Route path="/home" element={<AdminHome/>}/>
      </Routes>
    </div>
  );
}

export default AdminRouters;
