import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../assets/styles/CreateAccount.module.css";
import axios from "axios";
import { toast } from "react-toastify";

const CreateAccount = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  // ✅ CHANGE HERE (ENV BASE URL)
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/auth/register`,
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      // ✅ Save token & user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // 🎉 Success toast
      toast.success("Account created successfully!");

      // ✅ Redirect
      setTimeout(() => {
        navigate("/admin");
      }, 1500);

    } catch (err) {
      // ❌ Error toast
      toast.error(
        err.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.glowOne}></div>
      <div className={styles.glowTwo}></div>

      <div className={styles.left}>
        <h1>Looks Salon</h1>
        <p>Join the world of luxury beauty</p>
      </div>

      <div className={styles.right}>
        <div className={styles.card}>
          <h2>Create Account</h2>
          <span className={styles.subText}>
            Start your beauty journey with us ✨
          </span>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Account"}
            </button>

            <p className={styles.loginLink}>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
