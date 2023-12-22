import { adminInstance } from "../Axios/axiosInstance";

export const adminLogin=(values)=>{
    return adminInstance.post("/login",{...values})
}

export const toogleBlock=(userId)=>{
    return adminInstance.post('/blockuser',{userId})
}

export const uploadTrainingDetails=(values)=>{
    return adminInstance.post('/addtraining',{...values})
}
export const uploadAcademicDetails=(values)=>{
    return adminInstance.post("/addacademic",{...values})
}

export const uploadAnnouncement=(values)=>{
    return adminInstance.post("/addannouncement",{...values})
}


//GET

export const userDetails=()=>{
    return adminInstance.get("/userdetails")
  }