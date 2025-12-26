import React from "react";
import "../style/loader.css";
import logo from "/image/Wlooks.png"; // adjust path if needed

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={logo} alt="Logo" className="loader-logo" />
    </div>
  );
};

export default Loader;
