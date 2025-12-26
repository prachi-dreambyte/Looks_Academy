import React from "react";
import styles from "../../style/AdminDashboard.module.css";

const AdminDashboard = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>Admin Dashboard</h1>
        <span>Welcome back, Admin 👋</span>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Total Appointments</h3>
          <p>128</p>
        </div>

        <div className={styles.card}>
          <h3>Total Customers</h3>
          <p>356</p>
        </div>

        <div className={styles.card}>
          <h3>Stylists</h3>
          <p>12</p>
        </div>

        <div className={styles.card}>
          <h3>Revenue</h3>
          <p>₹2,45,000</p>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
