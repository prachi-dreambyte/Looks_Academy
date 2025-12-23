import axios from "axios";

const Axios = axios.create({
  baseURL: (import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/") + "api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // ✅ important: send cookies automatically
});

export default Axios;
