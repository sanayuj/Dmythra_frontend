import { userInstance } from "../Axios/axiosInstance";


// POST METHODS

export const userSignup = (values) => {
  return userInstance.post("/signup", { ...values });
};

export const login=(values)=>{
  return userInstance.post("/login",{...values})
}

//GET METHODS

export const userHeader=()=>{
  return userInstance.get("/")
}