import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLoginPage from "../Pages/Admin/AdminLoginPage";
import AdminHome from "../Pages/Admin/AdminHome";
import TrainingPage from "../Pages/Admin/TrainingPage";
import AcademicPage from "../Pages/Admin/AcademicPage";
import AnnouncementPage from "../Pages/Admin/AnnouncementPage";
import DonationRequestPage from "../Pages/Admin/DonationRequestPage";
import UsersPostDisplayPage from "../Pages/Admin/UsersPostDisplayPage";



function AdminRouters() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminLoginPage/>}/>
        <Route path="/home" element={<AdminHome/>}/>
        <Route path="/training" element={<TrainingPage/>}/>
        <Route path="/academic" element={<AcademicPage/>}/>
        <Route path="/announcement" element={<AnnouncementPage/>}/>
        <Route path="/donationreq" element={<DonationRequestPage/>}/>
        <Route path="/userspost" element={<UsersPostDisplayPage/>}/>
      </Routes>
    </div>
  );
}

export default AdminRouters;
