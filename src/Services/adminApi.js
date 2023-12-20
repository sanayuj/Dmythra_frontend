import { adminInstance } from "../Axios/axiosInstance";

export const adminLogin=(values)=>{
    return adminInstance.post("/login",{...values})
}

export const toogleBlock=(userId)=>{
    return adminInstance.post('/blockuser',{userId})
}



//GET

export const userDetails=()=>{
    return adminInstance.get("/userdetails")
  }