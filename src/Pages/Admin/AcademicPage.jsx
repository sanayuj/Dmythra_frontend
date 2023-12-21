import React from "react";
import Academic from "../../Components/Admin/Academic/Academic";
import Header from "../../Components/Admin/Header/Header";
import SideBar from "../../Components/Admin/SideBar/SideBar";

function AcademicPage() {
  return (
    <div>
      <Header />
      <SideBar />
      <Academic />
    </div>
  );
}

export default AcademicPage;
