import { useState } from "react";
import Typewriter from "../components/Typewriter";
import "../css/Home.css";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = () => {
    setLoaded(true);
  };
  return (
    <div id="home">
      <header>
        <picture>
          <source
            srcSet="/homeBackgroundLowRes.webp"
            type="image/webp"
            className={`background placeholder ${loaded ? "hidden" : ""}`}
          />
          <img
            src="/homeBackgroundLowRes.jpg"
            alt="Tło"
            className={`background placeholder ${loaded ? "hidden" : ""}`}
          />
        </picture>
        <picture>
          <source
            srcSet="/homeBackgroundHighRes.webp"
            type="image/webp"
            className={`background ${loaded ? "" : "hidden"}`}
            onLoad={handleLoaded}
          />
          <img
            src="/homeBackgroundHighRes.jpg"
            alt="Tło"
            className={`background ${loaded ? "" : "hidden"}`}
            onLoad={handleLoaded}
          />
        </picture>
        <div className="siteTitle">
          <Typewriter class="typewriter" word="Arteterapia" delay={5000} />
          <h3>Dla kreatywnych nie ma granic</h3>
        </div>
      </header>
    </div>
  );
};

export default Home;
