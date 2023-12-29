import { userInstance } from "../Axios/axiosInstance";

// POST METHODS

export const userSignup = (values) => {
  return userInstance.post("/signup", { ...values });
};

export const login = (values) => {
  return userInstance.post("/login", { ...values });
};

export const donationReqest = (values, userId) => {
  return userInstance.post(
    "/donationreq",
    { ...values, userId },
    { headers: { "Content-Type": "multipart/form-data" } }
  );
};

export const postSkill = (values, userId) => {
  return userInstance.post(
    "/postskill",
    { ...values, userId },
    { headers: { "Content-Type": "multipart/form-data" } }
  );
};

//GET METHODS

export const userHeader = () => {
  return userInstance.get("/");
};

export const fetchAnnouncement = () => {
  return userInstance.get("/fetchannouncement");
};

export const fetchTrainingDetails = () => {
  return userInstance.get("/fetchtrainingdetails");
};

export const fetchAcademicDetails = () => {
  return userInstance.get("/fetechacademicdetails");
};

export const fetchApprovedUserDonation = (userId) => {
  return userInstance.get(`/fetchApprovedDonation/${userId}`);
};
