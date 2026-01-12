import { useGSAP } from "@gsap/react";
import { fadeFromBottom, fadeFromSides } from "../components/revealAnimations";
import ImageSlider from "../components/slider/Slider";
import styles from "./css/Didactics.module.css";

const Didactics = () => {
  useGSAP(() => {
    fadeFromSides(".content", ".heading", "video");
    fadeFromBottom(".slider");
  });

  return (
    <div id="didactics" aria-label="Warsztaty plastyczne i zajęcia artystyczne">
      <header className={styles.header}>
        <video
          autoPlay
          muted
          loop
          aria-label="Klip wideo przedstawiający zajęcia plastyczne, kreatywność i atmosferę warsztatów artystycznych."
        >
          <source src="/videos/didacticsHeaderClipped.mp4" type="video/mp4" />
          Twórczy klip wideo prezentujący atmosferę warsztatów plastycznych.
        </video>
      </header>
      <div className={styles.content}>
        <h1>Twórcze zajęcia dla każdego.</h1>
        <div className={`${styles.heading} flexColumn`}>
          <h2>
            Rozwijaj wyobraźnię i umiejętności artystyczne na warsztatach
            plastycznych, które pobudzają kreatywność i inspirują do działania.
          </h2>
          <div
            className={`${styles.video} flexColumn`}
            aria-label="Galeria krótkich klipów z warsztatów plastycznych"
          >
            <video
              autoPlay
              muted
              loop
              aria-describedby="didactics-video-1-desc"
              aria-label="Klip wideo: Uczestnicy warsztatów malują na płótnie różnymi
              technikami."
            >
              <source
                src="/videos/didacticsAssetClipped1.mp4"
                type="video/mp4"
              />
              Krótki klip wideo z warsztatów plastycznych.
            </video>
            <video
              autoPlay
              muted
              loop
              aria-label="Klip wideo: Fragment zajęć ceramicznych, praca z gliną i
              formowanie kształtów."
            >
              <source
                src="/videos/didacticsAssetClipped2.mp4"
                type="video/mp4"
              />
              Krótki klip wideo z warsztatów plastycznych.
            </video>
            <video
              autoPlay
              muted
              loop
              aria-label="Klip wideo: Uczestnicy prezentują swoje gotowe prace i dzielą się
              wrażeniami."
            >
              <source
                src="/videos/didacticsAssetClipped3.mp4"
                type="video/mp4"
              />
              Krótki klip wideo z warsztatów plastycznych.
            </video>
          </div>
        </div>
        <div className={styles.text}>
          <p>
            Od wielu lat dzielę się swoją pasją do sztuki, prowadząc warsztaty
            plastyczne dla każdej grupy wiekowej. Na swoje zajęcia zapraszam
            zarówno dzieci, młodzież, jak i dorosłych.
          </p>
          <h3>
            Moim celem jest inspirowanie do odkrywania własnego potencjału
            artystycznego :)
          </h3>
          <p>
            W trakcie zajęć uczestnicy poznają różnorodne techniki malarskie i
            ceramiczne, ucząc się nie tylko warsztatu, ale także rozwijając
            kreatywność i wyobraźnię. Atmosfera pracy jest zawsze swobodna i
            sprzyjająca twórczości.
          </p>
        </div>
        <div className={styles.slider} aria-label="Galeria zdjęć z warsztatów">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default Didactics;
