// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../config/axiosInstance.js";
import { toast } from "react-toastify";

// 🔹 Login user
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await Axios.post("/auth/login", { email, password });
      toast.success("Login successful!");
      return res.data.user; // only user info; cookie is set automatically
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed!");
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// 🔹 Fetch logged-in user (cookie-based)
export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await Axios.get("/auth/user-info");
      return res.data.user;
    } catch (err) {
      return rejectWithValue("Not authenticated");
    }
  }
);

// 🔹 Logout
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    await Axios.post("/auth/logout");
    toast.info("Logged out successfully!");
  } catch (err) {
    console.error("Logout error:", err);
  }
});

// 🔹 Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Fetch user
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = "failed";
        state.user = null;
      })

      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.status = "idle";
      });
  },
});

export default authSlice.reducer;
