import Typewriter from "../components/typewriter/Typewriter";
import styles from "./css/Home.module.css";

const Home = () => {
  return (
    <div id="home" aria-label="Strona główna">
      <header className={styles.header}>
        <picture loading="eager" decoding="async">
          <source
            type="image/avif"
            srcSet="
              /images/home-background.avif"
          />
          <source
            type="image/webp"
            srcSet="
              /images/home-background.webp"
          />
          <img
            src="/images/home-background.jpg"
            className={styles.background}
            aria-hidden="true"
          />
        </picture>
        <div className={styles.siteTitle}>
          <Typewriter
            class={styles.typewriter}
            word="Arteterapia"
            delay={5000}
          />
          <h2>Dla kreatywnych nie ma granic</h2>
        </div>
      </header>
    </div>
  );
};

export default Home;
