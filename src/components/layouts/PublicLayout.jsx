import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Slider from "../Slider";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Slider />
      
      <Footer />
    </>
  );
};

export default PublicLayout;
