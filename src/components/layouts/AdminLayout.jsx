import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBlog,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
  FaImages,
  FaHome,
  FaBook,
} from "react-icons/fa";
import styles from "../../style/AdminDashboard.module.css";
import logo from "/public/image/looks.jpeg";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  // dropdown states
  const [homeOpen, setHomeOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <div className={styles.dashboard}>
      {/* MOBILE HEADER */}
      <header className={styles.mobileHeader}>
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
          {/* DASHBOARD */}
          <li>
            <NavLink
              to="/admin/dashboard"
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <FaTachometerAlt /> Dashboard
            </NavLink>
          </li>

          {/* HOME DROPDOWN */}
          <li className={styles.dropdown}>
            <div
              className={styles.dropdownHeader}
              onClick={() => setHomeOpen(!homeOpen)}
            >
              <span>
                <FaHome /> Home
              </span>
              {homeOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {homeOpen && (
              <ul className={styles.subMenu}>
                <li>
                  <NavLink to="/admin/banner" onClick={() => setOpen(false)}>
                    Home Banner
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/our-story" onClick={() => setOpen(false)}>
                    Our Story
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/why-join-us" onClick={() => setOpen(false)}>
                    Why Join Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/connect-with-us"
                    onClick={() => setOpen(false)}
                  >
                    Connect With Us
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* GALLERY DROPDOWN */}
          <li className={styles.dropdown}>
            <div
              className={styles.dropdownHeader}
              onClick={() => setGalleryOpen(!galleryOpen)}
            >
              <span>
                <FaImages /> Gallery
              </span>
              {galleryOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {galleryOpen && (
              <ul className={styles.subMenu}>
                <li>
                  <NavLink to="/admin/gallery" onClick={() => setOpen(false)}>
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/gallerybanner"
                    onClick={() => setOpen(false)}
                  >
                    Gallery Banner
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* COURSES DROPDOWN */}
          <li className={styles.dropdown}>
            <div
              className={styles.dropdownHeader}
              onClick={() => setCourseOpen(!courseOpen)}
            >
              <span>
                <FaBook /> Courses
              </span>
              {courseOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {courseOpen && (
              <ul className={styles.subMenu}>
                <li>
                  <NavLink
                    to="/admin/coursesbanner"
                    onClick={() => setOpen(false)}
                  >
                    Courses Banner
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/courses" onClick={() => setOpen(false)}>
                    Courses
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* BLOGS */}
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
