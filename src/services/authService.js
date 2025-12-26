import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Register User
export const registerUser = async (formData) => {
  try {
    const res = await axios.post(`${API_URL}/register`, formData);
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Something went wrong"
    );
  }
};

export const loginUser = async (formData) => {
  try {
    const res = await axios.post(`${API_URL}/login`, formData);
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Login failed"
    );
  }
};