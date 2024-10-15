import PropTypes from "prop-types";
import { DragDropContext } from "react-beautiful-dnd";
import useFetch from "../hooks/useFetch";
import useOrder from "../hooks/useOrder";

const GalleryLayout = ({ category }) => {
  const { objects, order, loading, error } = useFetch(category);
  const orderedObjects = useOrder(objects, order);
  return loading ? (
    <div>Loading gallery...</div>
  ) : error ? (
    <div>Error: {error}</div>
  ) : Array.isArray(orderedObjects) && orderedObjects.length > 0 ? (
    <div className="gallery">
      {orderedObjects.map((object) => (
        <img
          key={object.id}
          src={object.src}
          alt={`Painting id:${object.id}`}
        />
      ))}
    </div>
  ) : (
    <p>Coś poszło nie tak :(</p>
  );
};

GalleryLayout.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GalleryLayout;
