import axios from "axios";

// Base URL of your backend
const API = axios.create({
  baseURL: "http://localhost:5000/api", // 👈 update for production
});

// Attach token automatically if exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
