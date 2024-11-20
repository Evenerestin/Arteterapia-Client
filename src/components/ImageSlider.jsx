import { useState } from "react";

const ImageSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const images = [
    "didacticsPhoto1.jpg",
    "didacticsPhoto2.jpg",
    "didacticsPhoto3.jpg",
    "didacticsPhoto4.jpg",
  ];

  const visibleImages = images
    .slice(startIndex, startIndex + visibleCount)
    .concat(
      images.slice(0, Math.max(0, startIndex + visibleCount - images.length))
    );

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="gallery flex">
      <button onClick={handlePrev} className="controls" id="left">
        <span>&lt;</span>
      </button>
      {visibleImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery item ${index}`}
          className="gallery-image"
        />
      ))}
      <button onClick={handleNext} className="controls" id="right">
        <span>&gt;</span>
      </button>
      {/* <img src="didacticsPhoto1.jpg" alt="" />
      <img src="didacticsPhoto2.jpg" alt="" />
      <img src="didacticsPhoto3.jpg" alt="" />
      <img src="didacticsPhoto4.jpg" alt="" /> */}
    </div>
  );
};

export default ImageSlider;
