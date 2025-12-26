import React from "react";
import styles from "../../style/AdminDashboard.module.css";

const AdminDashboard = () => {
  return (
    <div className={styles.dashboard}>

      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>Looks Salon</h2>

        <ul className={styles.menu}>
          <li className={styles.active}>Dashboard</li>
          <li>Appointments</li>
          <li>Customers</li>
          <li>Stylists</li>
          <li>Services</li>
          <li>Logout</li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.main}>

        {/* HEADER */}
        <div className={styles.header}>
          <h1>Admin Dashboard</h1>
          <span>Welcome back, Admin 👋</span>
        </div>

        {/* STATS */}
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

        {/* RECENT APPOINTMENTS */}
        <div className={styles.tableCard}>
          <h2>Recent Appointments</h2>

          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Anjali</td>
                <td>Hair Spa</td>
                <td>12 Sep 2025</td>
                <td className={styles.done}>Completed</td>
              </tr>
              <tr>
                <td>Rohit</td>
                <td>Haircut</td>
                <td>12 Sep 2025</td>
                <td className={styles.pending}>Pending</td>
              </tr>
              <tr>
                <td>Pooja</td>
                <td>Facial</td>
                <td>11 Sep 2025</td>
                <td className={styles.done}>Completed</td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
};

export default AdminDashboard;
