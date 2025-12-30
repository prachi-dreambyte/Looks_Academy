import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../style/AdminDashboard.module.css";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    blogs: 0,
    customers: 0,
    stylists: 0,
    revenue: 0,
  });

  // ✅ CHANGE HERE (ENV BASE URL)
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const blogRes = await axios.get(
        `${API_BASE_URL}/api/blogs/get-all-blogs`
      );

      setStats({
        blogs: blogRes.data.count || blogRes.data.data.length,
        customers: 356,   // future API
        stylists: 12,     // future API
        revenue: 245000,  // future API
      });
    } catch (error) {
      console.error("Dashboard error:", error);
    }
  };

  return (
    <>
      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <h1>Salon Admin Dashboard</h1>
          <span className={styles.subText}>
            Manage blogs, customers & salon activity
          </span>
        </div>

        <div className={styles.todayBox}>
          {new Date().toDateString()}
        </div>
      </div>

      {/* STATS CARDS */}
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Total Blogs</h3>
          <p>{stats.blogs}</p>
          <small>Published articles</small>
        </div>

        <div className={styles.card}>
          <h3>Total Customers</h3>
          <p>{stats.customers}</p>
          <small>Registered clients</small>
        </div>

        <div className={styles.card}>
          <h3>Stylists</h3>
          <p>{stats.stylists}</p>
          <small>Active professionals</small>
        </div>

        <div className={styles.card}>
          <h3>Monthly Revenue</h3>
          <p>₹{stats.revenue.toLocaleString()}</p>
          <small>Current month</small>
        </div>
      </div>

      {/* EXTRA SALON INFO */}
      <div className={styles.extraSection}>
        <div className={styles.infoCard}>
          <h4>Salon Status</h4>
          <p className={styles.active}>Open & Running</p>
        </div>

        <div className={styles.infoCard}>
          <h4>Admin Login</h4>
          <p>Last login: {new Date().toLocaleTimeString()}</p>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
