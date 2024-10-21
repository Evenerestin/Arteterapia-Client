import PropTypes from "prop-types";
import mockData from "../assets/mockData";
import "../css/CategoryGallery.css";

const CategoryGallery = ({ category }) => {
  return (
    <div id="categoryGallery">
      <div className="container grid">
        {/* <div className="container flex"> */}
        {Array.isArray(mockData) && mockData.length > 0 ? (
          mockData.map((object) => (
            <div key={object.id} className="categoryObject flex">
              {/* <p>{object.title}</p> */}
              <img src={object.src} alt="" loading="lazy" />
            </div>
          ))
        ) : (
          <p>No data found for the category {category}.</p>
        )}
      </div>
    </div>
  );
};

CategoryGallery.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryGallery;
