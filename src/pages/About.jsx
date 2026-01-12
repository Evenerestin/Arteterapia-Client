import { useGSAP } from "@gsap/react";
import { IconChevronCompactDown } from "@tabler/icons-react";
import { fadeFromTop } from "../components/revealAnimations";
import styles from "./css/About.module.css";

const About = () => {
  useGSAP(() => {
    fadeFromTop(".hook");
  });

  return (
    <div id="about" aria-label="O autorce i pasji do sztuki">
      <header className={styles.header}>
        <h1>Z pasji do sztuki i nauczania...</h1>
        <a
          href="#content"
          className={styles.hook}
          aria-label="Przejdź do treści"
        >
          <IconChevronCompactDown stroke={0.25} />
        </a>
        <div className={styles.background}>
          <picture>
            <source
              srcSet="/images/aboutMe/background.avif"
              type="image/avif"
            />
            <source
              srcSet="/images/aboutMe/background.webp"
              type="image/webp"
            />
            <img src="/images/aboutMe/background.jpg" alt="" loading="lazy" />
          </picture>
          <div className={styles.overlay}></div>
        </div>
      </header>
      <section id="content" className={styles.snap}>
        <div className={`${styles.biography} flexColumn`}>
          <div className={styles.title}>
            <h2>Od dawna interesowałam się sztuką i rękodziełem.</h2>
            <h2>
              Gdy skończyłam swoje wymarzone studia artystyczne z możliwością
              nauczania młodszych pokoleń, od razu postanowiłam spróbować swoim
              sił w pracy zawodowej.
            </h2>
          </div>
          <div className="flex">
            <img
              src="/images/aboutMe/profile.jpg"
              alt="Zdjęcie profilowe autorki"
              className={styles.photo}
              loading="lazy"
            />
            <div className={`${styles.overview} flexColumn`}>
              <p>
                Szczęśliwie, bo zaraz po obronie dano mi możliwość otwarcia
                pracowni plastycznej przy Domu Kultury. I tak już od lat (choć
                tego w ogóle nie odczuwam) prowadzę warsztaty z malarstwa i
                ceramiki dla wszystkich grup wiekowych. Najwięcej satysfakcji
                sprawia mi dzielenie się moją pasją z dorosłymi. Są bardzo
                zaangażowani w swoją naukę a ich radość i efekty pracy są dla
                mnie najlepszą zapłatą.
              </p>
              <h3>
                Tak więc dzielenie się SZTUKĄ to dawanie dobrej karmy, która
                wraca :).
              </h3>
              <p>
                Tematem moich prac najczęściej jest natura: góry, łąki i lasy...
                w ostatnich latach - dla kontrastu, maluję fantastykę i kosmos.
                Dwa światy: ziemski i pozaziemski - oto moje klimaty.
              </p>
              <img
                src="signature.svg"
                alt="Podpis autorki"
                className={styles.signature}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
