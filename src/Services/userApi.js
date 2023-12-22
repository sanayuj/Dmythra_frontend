import { userInstance } from "../Axios/axiosInstance";


// POST METHODS

export const userSignup = (values) => {
  console.log(values,"%%%%%");
  return userInstance.post("/signup", { ...values });
};

export const login=(values)=>{
  console.log(values,"+++=====");
  return userInstance.post("/login",{...values})
}

//GET METHODS

export const userHeader=()=>{
  return userInstance.get("/")
}

export const fetchAnnouncement=()=>{
  return userInstance.get("/fetchannouncement")
}
