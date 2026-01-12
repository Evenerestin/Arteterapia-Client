import { Link } from "react-router-dom";
import styles from "./css/Attributions.module.css";

const attributions = [
  {
    name: "Tabler Icons",
    url: "https://tabler-icons.io/",
    license: "Personal & Commercial License",
    description: "Wykorzystane na stronie ikony.",
  },
  {
    name: "Unsplash",
    url: "https://unsplash.com/",
    license: "Unsplash License",
    description: "Tło na stronie O-mnie.",
  },
  {
    name: "Vecteezy",
    url: "https://www.vecteezy.com/free-videos/background",
    license: "Free License",
    description: "Tło mobilnego paska nawigacji.",
  },
];

import { IconExternalLink, IconLink } from "@tabler/icons-react";

function Attributions() {
  return (
    <div id="attributions" aria-label="Atrybucje i prawa autorskie">
      <header className={styles.header}>
        <div className={styles.background}>
          <picture>
            <source
              srcSet="/images/attributions/background.avif"
              type="image/avif"
            />
            <source
              srcSet="/images/attributions/background.webp"
              type="image/webp"
            />
            <img
              src="/images/attributions/background.jpg"
              alt="Tło atrybucji"
              loading="lazy"
            />
          </picture>
          <div className={styles.overlay}></div>
        </div>
        <h1 className={styles.title}>Atrybucje & prawa autorskie</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.cardsGrid}>
          {attributions.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon} aria-hidden="true">
                  <IconLink size={32} />
                </span>
                <h2>{item.name}</h2>
              </div>
              <Link
                className={styles.link}
                to={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.url}{" "}
                <IconExternalLink
                  size={18}
                  style={{ verticalAlign: "middle" }}
                />
              </Link>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.license}>
                <span>Licencja:</span> {item.license}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Attributions;
