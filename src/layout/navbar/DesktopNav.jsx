import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { InstagramIcon } from "../../assets/ContactIcons";
import Logo from "../../assets/Logo";
import menuData from "../../assets/menuData";
import "./DesktopNav.css";

const DesktopNav = ({ isScrolled, isHomePage }) => {
  return (
    <nav
      className={`flex ${isHomePage ? "homePath" : ""} ${
        isScrolled ? "scrolled" : ""
      }`}
      id="desktop"
    >
      <Link to="/" className="navLogo">
        <Logo />
      </Link>
      <div className="navigation flex">
        <ul className="flex menuItems">
          {menuData.map((menuItem, index) => {
            return (
              <li className="menuItem" key={index}>
                {menuItem.submenu ? (
                  <div className="flexColumn">
                    <NavLink to={menuItem.path}>{menuItem.label}</NavLink>
                    <div className="dropdownMenu flexColumn">
                      {menuItem.submenu.map((submenuItem, index) => (
                        <Link
                          key={index}
                          to={`${menuItem.path}/${submenuItem.path}`}
                          className="dropdownItem"
                        >
                          {submenuItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink to={menuItem.path}>{menuItem.label}</NavLink>
                )}
              </li>
            );
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
        </div>
      </div>
    </nav>
  );
};

DesktopNav.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
  isHomePage: PropTypes.bool.isRequired,
};

export default DesktopNav;
