import { userInstance } from "../Axios/axiosInstance";


// POST METHODS

export const userSignup = (values) => {
console.log(values,"|||||||")
  return userInstance.post("/signup", { ...values });
};

