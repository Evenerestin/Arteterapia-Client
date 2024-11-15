import React from "react";
import Typewriter from "../components/Typewriter";
import "../css/Home.css";

const Home = () => {
  return (
    <div id="home">
      <header>
        <div className="background"></div>
        <div className="siteTitle">
          <Typewriter class="typewriter" word="Arteterapia" delay={5000} />
          <h3>Dla kreatywnych nie ma granic</h3>
        </div>
      </header>
    </div>
  );
};

export default Home;
