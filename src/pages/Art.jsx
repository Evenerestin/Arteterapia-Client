import { useGSAP } from "@gsap/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { fadeFromTop } from "../components/revealAnimations";
import { artCategories } from "../config";
import styles from "./css/Art.module.css";

const Art = () => {
  const location = useLocation();

  const splitTitle = (title) => {
    const middleIndex = Math.floor(title.length / 2);
    const firstPart = title.slice(0, middleIndex);
    const secondPart = title.slice(middleIndex);
    return [firstPart, secondPart];
  };

  useGSAP(() => {
    fadeFromTop(".subpageNavigation");
  });

  return (
    <div id="art">
      {location.pathname === "/tworczosc" ? (
        <div className="flex">
          <div className={`${styles.subpageNavigation} flex`}>
            {artCategories.map((item, index) => {
              const [firstPart, secondPart] = splitTitle(item.label);
              return (
                <Link key={index} to={`/tworczosc/${item.path}`}>
                  <button aria-label={item.label}>
                    <div className={styles.wrapper} aria-hidden="true">
                      <div className={styles.imageWrapper}>
                        <picture>
                          <source
                            type="image/avif"
                            srcSet={`/images/portfolio/${item.category}-background.avif`}
                          />
                          <source
                            type="image/webp"
                            srcSet={`/images/portfolio/${item.category}-background.webp`}
                          />
                          <img
                            className={styles.image}
                            src={`/images/portfolio/${item.category}-background.jpg`}
                            alt="Okładka podstrony"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <div className={styles.headerWrapper}>
                        <h1>
                          <span>{firstPart}</span>
                          <br />
                          <span>{secondPart}</span>
                        </h1>
                      </div>
                      <div className={styles.textWrapper}>
                        <h2>{item.label}</h2>
                        <p>
                          zobacz prace <code>&#8594;</code>
                        </p>
                      </div>
                    </div>
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Art;
