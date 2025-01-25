import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./layout/footer/Footer";
import Navbar from "./layout/navbar/Navbar";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
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
