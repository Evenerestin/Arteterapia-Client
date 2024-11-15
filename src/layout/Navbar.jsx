import { Link, useLocation } from "react-router-dom";
// import GokIcon from "../assets/GokIcon";
// import InstagramIcon from "../assets/InstagramIcon";
import { InstagramIcon } from "../assets/ContactIcons";
import Logo from "../assets/Logo";
import MenuData from "../assets/MenuData";
import "../css/Navbar.css";
import useScroll from "../hooks/useScroll";
import MenuItem from "./MenuItem";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isPanelPage = location.pathname.startsWith("/panel");
  const isScrolled = useScroll();

  return (
    <nav
      className={`flex ${isHomePage ? "homePath" : ""} ${
        isScrolled || isPanelPage ? "scrolled" : ""
      }`}
    >
      <Link to="/" className="navLogo">
        <Logo />
      </Link>
      <div className="navigation flex">
        <ul className="flex menuItems">
          {MenuData.map((item, index) => {
            return <MenuItem menuItem={item} key={index} />;
          })}
        </ul>
        <div className="socialIcons flex">
          <a
            href="https://www.instagram.com/arteterapia.akw/"
            target="_blank"
            rel="noopener noreferrer"
            className="gridCenter instagram"
          >
            <InstagramIcon />
          </a>
          {/* <a
            href="https://www.kultura.pawlowice.pl/zajecia/plastyka-dla-dzieci-i-mlodziezy/art-eqipa"
            target="_blank"
            rel="noopener noreferrer"
            className="gridCenter gok"
          >
            <GokIcon />
          </a> */}
          {/* <a href="" className="social facebookGok"></a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
