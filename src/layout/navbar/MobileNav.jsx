import {
  IconArrowForward,
  IconArrowNarrowRight,
  IconBrandInstagram,
} from "@tabler/icons-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
      {isMobileOpen && (
        <video
          src="/videos/mobile-background.mp4"
          autoPlay
          muted
          preload="none"
          playsInline
          className="backgroundVideo"
          aria-hidden="true"
        />
      )}
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
      <div className="navigation flexColumn">
        <ul className="flexColumn menuItems">
          <li aria-label="Strona główna">
            <Link to="/" className="menuLogo" onClick={closeMobileMenu}>
              <Logo />
            </Link>
          </li>
          {menuData.map((menuItem, index) => (
            <li
              className="menuItem"
              data-expandable
              data-expanded={isDropdownOpen[index]}
              key={index}
            >
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
                      aria-label={`Podmenu ${menuItem.label}`}
                      aria-expanded={isDropdownOpen[index]}
                    >
                      <span className="flex">
                        <IconArrowNarrowRight
                          stroke={1}
                          aria-hidden="true"
                          className="dropdownIcon"
                        />
                        {menuItem.label}
                      </span>
                    </button>
                  </NavLink>
                  <div
                    className={`dropdownMenu flexColumn ${
                      isDropdownOpen[index] ? "open" : ""
                    }`}
                  >
                    <ul>
                      {menuItem.submenu.map((submenuItem, index) => (
                        <li key={index}>
                          <Link
                            to={`${menuItem.path}/${submenuItem.path}`}
                            className="dropdownItem"
                          >
                            <button
                              onClick={() => {
                                closeMobileMenu();
                              }}
                              aria-label={submenuItem.label}
                            >
                              {submenuItem.label}
                            </button>
                          </Link>
                        </li>
                      ))}
                    </ul>
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
            aria-label="Instagram"
          >
            <span className="flex">
              <IconBrandInstagram stroke={1.4} aria-hidden="true" />
              Instagram
              <IconArrowForward stroke={1.4} aria-hidden="true" />
            </span>
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
