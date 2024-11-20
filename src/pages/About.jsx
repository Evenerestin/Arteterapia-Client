import { useGSAP } from "@gsap/react";
import Signature from "../assets/Signature";
import { fadeFromLeft } from "../components/revealAnimations";
import "../css/About.css";
import useScroll from "../hooks/useScroll";

const About = () => {
  const isScrolled = useScroll();

  useGSAP(() => {
    fadeFromLeft("h1");
  });

  return (
    <div id="about">
      <header className={`${isScrolled ? "scrolled" : ""}`}>
        <h1>Z pasji do sztuki i nauczania...</h1>
        <a href="#biographyHook">
          <span>&gt;</span>
        </a>
        <div className="overlay"></div>
      </header>
      <div id="biographyHook"></div>
      <div className="biography flexColumn">
        <h2>
          Od dawna interesowałam się sztuką i rękodziełem. Gdy skończyłam swoje
          wymarzone studia artystyczne z możliwością nauczania młodszych
          pokoleń, od razu postanowiłam spróbować swoim sił w pracy zawodowej.
        </h2>
        <div className="content flex">
          <img src="/aboutMe.jpg" alt="profile" />
          <div className="flexColumn">
            <div>
              <p>
                Szczęśliwie, bo zaraz po obronie dano mi możliwość otwarcia
                pracowni plastycznej przy Domu Kultury. I tak już od lat (choć
                tego w ogóle nie odczuwam) prowadzę warsztaty z malarstwa i
                ceramiki dla wszystkich grup wiekowych. Najwięcej satysfakcji
                sprawia mi dzielenie się moją pasją z dorosłymi. Są bardzo
                zaangażowani w swoją naukę a ich radość i efekty pracy są dla
                mnie najlepszą zapłatą.{" "}
              </p>
              <h3>
                Tak więc dzielenie się SZTUKĄ to dawanie dobrej karmy, która
                wraca :).
              </h3>
            </div>
            <p>
              Tematem moich prac najczęściej jest natura: góry, łąki i lasy... w
              ostatnich latach - dla kontrastu, maluję fantastykę i kosmos. Dwa
              światy: ziemski i pozaziemski - oto moje klimaty.
            </p>
            <Signature className="signature" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
