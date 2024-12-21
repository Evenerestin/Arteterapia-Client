import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { InstagramIcon, MailIcon } from "../assets/ContactIcons";
import { fadeFromBottom, fadeFromRight } from "../components/revealAnimations";
import "../css/Contact.css";

const Contact = () => {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  useGSAP(() => {
    fadeFromBottom(".backgroundUpper");
    fadeFromBottom(".backgroundLower");
    fadeFromRight(".contactInformations");
  });

  return (
    <div id="contact" className="flex">
      <div>
        <div className="backgroundUpper">
          <img src="/contactBackground.jpg" alt="Zdjęcie obrazu ''" />
          <div className="overlay"></div>
        </div>
        <div className="backgroundLower">
          <img src="/contactBackground.jpg" alt="Zdjęcie obrazu ''" />
          <div className="overlay"></div>
        </div>
        <div className="heading">
          <h1>Kontakt</h1>
          <h3>Serdecznie zapraszam...</h3>
        </div>
      </div>
      <div className="contactInformations flexColumn">
        <div className="flex">
          <MailIcon />
          <p>someone@example.com</p>
        </div>
        <div className="flex">
          <InstagramIcon />
          <p>arteterapia.akw</p>
        </div>
      </div>
      {isMobile ? (
        <div className="contactMobile flexColumn">
          <div className="flex">
            <MailIcon />
            <p>someone@example.com</p>
          </div>
          <div className="flex">
            <InstagramIcon />
            <p>arteterapia.akw</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Contact;
