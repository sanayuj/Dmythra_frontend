import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function AdminUrlAuth() {
  const admin = useSelector((state) => state.admin.value);
  console.log(admin);
  if (admin) {
    return <Outlet />;
  } else {
    return <Navigate to="/admin/" />;
  }
}

export default AdminUrlAuth;
