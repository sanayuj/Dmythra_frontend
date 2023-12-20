import { adminInstance } from "../Axios/axiosInstance";

export const adminLogin=(values)=>{
    return adminInstance.post("/login",{...values})
}