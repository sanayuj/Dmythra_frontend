import React from "react";
import UserPost from "../../Components/Admin/UsersPosts/UserPost";
import Header from "../../Components/Admin/Header/Header";
import SideBar from "../../Components/Admin/SideBar/SideBar";

function UsersPostDisplayPage() {
  return (
    <div>
      <Header />
      <SideBar />
      <UserPost />
    </div>
  );
}

export default UsersPostDisplayPage;
