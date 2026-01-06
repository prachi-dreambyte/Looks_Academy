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
import logo from "/public/image/looks.jpeg"; // 👈 add your logo path

const AdminLayout = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <div className={styles.dashboard}>
      {/* MOBILE HEADER */}
      <header className={styles.mobileHeader}>
        {/* 🔥 LOGO INSTEAD OF TEXT */}
        <img src={logo} alt="Looks Salon" className={styles.mobileLogo} />

        <button onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* SIDEBAR */}
      <aside className={`${styles.sidebar} ${open ? styles.show : ""}`}>
        <div className={styles.logo}>
          <img src={logo} alt="Looks Salon" />
        </div>

        <ul className={styles.menu}>
          <li>
            <NavLink
              to="/admin/dashboard"
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <FaTachometerAlt /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/banner"
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <FaBlog /> Home Banner
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/our-story"
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <FaBlog /> Our Story
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/why-join-us"
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <FaBlog /> WHy Join US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/connect-with-us"
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <FaBlog /> Connect With Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/blogs"
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? styles.active : "")}
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
