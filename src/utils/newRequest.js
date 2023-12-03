import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://instant-backend.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;