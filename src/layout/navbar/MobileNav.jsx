import PropTypes from "prop-types";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { InstagramIcon } from "../../assets/ContactIcons";
import Logo from "../../assets/Logo";
import { menuData } from "../../config";
import "./MobileNav.css";

const MobileNav = ({ isScrolled, isHomePage }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(
    menuData.map(() => false)
  );
  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };
  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    closeDropdownMenu();
  };

  const toggleDropdown = (index) => {
    setIsDropdownOpen((prev) => {
      const newDropdownState = [...prev];
      newDropdownState[index] = !newDropdownState[index];
      return newDropdownState;
    });
  };

  const closeDropdownMenu = () => {
    setIsDropdownOpen(menuData.map(() => false));
  };

  return (
    <nav
      className={`flex ${isHomePage ? `homePath` : ``} ${
        isScrolled ? `scrolled` : ``
      } ${isMobileOpen ? `open` : ``} `}
      id="mobile"
    >
      <Link to="/" className="navLogo">
        <Logo />
      </Link>
      <div className="hamburgerIcon">
        <button onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="navigation flex">
        <ul className="flexColumn menuItems">
          {menuData.map((menuItem, index) => (
            <li className="menuItem" key={index}>
              {menuItem.submenu ? (
                <div className="flexColumn">
                  <NavLink to={menuItem.path}>
                    <button
                      onClick={(e) => {
                        if (!isDropdownOpen[index]) {
                          e.preventDefault();
                          toggleDropdown(index);
                        } else {
                          closeDropdownMenu();
                        }
                      }}
                      className={`flex ${isDropdownOpen[index] ? `open` : ``}`}
                    >
                      {menuItem.label} <span className="dropdownArrow"></span>
                    </button>
                  </NavLink>
                  <div
                    className={`dropdownMenu flexColumn ${
                      isDropdownOpen[index] ? "open" : ""
                    }`}
                  >
                    {menuItem.submenu.map((submenuItem, index) => (
                      <Link
                        key={index}
                        to={`${menuItem.path}/${submenuItem.path}`}
                        className="dropdownItem"
                      >
                        <button
                          onClick={() => {
                            closeMobileMenu();
                          }}
                        >
                          {submenuItem.label}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink to={menuItem.path}>
                  <button
                    onClick={() => {
                      closeMobileMenu();
                    }}
                  >
                    {menuItem.label}
                  </button>
                </NavLink>
              )}
            </li>
          ))}
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

MobileNav.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
  isHomePage: PropTypes.bool.isRequired,
};

export default MobileNav;
