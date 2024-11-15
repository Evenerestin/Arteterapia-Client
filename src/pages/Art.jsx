import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
// import MenuData from "../assets/MenuData";
import { ArtCategories } from "../config";
import "../css/Art.css";

const Art = () => {
  const location = useLocation();
  // const tworczoscItem = MenuData.find((item) => item.title === "Twórczość");

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
            {/* {tworczoscItem.submenu.map((submenuItem, index) => { */}
            {ArtCategories.map((item, index) => {
              const [firstPart, secondPart] = splitTitle(item.label);
              return (
                <Link key={index} to={`/tworczosc/${item.path}`}>
                  <div className="wrapper">
                    <div className="imageWrapper">
                      <img src={item.cover} alt="subpage cover" />
                    </div>
                    <div className="headerWrapper">
                      <h1>
                        <span>{firstPart}</span>
                        <br />
                        <span>{secondPart}</span>
                      </h1>
                    </div>
                    <div className="textWrapper">
                      <h2>{item.label}</h2>
                      <p>zobacz prace →</p>
                    </div>
                  </div>
                </Link>
                // <div key={index} className="wrapper">
                //   <div className="imageWrapper">
                //     <Link to={`tworczosc/${item.path}`}>
                //       <img src={item.cover} alt="subpage cover" />
                //     </Link>
                //   </div>
                //   <div className="headerWrapper">
                //     <h1>
                //       <span>{firstPart}</span>
                //       <br />
                //       <span>{secondPart}</span>
                //     </h1>
                //   </div>
                //   <div className="textWrapper">
                //     <h2>{item.label}</h2>
                //     <p>zobacz prace →</p>
                //   </div>
                // </div>
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
