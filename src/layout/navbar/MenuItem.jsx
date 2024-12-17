import PropTypes from "prop-types";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./css/MenuItem.css";

const MenuItem = ({ menuItem }) => {
  const location = useLocation();
  return (
    <li className={`menuItem ${location === menuItem.path ? "" : "active"}`}>
      {menuItem.submenu ? (
        <div className="flexColumn">
          <NavLink to={menuItem.path}>
            <button>{menuItem.label}</button>
          </NavLink>
          <div className="dropdownMenu flexColumn">
            {menuItem.submenu.map((submenuItem, index) => (
              <Link
                key={index}
                to={`${menuItem.path}/${submenuItem.path}`}
                className="dropdownItem"
              >
                <button>{submenuItem.label}</button>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <NavLink to={menuItem.path}>
          <button>{menuItem.label}</button>
        </NavLink>
      )}
    </li>
  );
};

MenuItem.propTypes = {
  menuItem: PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string,
    submenu: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default MenuItem;
