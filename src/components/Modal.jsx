import PropTypes from "prop-types";
import { useState } from "react";
import "../css/Modal.css";

const Modal = ({ data, currentIndex, setCurrentIndex, closeModal }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    setIsImageLoaded(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    setIsImageLoaded(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal();
    }
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="prev" onClick={prevImage}>
          <span>&lt;</span>
        </button>
        <button className="close" onClick={closeModal}>
          <span>&times;</span>
        </button>
        <img
          src={data[currentIndex].src}
          alt={data[currentIndex].title}
          onLoad={() => setIsImageLoaded(true)}
          style={{ display: isImageLoaded ? "block" : "none" }}
        />
        <button className="next" onClick={nextImage}>
          <span>&gt;</span>
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
