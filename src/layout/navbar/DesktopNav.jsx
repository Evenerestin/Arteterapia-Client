import { IconBrandInstagram } from "@tabler/icons-react";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo";
import { menuData } from "../../config";
import "./DesktopNav.css";

const DesktopNav = ({ isScrolled, isHomePage }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef([]);

  useEffect(() => {
    const handleWindowBlur = () => {
      setOpenDropdown(null);
    };
    window.addEventListener("blur", handleWindowBlur);
    return () => {
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, []);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setTimeout(() => {
      if (dropdownRefs.current[index]) {
        dropdownRefs.current[index].focus();
      }
    }, 0);
  };

  const handleDropdownKeyDown = (e, subIndex, submenuLength) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.min(subIndex + 1, submenuLength - 1);
      dropdownRefs.current[next]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = Math.max(subIndex - 1, 0);
      dropdownRefs.current[prev]?.focus();
    } else if (e.key === "Escape") {
      setOpenDropdown(null);
    }
  };

  return (
    <nav
      className={`flex ${isHomePage ? "homePath" : ""} ${
        isScrolled ? "scrolled" : ""
      }`}
      id="desktop"
    >
      <Link to="/" className="navLogo" aria-label="navLogo">
        <button>
          <Logo />
        </button>
      </Link>
      <div className="navigation flex">
        <ul className="flex menuItems">
          {menuData.map((menuItem, index) => {
            return (
              <li className="menuItem" key={index}>
                {menuItem.submenu ? (
                  <>
                    <NavLink to={menuItem.path}>
                      <button
                        aria-label={menuItem.label}
                        aria-haspopup="true"
                        aria-expanded={openDropdown === index}
                        aria-controls={`dropdown-menu-${index}`}
                        onClick={() => handleDropdownToggle(index)}
                        onFocus={() => handleDropdownToggle(index)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleDropdownToggle(index);
                          }
                        }}
                      >
                        {menuItem.label}
                      </button>
                    </NavLink>
                    <div
                      className={`dropdownMenu flexColumn${
                        openDropdown === index ? " open" : ""
                      }`}
                      id={`dropdown-menu-${index}`}
                      role="menu"
                      aria-hidden={openDropdown !== index}
                    >
                      <ul>
                        {menuItem.submenu.map((submenuItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="dropdownItem"
                            role="menuitem"
                            tabIndex={0}
                            ref={(el) => (dropdownRefs.current[subIndex] = el)}
                            onKeyDown={(e) =>
                              handleDropdownKeyDown(
                                e,
                                subIndex,
                                menuItem.submenu.length
                              )
                            }
                          >
                            <Link to={`${menuItem.path}/${submenuItem.path}`}>
                              <button aria-label={submenuItem.label}>
                                {submenuItem.label}
                              </button>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <NavLink to={menuItem.path}>
                    <button
                      aria-label={menuItem.label}
                      onFocus={() => setOpenDropdown(null)}
                    >
                      {menuItem.label}
                    </button>
                  </NavLink>
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
            <button aria-label="Instagram">
              <IconBrandInstagram stroke={1.4} aria-hidden="true" />
            </button>
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
