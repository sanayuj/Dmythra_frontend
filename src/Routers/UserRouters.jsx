import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/User/HomePage";
import LoginAndRegisterPage from "../Pages/User/LoginAndRegisterPage";
import AnnouncementPage from "../Pages/User/AnnouncementPage";
import Postpage from "../Pages/User/Postpage";
import TrainingPage from "../Pages/User/TrainingPage";
import AcademicPage from "../Pages/User/AcademicPage";
import DonationPage from "../Pages/User/DonationPage";
import NotFoundPage from "../Pages/User/NotFoundPage";
import UserUrlAuth from "../Hooks/UserUrlAuth";
import PostDisplayPage from "../Pages/User/PostDisplayPage";
function UserRouters() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginAndRegisterPage />} />

        <Route path="/" element={<HomePage />} />
        <Route element={<UserUrlAuth />}>
          <Route path="/announcement" element={<AnnouncementPage />} />
          <Route path="" element={<Postpage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/academic" element={<AcademicPage />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/post" element={<PostDisplayPage/>}/>
          <Route path="/addPost" element={<Postpage/>}/>
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default UserRouters;
