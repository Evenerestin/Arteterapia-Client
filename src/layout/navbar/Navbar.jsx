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
  // return (
  //   <nav
  //     className={`flex ${isHomePage ? "homePath" : ""} ${
  //       isScrolled || isPanelPage ? "scrolled" : ""
  //     }`}
  //   >
  //     <Link to="/" className="navLogo">
  //       <Logo />
  //     </Link>
  //     <div className="navigation flex">
  //       <ul className="flex menuItems">
  //         {MenuData.map((item, index) => {
  //           return <MenuItem menuItem={item} key={index} />;
  //         })}
  //       </ul>
  //       <div className="socialIcons flex">
  //         <a
  //           href="https://www.instagram.com/arteterapia.akw/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="gridCenter instagram"
  //         >
  //           <InstagramIcon />
  //         </a>
  //       </div>
  //     </div>
  //   </nav>
  // );
};

export default Navbar;
