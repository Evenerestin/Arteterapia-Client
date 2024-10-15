// import { Link, NavLink, Outlet, useMatch } from "react-router-dom";
import { Link, NavLink, Outlet, useMatch } from "react-router-dom";
import {
  CeramicIcon,
  DashboardIcon,
  HomeIcon,
  PaintingIcon,
  SculptureIcon,
} from "../assets/DashboardIcons";
import Logo from "../assets/Logo";
import { ArtCategories } from "../config";
import "../css/Dashboard.css";
import "../css/DashboardPanel.css";
import DashboardPanel from "../components/DashboardPanel";

const Dashboard = () => {
  const isRootPath = useMatch("/panel");
  //   const DashboardIcon = DashboardIcon;
  //   const HomeIcon = HomeIcon;
  const iconMapping = {
    ceramic: CeramicIcon,
    painting: PaintingIcon,
    sculpture: SculptureIcon,
  };

  return (
    <div id="dashboard">
      <nav className={`flexColumn ${isRootPath ? "" : "collapsed"}`}>
        <div className="logoContainer">
          <div className="vertical flex">
            <Logo />
          </div>
          <div className="horizontal flexColumn">
            <Logo />
            <h1>Arteterapia</h1>
          </div>
        </div>
        <div className="dashboardNavigation flexColumn">
          <div className="upperNavigation">
            <NavLink to="/panel" className="dashboardLink">
              <button>
                <DashboardIcon />
                <span>Panel</span>
              </button>
            </NavLink>
            <div className="divider"></div>
            {Array.isArray(ArtCategories) && ArtCategories.length > 0 ? (
              ArtCategories.map((object, id) => {
                const IconComponent = iconMapping[object.category];
                return (
                  <NavLink
                    key={id}
                    to={object.path}
                    className="dashboardLink categoryLink"
                  >
                    <button>
                      {IconComponent && <IconComponent />}
                      <span>{object.label}</span>
                    </button>
                  </NavLink>
                );
              })
            ) : (
              <p>No categories available</p>
            )}
          </div>
          <div className="lowerNavigation">
            <div className="divider"></div>
            <Link to="/" className="dashboardLink homeLink">
              <button>
                <HomeIcon />
                <span>Powrót</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
      {/* <nav className={`flexColumn ${isRootPath ? "" : "collapsed"}`}>
        <div>
          <div className="vertical flex">
            <Logo />
          </div>
          <div className="horizontal flexColumn">
            <Logo />
            <h1>Arteterapia</h1>
          </div>
        </div>
        <div className="dashboardNavigation flexColumn">
          <NavLink to="/panel" className="dashboardLink">
            <button>
              <DashboardIcon />
              <HomeIcon />
              {isRootPath ? "Panel" : ""}
              <span>Panel</span>
            </button>
          </NavLink>

          {Array.isArray(ArtCategories) && ArtCategories.length > 0 ? (
            ArtCategories.map((object, id) => {
              const IconComponent = iconMapping[object.category];
              return (
                <NavLink
                  key={id}
                  to={object.path}
                  className="dashboardLink categoryLink"
                >
                  <button>
                    {IconComponent && <IconComponent />}
                    {isRootPath ? `${object.label}` : ""}

                    <span>{object.label}</span>
                  </button>
                </NavLink>
              );
            })
          ) : (
            <p>No categories available</p>
          )}
        </div>
        <Link to="/" className="dashboardLink">
          <button>
            <HomeIcon />
            <span>Strona główna</span>
          </button>
        </Link>
      </nav> */}

      {isRootPath ? (
        <DashboardPanel className="outlet" />
        // <div id="panel" className="outlet">
        //   <header>
        //     <h1>Panel</h1>
        //   </header>
        //   <div className="statistics"></div>
        // </div>
      ) : (
        <Outlet className="outlet" />
      )}
    </div>
  );
};

export default Dashboard;
