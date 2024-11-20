import { useGSAP } from "@gsap/react";
import PropTypes from "prop-types";
import mockData from "../assets/mockData";
import { fadeFromBottom } from "../components/revealAnimations";
import "../css/Gallery.css";

const Gallery = ({ category }) => {
  // const data = mockData.find((object) => object.category === category);
  const data =
    mockData.find((object) => object.category === category)?.children || [];

  console.log(data);

  useGSAP(() => {
    fadeFromBottom(".objectContainer");
  });

  return (
    <div id="gallery">
      <div className="container grid">
        {/* <div className="container flex"> */}
        {Array.isArray(data) && data.length > 0 ? (
          data.map((object) => (
            <div key={object.id} className="objectContainer gridCenter">
              <div className="categoryObject flexColumn">
                {/* <p>{object.title}</p> */}
                <img src={object.src} alt="" loading="lazy" />
                <div className="data">
                  <h3>
                    <span>&#10077;</span>
                    {object.title}
                    <span>&#10078;</span>
                  </h3>
                  {/* <p>
                    {object.sizeX}&#215;{object.sizeY}
                  </p> */}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Nic nie znaleziono :(.</p>
        )}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Gallery;

// <div className="dataOverlay flexColumn">
//   <div>
//     <h1>{object.title}</h1>
//     <p>{object.method}</p>
//     <p>
//       {object.sizeX}&#215;{object.sizeY}
//     </p>
//   </div>
//   {object.price.length > 0 ? (
//    <div className="isForSale">
//      <h3>{object.price}</h3>
//      <button>Zapytaj o obraz</button>
//     </div>
//  ) : (
//    ""
//  )}
// </div>
