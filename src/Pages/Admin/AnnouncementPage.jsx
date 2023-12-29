import React from "react";
import Announcement from "../../Components/Admin/Announcement/Announcement";
import Header from "../../Components/Admin/Header/Header";
import SideBar from "../../Components/Admin/SideBar/SideBar";

function AnnouncementPage() {
  return (
    <div>
      <Header />
      <SideBar />
      <Announcement />
    </div>
  );
}

export default AnnouncementPage;
