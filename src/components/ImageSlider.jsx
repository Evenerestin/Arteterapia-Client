const ImageSlider = () => {
  return (
    <div className="gallery flex">
      <button className="controls" id="left">
        <span>&lt;</span>
      </button>
      <button className="controls" id="right">
        <span>&gt;</span>
      </button>
      <img src="didacticsPhoto1.jpg" alt="" />
      <img src="didacticsPhoto2.jpg" alt="" />
      <img src="didacticsPhoto3.jpg" alt="" />
      <img src="didacticsPhoto4.jpg" alt="" />
    </div>
  );
};

export default ImageSlider;
