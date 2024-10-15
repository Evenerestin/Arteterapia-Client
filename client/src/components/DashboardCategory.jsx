import moment from "moment";
import "moment/locale/pl";
import PropTypes from "prop-types";
import Clock from "react-live-clock";
import { ArtCategories } from "../config";
import "../css/DashboardCategory.css";
import useFetch from "../hooks/useFetch";
import useOrder from "../hooks/useOrder";
moment.locale("pl");

const CategoryManagament = ({ category }) => {
  const { objects, order, loading, error } = useFetch(category);
  const orderedObjects = useOrder(objects, order);

  console.log(orderedObjects);
  // const [updatedObjects, setUpdatedObjects] = useState(orderedObjects);

  return (
    <div id="categoryManagement">
      <header className="segment flex">
        <h1>
          {ArtCategories.find(
            (artCategory) => artCategory.category === category
          )?.label || "Category not found"}
        </h1>
        <h2>
          <Clock
            format={"dddd, HH:mm"}
            ticking={true}
            timezone={"Etc/GMT-2"}
            className="clock"
          />
        </h2>
      </header>
      <div className="content flex">
        <div className="container flexColumn">
          <div className="flex segment">
            <p>Suma prac: {objects?.length || 0}</p>
          </div>
          <div className="form segment"></div>
        </div>
        <div className="galleryContainer segment flexColumn">
          {loading ? (
            <div>Loading gallery...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : Array.isArray(orderedObjects) && orderedObjects.length > 0 ? (
            <div className="gallery flex">
              {orderedObjects.map((object, index) => (
                <img
                  key={index}
                  src={object.src}
                  alt={object.title}
                />
              ))}
            </div>
          ) : (
            <p>Coś poszło nie tak :(</p>
          )}
          {/* <div className="galleryConfirmation flex">
            <button>cancel</button>
            <button>save</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

CategoryManagament.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryManagament;
