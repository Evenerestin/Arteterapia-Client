import { Link } from "react-router-dom";
import "../css/ErrorPage.css";

const NotFound = () => {
  return (
    <div id="notFound" className="gridCenter">
      <div className="container flexColumn">
          <div>
          <h1>500 :(</h1>
          <h3>Nieoczekiwany błąd serwera</h3>
          </div>
          <Link>
            <button>Strona główna</button>
          </Link>
      </div>
    </div>
  );
};

export default NotFound;
