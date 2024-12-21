import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import useScroll from "../../hooks/useScroll";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isScrolled = useScroll();
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const isHomePage = location.pathname === "/";

  return isMobile ? (
    <MobileNav isScrolled={isScrolled} isHomePage={isHomePage} />
  ) : (
    <DesktopNav isScrolled={isScrolled} isHomePage={isHomePage} />
  );
};

export default Navbar;
