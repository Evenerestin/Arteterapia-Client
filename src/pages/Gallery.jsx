import { useGSAP } from "@gsap/react";
import PropTypes from "prop-types";
import { useState } from "react";
import galleryData from "../assets/galleryData";
import Modal from "../components/Modal";
import { fadeFromBottom } from "../components/revealAnimations";
import "../css/Gallery.css";

const Gallery = ({ category }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const data =
    galleryData.find((object) => object.category === category)?.children || [];
  useGSAP(() => {
    fadeFromBottom(".objectContainer");
  });

  const handleClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div id="gallery">
      <div className="container grid">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((object, index) => (
            <div key={object.id} className="objectContainer gridCenter">
              <div className="categoryObject flexColumn">
                <img
                  src={object.src}
                  alt={`Praca nr ${index + 1}`}
                  onClick={() => handleClick(index)}
                />
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

      {open && (
        <Modal
          data={data}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          closeModal={() => setOpen(false)}
        />
      )}
    </div>
  );
};

Gallery.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Gallery;