import { Outlet, useLocation } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import React from "react";

const Root = () => {
  const location = useLocation();
  const isPanel = location.pathname.startsWith("/panel");
  return (
    <div>
      {/* <Navbar /> */}
      {isPanel ? "" : <Navbar />}
      <Outlet />
      {location.pathname === "/" || isPanel ? null : <Footer />}
    </div>
  );
};

export default Root;
