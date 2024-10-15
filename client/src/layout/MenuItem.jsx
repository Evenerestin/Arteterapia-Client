import PropTypes from "prop-types";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../css/MenuItem.css";

const MenuItem = ({ itemData }) => {
  const location = useLocation();
  return (
    <li className={`menuItem ${(location === itemData.url) ? "" : "active" }`} >
      {itemData.submenu ? (
        <div className="flexColumn">
          <NavLink to={itemData.url}>
            <button>{itemData.title}</button>
          </NavLink>
          <div className="dropdownMenu flexColumn">
            {itemData.submenu.map((submenuItem, index) => (
              <Link key={index} to={submenuItem.url} className="dropdownItem">
                <button>{submenuItem.title}</button>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <NavLink to={itemData.url}>
          <button>{itemData.title}</button>
        </NavLink>
      )}
    </li>
  );
};

MenuItem.propTypes = {
  itemData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    submenu: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default MenuItem;
