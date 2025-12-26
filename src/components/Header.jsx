import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "/public/image/looks.jpeg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    const navbarCollapse = document.getElementById("navbarContent");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* <Social /> */}
      <header className={`modern-header ${scrolled ? "scrolled" : ""}`}>
        <nav className="modern-nav">
          <div className="nav-container">
            {/* Logo */}
            <Link to="/" className="logo-link" onClick={closeMobileMenu}>
              <img src={logo} alt="Looks" className="header-logo" />
            </Link>

            {/* Desktop Navigation */}
            <ul className="nav-menu desktop-menu">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <Link to="/AboutUs" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Courses" className="nav-link">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Gallery" className="nav-link">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Blogs"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/AboutUs#salonfaq"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  FAQ
                </NavLink>
              </li>
            </ul>

            {/* CTA Button */}
            <Link to="/ContactUs" className="cta-button desktop-cta">
              Contact Us
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className={`mobile-toggle ${mobileMenuOpen ? "active" : ""}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`mobile-nav ${mobileMenuOpen ? "active" : ""}`}>
            <ul className="mobile-menu">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "mobile-link active" : "mobile-link"
                  }
                  end
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <Link
                  to="/#aboutus"
                  className="mobile-link"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "mobile-link active" : "mobile-link"
                  }
                  onClick={closeMobileMenu}
                >
                  Services
                </NavLink>
              </li>
              <li className="mobile-dropdown">
                <details>
                  <summary className="mobile-link">Services Area</summary>
                  <ul className="mobile-submenu">
                    <li>
                      <Link to="/ServiceAreaDehradun" onClick={closeMobileMenu}>
                        Dehradun
                      </Link>
                    </li>
                    <li>
                      <Link to="/ServiceAreaDelhi" onClick={closeMobileMenu}>
                        Delhi
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ServiceAreaRishikesh"
                        onClick={closeMobileMenu}
                      >
                        Rishikesh
                      </Link>
                    </li>
                    <li>
                      <Link to="/ServiceAreaNodia" onClick={closeMobileMenu}>
                        Noida
                      </Link>
                    </li>
                    <li>
                      <Link to="/ServiceAreaGurgaon" onClick={closeMobileMenu}>
                        Gurgaon
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive ? "mobile-link active" : "mobile-link"
                  }
                  onClick={closeMobileMenu}
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "mobile-link active" : "mobile-link"
                  }
                  onClick={closeMobileMenu}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/PhotographyCourse"
                  className={({ isActive }) =>
                    isActive ? "mobile-link active" : "mobile-link"
                  }
                  onClick={closeMobileMenu}
                >
                  Courses
                </NavLink>
              </li>
              <li className="mobile-cta">
                <Link
                  to="/ContactUs"
                  className="cta-button"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <style jsx>{`
        /* ==================== MODERN FIXED HEADER STYLES ==================== */

        .modern-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .modern-header.scrolled {
          background: rgba(255, 255, 255, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .modern-nav {
          width: 100%;
          background: black;
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          z-index: 10;
        }

        .header-logo {
          height: 50px;
          width: auto;
          transition: transform 0.3s ease;
        }

        .header-logo:hover {
          transform: scale(1.05);
        }

        /* Desktop Navigation */
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 35px;
          list-style: none;
          margin: 0;
          padding: 0;
          color: white !important;
        }
        .nav-menu:hover {
          color: white;
        }

        .nav-item {
          position: relative;
        }

        .nav-link,
        .dropdown-btn {
          color: #ffffff;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 17px;
          font-weight: 500;
          padding: 8px 0;
          position: relative;
          transition: all 0.3s ease;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #000;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
          color: #ffffff !important;
        }

        .nav-link.active {
          font-weight: 600;
        }

        /* Dropdown */
        .dropdown-wrapper {
          position: relative;
        }

        .dropdown-icon {
          transition: transform 0.3s ease;
        }

        .dropdown-wrapper:hover .dropdown-icon {
          transform: rotate(180deg);
        }

        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          min-width: 180px;
          padding: 12px 0;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          list-style: none;
          margin: 0;
          z-index: 100;
        }

        .dropdown-wrapper:hover .dropdown-content {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-content li {
          padding: 0;
        }

        .dropdown-content a {
          display: block;
          padding: 10px 20px;
          color: #000;
          text-decoration: none;
          font-size: 16px;
          transition: all 0.2s ease;
        }

        .dropdown-content a:hover {
          background: #f5f5f5;
          padding-left: 25px;
        }

        /* CTA Button */
        .cta-button {
          background-color: white !important;
          background: #000;
          text-transform: uppercase;
          color: #000000 !important;
          padding: 12px 28px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 2px solid #000;
        }

        .cta-button:hover {
          background-color: white !important;
          background: transparent;
          color: #000000 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        /* Mobile Menu Toggle */
        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 10;
        }

        .mobile-toggle span {
          width: 25px;
          height: 3px;
          background: #000;
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .mobile-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(7px, 7px);
        }

        .mobile-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .mobile-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        /* Mobile Navigation */
        .mobile-nav {
          display: none;
        }

        /* Desktop Only */
        .desktop-menu,
        .desktop-cta {
          display: flex;
        }

        /* ==================== RESPONSIVE BREAKPOINTS ==================== */

        /* Tablet & Mobile - 991px and below */
        @media (max-width: 991px) {
          .nav-container {
            height: 70px;
            padding: 0 20px;
          }

          .header-logo {
            height: 45px;
          }

          .desktop-menu,
          .desktop-cta {
            display: none;
          }

          .mobile-toggle {
            display: flex;
          }

          .mobile-nav {
            display: block;
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            height: calc(100vh - 70px);
            background: #fff;
            transform: translateX(-100%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            overflow-y: auto;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }

          .mobile-nav.active {
            transform: translateX(0);
          }

          .mobile-menu {
            list-style: none;
            padding: 20px;
            margin: 0;
          }

          .mobile-menu > li {
            border-bottom: 1px solid #f0f0f0;
          }

          .mobile-link {
            display: block;
            padding: 16px 12px;
            color: #000;
            text-decoration: none;
            font-size: 18px;
            font-weight: 500;
            transition: all 0.2s ease;
          }

          .mobile-link:hover,
          .mobile-link.active {
            color: #333;
            background: #f8f8f8;
            padding-left: 20px;
          }

          .mobile-dropdown details {
            padding: 0;
          }

          .mobile-dropdown summary {
            padding: 16px 12px;
            color: #000;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
            list-style: none;
          }

          .mobile-dropdown summary::-webkit-details-marker {
            display: none;
          }

          .mobile-submenu {
            list-style: none;
            padding: 0 0 0 20px;
            margin: 0;
            background: #f8f8f8;
          }

          .mobile-submenu li {
            border-bottom: 1px solid #e8e8e8;
          }

          .mobile-submenu a {
            display: block;
            padding: 12px 16px;
            color: #333;
            text-decoration: none;
            font-size: 16px;
          }

          .mobile-submenu a:hover {
            background: #fff;
            padding-left: 24px;
          }

          .mobile-cta {
            padding: 20px 12px;
            border: none;
          }

          .mobile-cta .cta-button {
            width: 100%;
            text-align: center;
            display: block;
          }
        }

        /* Mobile Portrait - 767px and below */
        @media (max-width: 767px) {
          .nav-container {
            height: 65px;
            padding: 0 15px;
          }

          .header-logo {
            height: 40px;
          }

          .mobile-nav {
            top: 65px;
            height: calc(100vh - 65px);
          }

          .mobile-link {
            font-size: 17px;
            padding: 14px 10px;
          }

          .mobile-dropdown summary {
            font-size: 17px;
            padding: 14px 10px;
          }

          .mobile-submenu a {
            font-size: 15px;
            padding: 10px 14px;
          }
        }

        /* Small Mobile - 575px and below */
        @media (max-width: 575px) {
          .nav-container {
            height: 60px;
            padding: 0 12px;
          }

          .header-logo {
            height: 38px;
          }

          .mobile-nav {
            top: 60px;
            height: calc(100vh - 60px);
          }

          .mobile-menu {
            padding: 15px;
          }

          .mobile-link {
            font-size: 16px;
            padding: 12px 8px;
          }

          .mobile-dropdown summary {
            font-size: 16px;
            padding: 12px 8px;
          }

          .mobile-submenu {
            padding-left: 15px;
          }

          .mobile-submenu a {
            font-size: 14px;
            padding: 10px 12px;
          }

          .cta-button {
            padding: 10px 24px;
            font-size: 15px;
          }
        }

        /* Extra Small Mobile - 360px and below */
        @media (max-width: 360px) {
          .nav-container {
            height: 58px;
            padding: 0 10px;
          }

          .header-logo {
            height: 35px;
          }

          .mobile-nav {
            top: 58px;
            height: calc(100vh - 58px);
          }

          .mobile-link {
            font-size: 15px;
            padding: 11px 8px;
          }

          .mobile-dropdown summary {
            font-size: 15px;
            padding: 11px 8px;
          }

          .mobile-submenu a {
            font-size: 14px;
            padding: 9px 10px;
          }

          .mobile-toggle span {
            width: 22px;
            height: 2.5px;
          }
        }

        /* Prevent body scroll when mobile menu is open */
        body.menu-open {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Header;
