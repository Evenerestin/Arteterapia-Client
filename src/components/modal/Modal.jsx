import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconCircleX,
} from "@tabler/icons-react";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({
  data,
  currentIndex,
  setCurrentIndex,
  closeModal,
  category,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current) return;
    const node = modalRef.current;
    const focusableSelectors = [
      "button",
      "[href]",
      "input",
      "select",
      "textarea",
      '[tabindex]:not([tabindex="-1"])',
    ];
    const focusableEls = node.querySelectorAll(focusableSelectors.join(","));
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    function handleKeyDown(e) {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
      if (e.key === "Escape") {
        closeModal();
      }
    }
    node.addEventListener("keydown", handleKeyDown);
    firstEl && firstEl.focus();
    return () => {
      node.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

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

  const imgSrc = `/images/portfolio/${category}/${data[currentIndex].id}.jpg`;

  return (
    <div
      className={styles.modal}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={data[currentIndex]?.title || "Okno modalne"}
      tabIndex="-1"
      ref={modalRef}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        <button
          className={styles.prev}
          onClick={prevImage}
          aria-label="Poprzedni obraz"
        >
          <IconArrowNarrowLeft size={32} stroke={1.5} />
        </button>
        <div className={styles.imageWrapper}>
          <img
            src={imgSrc}
            alt={data[currentIndex].title}
            onLoad={() => setIsImageLoaded(true)}
            style={{ display: isImageLoaded ? "block" : "none" }}
          />
          <button
            className={styles.close}
            onClick={closeModal}
            aria-label="Zamknij okno"
          >
            <IconCircleX size={32} stroke={1} />
          </button>
        </div>
        <button
          className={styles.next}
          onClick={nextImage}
          aria-label="Następny obraz"
        >
          <IconArrowNarrowRight size={32} stroke={1.5} />
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default Modal;
