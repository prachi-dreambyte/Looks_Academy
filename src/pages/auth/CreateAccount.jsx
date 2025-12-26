import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../style/CreateAccount.module.css";
import { registerUser } from "../../services/authService";

const CreateAccount = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const data = await registerUser(formData);

      // ✅ Save token
      localStorage.setItem("token", data.token);

      setSuccess("Account created successfully 🎉");

      // ✅ Redirect to Admin Dashboard
      navigate("/admin-dashboard");

    } catch (err) {
      setError(err.message);
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

            {error && <p className={styles.error}>{error}</p>}
            {success && <p className={styles.success}>{success}</p>}

            <button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Account"}
            </button>

            <p className={styles.loginLink}>
              Already have an account? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
