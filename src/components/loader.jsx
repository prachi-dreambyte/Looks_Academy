import React from "react";
import styles from "../assets/styles/Loader.module.css";
import logo from "../assets/images/looks.jpeg"; // adjust path if needed

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <img src={logo} alt="Logo" className={styles.loaderLogo} />
    </div>
  );
};

export default Loader;
