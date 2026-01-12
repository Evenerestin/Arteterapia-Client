import { IconArrowNarrowLeft } from "@tabler/icons-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import galleryData from "../assets/galleryData";
import Modal from "../components/modal/Modal";
import styles from "./css/Gallery.module.css";

const Gallery = ({ category }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const data =
    galleryData.find((object) => object.name === category)?.children || [];

  const handleClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  if (!Array.isArray(data) || data.length === 0)
    return (
      <div
        id="gallery"
        className={`${styles.nothingFound} flexColumn`}
        aria-label={`Galeria kategorii: ${category} - nic nie znaleziono`}
      >
        <h1>Nic nie znaleziono...</h1>
        <Link to="/tworczosc" aria-label="Powrót do menu twórczości">
          <button className="flex" aria-label="Powrót do menu twórczości">
            <IconArrowNarrowLeft size={14} />
            Menu twórczości
          </button>
        </Link>
      </div>
    );
  else
    return (
      <div id="gallery" aria-label={`Galeria kategorii: ${category}`}>
        <div className={styles.container}>
          {data.map((object, index) => (
            <div
              key={object.id}
              className={`${styles.objectContainer} gridCenter`}
            >
              <div className={`${styles.categoryObject} flexColumn`}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                  aria-label={`Obrazek nr ${index + 1}: ${object.title}`}
                >
                  <img
                    src={`/images/portfolio/${category}/${object.id}.jpg`}
                    alt={`Praca nr ${index + 1}: ${object.title}`}
                    aria-label={`Otwórz powiększenie pracy nr ${index + 1}: ${
                      object.title
                    }`}
                    loading="lazy"
                    tabIndex={0}
                    onClick={() => handleClick(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        handleClick(index);
                    }}
                  />
                </div>
                <div className={styles.data}>
                  <h3>
                    <span>&#10077;</span>
                    {object.title}
                    <span>&#10078;</span>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        {open && (
          <Modal
            data={data}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            closeModal={() => setOpen(false)}
            category={category}
          />
        )}
      </div>
    );
};

Gallery.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Gallery;
