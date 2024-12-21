import { useGSAP } from "@gsap/react";
import ImageSlider from "../components/ImageSlider";
import { fadeFromBottom, fadeFromSides } from "../components/revealAnimations";
import "../css/Didactics.css";

const Didactics = () => {
  useGSAP(() => {
    fadeFromSides(".content", ".heading", "video");
    fadeFromBottom(".slider");
  });

  return (
    <div id="didactics">
      <header>
        <video autoPlay muted loop>
          <source src="/didacticsHeaderClipped.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
      <div className="content">
        <h1>Twórcze zajęcia dla każdego.</h1>
        <div className="heading flex">
          <h2>
            Rozwijaj wyobraźnię i umiejętności artystyczne na warsztatach
            plastycznych, które pobudzają kreatywność i inspirują do działania.
          </h2>
          <video muted controls>
            <source src="/didacticsAssetClipped.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="text">
          <p>
            Od wielu lat dzielę się swoją pasją do sztuki, prowadząc warsztaty
            plastyczne dla każdej grupy wiekowej. Na swoje zajęcia zapraszam
            zarówno dzieci,młodzież, jak i dorosłych.
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
        <div className="slider">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default Didactics;
