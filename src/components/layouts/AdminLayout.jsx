import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBlog,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";
import styles from "../../style/AdminDashboard.module.css";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🔴 Clear session
    sessionStorage.removeItem("token");

    // 🔁 Redirect to login
    navigate("/login", { replace: true });
  };

  return (
    <div className={styles.dashboard}>
      {/* MOBILE HEADER */}
      <header className={styles.mobileHeader}>
        <h2>Looks Salon</h2>
        <button onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* SIDEBAR */}
      <aside className={`${styles.sidebar} ${open ? styles.show : ""}`}>
        <div className={styles.logo}>
          <span>Looks</span> Salon
        </div>

        <ul className={styles.menu}>
          <li>
            <NavLink
              to="/admin/dashboard"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? styles.active : ""
              }
            >
              <FaTachometerAlt /> Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/blogs"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? styles.active : ""
              }
            >
              <FaBlog /> Blogs
            </NavLink>
          </li>
        </ul>

        {/* LOGOUT */}
        <div className={styles.logout} onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
