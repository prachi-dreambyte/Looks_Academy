import React, { useState } from "react";
import styles from "../../assets/styles/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../services/axiosInstance";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosInstance.post(
        "/api/auth/login",
        formData
      );

      // ✅ Save token & user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Login successfully!");

      navigate("/admin", { replace: true });
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLeft}>
        <div className={styles.overlay}>
          <h1>Looks Salon</h1>
          <p>Luxury • Style • Confidence</p>
        </div>
      </div>

      <div className={styles.loginRight}>
        <div className={styles.loginBox}>
          <h2>Welcome Back</h2>
          <p className={styles.subText}>
            Login to continue your beauty journey
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <div className={styles.passwordBox}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className={styles.eye}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <span className={styles.signup}>
              Don’t have an account?{" "}
              <Link to="/createaccount">Sign Up</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
