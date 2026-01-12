import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import styles from "./css/NotFound.module.css";

const NotFound = () => {
  return (
    <div id="notFound" aria-label="Błąd 404 - nie znaleziono strony">
      <header className="gridCenter">
        <div className={styles.background}>
          <img src="/images/notfound-background.jpg" aria-hidden="true" />
        </div>
        <div className={`${styles.content} flexColumn`}>
          <div className={styles.title}>
            <h1>404 :(</h1>
            <h2>Nie znaleziono strony</h2>
          </div>
          <Link to="/" aria-label="Strona główna">
            <button className="flex">
              <IconArrowNarrowLeft size={14} />
              Strona główna
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default NotFound;
