import React from "react";
import { Route, Routes } from "react-router-dom";


import HomePage from "../Pages/User/HomePage";
import LoginAndRegisterPage from "../Pages/User/LoginAndRegisterPage";
import AnnouncementPage from "../Pages/User/AnnouncementPage";
import Postpage from "../Pages/User/Postpage";
import TrainingPage from "../Pages/User/TrainingPage";

function UserRouters() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginAndRegisterPage/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/announcement" element={<AnnouncementPage/>}/>
        <Route path="/post" element={<Postpage/>}/>
        <Route path="/training" element={<TrainingPage/>}/>
      </Routes>
    </div>
  );
}

export default UserRouters;
