import React from "react";
import Donation from "../../Components/Admin/DonationRequests/Donation";
import Header from "../../Components/Admin/Header/Header";
import SideBar from "../../Components/Admin/SideBar/SideBar";

function DonationRequestPage() {
  return (
    <div>
      <Header />
      <SideBar />
      <Donation />
    </div>
  );
}

export default DonationRequestPage;
