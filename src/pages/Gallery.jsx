import { useGSAP } from "@gsap/react";
import PropTypes from "prop-types";
import galleryData from "../assets/galleryData";
import { fadeFromBottom } from "../components/revealAnimations";
import "../css/Gallery.css";

const Gallery = ({ category }) => {
  const data =
    galleryData.find((object) => object.category === category)?.children || [];

  useGSAP(() => {
    fadeFromBottom(".objectContainer");
  });

  return (
    <div id="gallery">
      <div className="container grid">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((object) => (
            <div key={object.id} className="objectContainer gridCenter">
              <div className="categoryObject flexColumn">
                <img src={object.src} alt="" loading="lazy" />
                <div className="data">
                  <h3>
                    <span>&#10077;</span>
                    {object.title}
                    <span>&#10078;</span>
                  </h3>
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