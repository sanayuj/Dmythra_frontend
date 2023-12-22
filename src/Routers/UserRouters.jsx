import React from "react";
import { Route, Routes } from "react-router-dom";


import HomePage from "../Pages/User/HomePage";
import LoginAndRegisterPage from "../Pages/User/LoginAndRegisterPage";
import AnnouncementPage from "../Pages/User/AnnouncementPage";

function UserRouters() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginAndRegisterPage/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/announcement" element={<AnnouncementPage/>}/>
      </Routes>
    </div>
  );
}

export default UserRouters;
