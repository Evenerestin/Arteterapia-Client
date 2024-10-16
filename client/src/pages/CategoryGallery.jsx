// import axios from "axios";
// import { useEffect, useState } from "react";
// import { BASE_URL } from "../config";
// import mockData from "../assets/mockData";
import PropTypes from "prop-types";
import "../css/CategoryGallery.css";
import useFetch from "../hooks/useFetch";
import useOrder from "../hooks/useOrder";
import Error from "./Error";

const CategoryGallery = ({ category }) => {
  // const mockObjects =
  //   mockData.find((item) => item.category === category)?.children || [];
  // console.log(mockObjects);

  const { objects, order, loading, error } = useFetch(category); // Use the custom hook to fetch data
  // const orderedObjects = useOrder(objects, order); // Pass objects and order to useOrder to get ordered objects
  const orderedObjects = useOrder(objects, order); // Pass objects and order to useOrder to get ordered objects

  // console.log(objects)
  console.log(orderedObjects);
  console.log(order);

  if (loading) {
    // return <div>Loading...</div>;
    return (
      <div className="gricCenter">
        <h1>Trwa ładowanie...</h1>
        <p>proszę czekać</p>
      </div>
    );
  }

  if (error) {
    console.log(error);
    // return <div>Error: {error}</div>;
    return <Error />;
  }

  return (
    <div id="categoryGallery">
      <div className="container grid">
      {/* <div className="container flex"> */}
        {Array.isArray(orderedObjects) && orderedObjects.length > 0 ? ( // Check if orderedObjects is an array and has elements
          orderedObjects.map((object) => (
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
