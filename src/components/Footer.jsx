import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import styles from "../assets/styles/footer.module.css";
import logo from "../assets/images/looks.jpeg";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className={`${styles.MainFooter} bg-black border-top`}>
      <div className="container-fluid">
        <div className={`row justify-content-center ${styles.footerMainContent}`}>
          
          {/* Logo Section */}
          <div className={`col-lg-2 col-md-6 col-sm-6 mb-4 ${styles.footerColumn}`}>
            <Link to="/" className="nav-link">
              <img src={logo} alt="Logo" className={styles.Logo} />
            </Link>

            <ul className={`list-unstyled mt-4 ${styles.footerLinks}`}>
              <li className={styles.footerParagraph}>
                <a href="tel:+918006022277" className="d-flex align-items-center gap-2">
                  <Phone size={18} />
                  <span>+91 8006022277</span>
                </a>
              </li>

              <li className={styles.footerParagraph}>
                <a href="mailto:info@looks.com" className="d-flex align-items-center gap-2">
                  <Mail size={18} />
                  <span>info@looks.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className={`col-lg-3 col-md-6 col-sm-6 mb-4 ${styles.footerColumn}`}>
            <h3 className={styles.footerName}>Get in Touch</h3>
            <p className={styles.footerPara}>
              Looks Salon & Academy, Next to Raymond Showroom, G.M.S Road,
              Dehradun, Uttarakhand 248171
            </p>
          </div>

          {/* Navigation */}
          <div className={`col-lg-2 col-md-6 col-sm-6 mb-4 ${styles.footerColumn}`}>
            <h3 className={styles.footerName}>Home</h3>
            <ul className={`list-unstyled ${styles.footerLinks}`}>
              <li className={styles.footerParagraph}>
                <Link to="/AboutUs">About Us</Link>
              </li>
              <li className={styles.footerParagraph}>
                <Link to="/Courses">Courses</Link>
              </li>
              <li className={styles.footerParagraph}>
                <Link to="/Blogs">Blogs</Link>
              </li>
              <li className={styles.footerParagraph}>
                <Link to="/Gallery">Gallery</Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className={`col-lg-3 col-md-6 col-sm-6 mb-4 ${styles.footerColumn}`}>
            <h3 className={styles.footerName}>Say Hello</h3>

            <p>
              <Link to="/TermsAndCondition" className={styles.footerLinkSmall}>
                Terms & Conditions
              </Link>
            </p>

            <p>
              <Link to="/privacy-policy" className={styles.footerLinkSmall}>
                Privacy Policy
              </Link>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
