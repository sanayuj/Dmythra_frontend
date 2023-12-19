import axios from "axios";

const userInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});
const adminInstance = axios.create({
  baseURL: `${"http://localhost:4000"}/admin`,
  headers: {
    "Content-Type": "application/json",
  },
});

export {userInstance,adminInstance}