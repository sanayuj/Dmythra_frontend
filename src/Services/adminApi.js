import { adminInstance } from "../Axios/axiosInstance";

export const adminLogin = (values) => {
  return adminInstance.post("/login", { ...values });
};

export const toogleBlock = (userId) => {
  return adminInstance.post("/blockuser", { userId });
};

export const uploadTrainingDetails = (values) => {
  return adminInstance.post("/addtraining", { ...values });
};
export const uploadAcademicDetails = (values) => {
  return adminInstance.post("/addacademic", { ...values });
};

export const uploadAnnouncement = (values) => {
  return adminInstance.post("/addannouncement", { ...values });
};

export const verifyDonationApi = (donationId) => {
  return adminInstance.post(`/verfiydonation/${donationId}`);
};

//GET

export const userDetails = () => {
  return adminInstance.get("/userdetails");
};

export const donationDetails = () => {
  return adminInstance.get("/donatondetails");
};

export const userPostDetails = () => {
  return adminInstance.get("/fetchuserpost");
};

export const adminHeader = () => {
  return adminInstance.get("/");
};
