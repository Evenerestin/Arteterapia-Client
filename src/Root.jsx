import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./layout/footer/Footer";
import Navbar from "./layout/navbar/Navbar";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
