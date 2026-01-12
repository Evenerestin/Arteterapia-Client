import { useGSAP } from "@gsap/react";
import { useState } from "react";
import galleryData from "../assets/galleryData";
import { fadeFromRight } from "../components/revealAnimations";
import { artCategories } from "../config";
import styles from "./css/Shop.module.css";

const Shop = () => {
  useGSAP(() => {
    fadeFromRight(".heading");
  });

  const [tab, setTab] = useState(
    galleryData.length > 0 ? galleryData[0].name : null
  );

  const activeCategory = galleryData.find((category) => category.name === tab);
  const forSaleItems =
    activeCategory?.children?.filter((item) => item.forSale) || [];

  return (
    <div id="shop" aria-label="Sklep z dziełami sztuki">
      <header className={`${styles.header} flexColumn`}>
        <div className={styles.content}>
          <h1>Obrazy pełne natury, faktury i fikcji</h1>
          <h2>Poznaj moje podejście do sztuki...</h2>
          <div>
            <p>
              Tworzenie obrazów to dla mnie nie tylko sposób na wyrażanie
              siebie, ale również na uchwycenie złożoności natury oraz jej
              harmonii z elementami fikcyjnymi.
            </p>
            <p>
              Moją specjalnością są prace, które łączą fakturę z bogatymi
              detalami przyrody, a także surrealistyczne elementy, które
              pozwalają na odrobinę fantazji.
            </p>
          </div>
        </div>
        <div className={styles.background}>
          <picture>
            <source srcSet="/images/shop/background.avif" type="image/avif" />
            <source srcSet="/images/shop/background.webp" type="image/webp" />
            <img
              src="/images/shop/background.jpg"
              aria-hidden="true"
              loading="lazy"
            />
          </picture>
          <div className={styles.overlay}></div>
        </div>
      </header>
      <section
        className={`${styles.gallery} flexColumn`}
        aria-label="Obrazy na zamówienie"
      >
        <div className={`${styles.heading} flexColumn`}>
          <h3>Obrazy na zamówienie</h3>
          <div>
            <p>
              Oferuję również tworzenie obrazów na zamówienie, w pełni
              dostosowanych do Twoich potrzeb i wizji. Jeśli szukasz unikalnego
              dzieła sztuki, które odzwierciedla Twoje ulubione motywy natury,
              bogate tekstury lub fikcyjne krajobrazy, z przyjemnością stworzę
              coś specjalnego dla Ciebie.
            </p>
            <p>
              Oprócz prac tworzonych na indywidualne zamówienie, w moim
              portfolio dostępna jest również kolekcja gotowych dzieł na
              sprzedaż. Znajdziesz wśród nich unikalne obrazy, które czekają, by
              znaleźć swój nowy dom. Zapraszam do zapoznania się z galerią – być
              może to właśnie tam odkryjesz dzieło, które przemówi wprost do
              Twojego serca.
            </p>
          </div>
        </div>
        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Kategorie dzieł"
        >
          <div className="flex">
            {galleryData.map((category, index) => (
              <button
                key={index}
                className={`${styles.tab} ${
                  tab === category.name ? styles.active : ""
                }`}
                role="tab"
                aria-selected={tab === category.name}
                aria-controls={`panel-${category.name}`}
                id={`tab-${category.name}`}
                tabIndex={tab === category.name ? 0 : -1}
                onClick={() => setTab(category.name)}
                aria-label={`Pokaż kategorię: ${
                  artCategories.find((item) => item.category === category.name)
                    ?.label || category.name
                }`}
              >
                {artCategories.find((item) => item.category === category.name)
                  ?.label || category.name}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.container}>
          <article
            id={`panel-${tab}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab}`}
            tabIndex={0}
          >
            {forSaleItems.length > 0 ? (
              forSaleItems.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.card} flex`}
                  aria-label={`Dzieło: ${item.title}${
                    item.sold ? " (sprzedane)" : ""
                  }`}
                >
                  {item.sold && (
                    <div
                      className={item.sold ? styles.sold : styles.hidden}
                      aria-label={item.sold ? "Sprzedane" : undefined}
                    >
                      <h4 className={styles.visuallyHidden}>Sprzedane</h4>
                    </div>
                  )}
                  <div className={styles.imageContainer}>
                    <img
                      src={`/images/portfolio/${tab}/${item.id}.jpg`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className={`${styles.info} flexColumn`}>
                      <p className={styles.title}>{item.title}</p>
                      <p className={styles.overview}>Technika: {item.method}</p>
                      <p className={styles.overview}>Rozmiar: {item.size}</p>
                      <p className={styles.overview}>Cena: {item.price}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.noItems}>
                <p>Nie znaleziono nic w tej kategorii.</p>
              </div>
            )}
          </article>
        </div>
      </section>
    </div>
  );
};

export default Shop;
