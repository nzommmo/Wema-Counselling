// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://admin.wemanexus.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // optional (10 seconds)
});

export default api;