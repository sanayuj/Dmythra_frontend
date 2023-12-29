import React from "react";
import Home from "../../Components/Admin/Home/Home";
import SideBar from "../../Components/Admin/SideBar/SideBar";
import Header from "../../Components/Admin/Header/Header";

function AdminHome() {
  return (
    <div>
      <Header />
      <SideBar />
      <Home />
    </div>
  );
}

export default AdminHome;
