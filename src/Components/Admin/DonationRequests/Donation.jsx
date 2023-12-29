import React, { useEffect, useState } from "react";
import "./Donation.css";
import { donationDetails, verifyDonationApi } from "../../../Services/adminApi";
import { toast } from "react-toastify";
function Donation() {
  const [donationData, setDonationData] = useState([]);

  const fetchDonationDetails = async () => {
    const { data } = await donationDetails();
    if (data.status) {
      setDonationData(data?.data);
    }
  };
  const verifyDonation = async (donationId) => {
    const { data } = await verifyDonationApi(donationId);
    if (data.status) {
      toast.success(data.message);
    } else {
      toast.error("Unable to verify");
    }
  };
  useEffect(() => {
    fetchDonationDetails();
  }, []);
  return (
    <div className="donationMain">
      <h4>Donation requests</h4>
      {donationData.map((value) => (
        <div className="mainDivClass">
          <img
            className="image"
            src={`http://localhost:4000/images/${value.imageUrl}`}
            alt=""
          />
          <div className="listView">
            <h4>{value.requestTitle}</h4>
            <h6 className="my-4">{value.requestDescription}</h6>
            <div className="lastline">
              <p className="d-flex">
                Contact : <span>{value.ownerId.email}</span>
              </p>

              {value.Verified ? (
                <p className="verifiedMessage">
                  <b>Verified</b>
                </p>
              ) : (
                <button
                  className="btn btn-primary verifiedBtn"
                  onClick={() => verifyDonation(value._id)}
                >
                  Verify Donation
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Donation;
