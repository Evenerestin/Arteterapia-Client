import { Link, Outlet, useLocation } from "react-router-dom";
import MenuData from "../assets/MenuData";
import "../css/Art.css";

const Art = () => {
  const location = useLocation();
  const tworczoscItem = MenuData.find((item) => item.title === "Twórczość");

  const splitTitle = (title) => {
    const middleIndex = Math.floor(title.length / 2);
    const firstPart = title.slice(0, middleIndex);
    const secondPart = title.slice(middleIndex);
    return [firstPart, secondPart];
  };

  return (
    <>
      {location.pathname === "/tworczosc" ? (
        <div id="art" className="flex">
          <div className="subpageNavigation flex">
            {tworczoscItem.submenu.map((submenuItem, index) => {
              const [firstPart, secondPart] = splitTitle(submenuItem.title);
              return (
                <div key={index} className="wrapper">
                  <div className="imageWrapper">
                    <Link to={submenuItem.url}>
                      <img src={submenuItem.cover} alt="subpage cover" />
                    </Link>
                  </div>
                  <div className="headerWrapper">
                    <h1>
                      <span>{firstPart}</span>
                      <br />
                      <span>{secondPart}</span>
                    </h1>
                  </div>
                  <div className="textWrapper">
                    <h2>{submenuItem.title}</h2>
                    <p>zobacz prace →</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Art;
