import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import { menuData } from "../../config";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="flex">
      <div className="copyright flex">
        <Logo />
        <div className="flexColumn">
          <p>©2024 Arteterapia</p>
          <Link to="atrybucje">
            <button>Atrybucje</button>
          </Link>
        </div>
      </div>
      <div className="footerNavigation flex">
        {menuData.map((menuItem, id) =>
          menuItem.submenu ? (
            menuItem.submenu.map((submenuItem, subId) => (
              <Link key={subId} to={`${menuItem.path}/${submenuItem.path}`}>
                <button>{submenuItem.label}</button>
              </Link>
            ))
          ) : (
            <Link key={id} to={menuItem.path}>
              <button>{menuItem.label}</button>
            </Link>
          )
        )}
      </div>
    </footer>
  );
};

export default Footer;
