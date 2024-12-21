import { useGSAP } from "@gsap/react";
import { fadeFromBottom, fadeFromSides } from "../components/revealAnimations";
import ShopHeading from "../components/ShopHeading";
import "../css/Shop.css";
import usePriced from "../hooks/usePriced";

const Shop = () => {
  const availableItems = usePriced();

  useGSAP(() => {
    fadeFromBottom("header");
    // fadeFromBottom(".heading");
    fadeFromSides(".objectContainer", ".photo", ".info");
  });

  if (!Array.isArray(availableItems) || availableItems.length <= 0) {
    return (
      <div id="shop">
        <header>
          <ShopHeading />
          <h2>Niestety nie ma aktualnie żadnych prac dostępnych do kupna :(</h2>
          <div className="background"></div>
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
            {category.pricedItems.map((object) => (
              <div key={object.id} className="objectContainer flex">
                <img className="photo" src={object.src} alt={object.title} />
                <div className="info">
                  {/* <h1>&#10077;{object.title}&#10078;</h1> */}
                  <h1>
                    <span>&#10077;</span>
                    {object.title}
                    <span>&#10078;</span>
                  </h1>
                  <p>{object.method}</p>
                  {object.sizeX && object.sizeY && (
                    <p>
                      {object.sizeX} × {object.sizeY}
                    </p>
                  )}
                  <p>Price: {object.price}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
