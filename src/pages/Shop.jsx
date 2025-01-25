import { useGSAP } from "@gsap/react";
import { useMemo } from "react";
import galleryData from "../assets/galleryData";
import { fadeFromBottom, fadeFromSides } from "../components/revealAnimations";
import ShopHeading from "../components/ShopHeading";
import { artCategories } from "../config";
import "../css/Shop.css";

const Shop = () => {
  const availableItems = useMemo(() => {
    return galleryData
      .map((category) => {
        const categoryData = artCategories.find(
          (item) => item.category === category.category
        );
        const label = categoryData ? categoryData.label : "Unknown Category";
        const pricedItems = category.children.filter(
          (object) => object?.price || object?.price === 0
        );
        if (pricedItems.length > 0) {
          return {
            label,
            pricedItems,
          };
        }
        return null;
      })
      .filter(Boolean);
  }, []);

  useGSAP(() => {
    fadeFromBottom("header");
    fadeFromSides(".objectContainer", ".photo", ".info");
  });

  if (!Array.isArray(availableItems) || availableItems.length <= 0) {
    return (
      <div id="shop" className="emptyStock">
        <header>
          <ShopHeading />
          <h3 className="emptyHeading">
            Niestety, nie ma aktualnie żadnych dostępnych prac.
          </h3>
          <div className="background">
            <img src="/shopBackground.jpg" alt="" />
            <div className="overlay"></div>
          </div>
        </header>
      </div>
    );
  }

  return (
    <div id="shop">
      <header className="flexColumn">
        <ShopHeading />
        <div className="controls">
          {availableItems.map((category, index) => (
            <a key={index} href={`#${category.label}`}>
              <button className="flex">
                <span>&#10095;</span>
                {category.label}
              </button>
            </a>
          ))}
        </div>
        <div className="background">
          <img src="/shopBackground.jpg" alt="" />
          <div className="overlay"></div>
        </div>
      </header>
      <div className="gallery flexColumn">
        {availableItems.map((category, index) => (
          <div
            id={category.label}
            key={index}
            className="categoryContainer flexColumn"
          >
            {category.pricedItems.map((object) =>
              object.price !== undefined && object.price !== null ? (
                <div
                  key={object.id}
                  className={`objectContainer ${
                    object.price === 0 ? `sold` : ``
                  } flex`}
                >
                  {object.price === 0 && <h1 className="sold">Sprzedane</h1>}
                  <img
                    className="photo"
                    loading="lazy"
                    src={object.src}
                    alt={object.title}
                  />
                  <div className="info">
                    <h1 className="flex">
                      <span>&#10077;</span>
                      {object.title}
                      <span>&#10078;</span>
                    </h1>
                    <p>Metoda: {object?.method}</p>
                    {object.sizeX && object.sizeY && (
                      <p>
                        {object.sizeX} × {object.sizeY}
                      </p>
                    )}
                  </div>
                </div>
              ) : null
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
