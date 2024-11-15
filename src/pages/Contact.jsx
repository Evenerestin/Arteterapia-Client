import React from "react";
import { InstagramIcon, MailIcon, PhoneIcon } from "../assets/ContactIcons";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="flex">
      <div>
        {/* <img src="/vincent-tantardini-hWlvhJAxkIw-unsplash.jpg" alt="Zdjęcie z ze swoimi pracami" /> */}
        <img src="/contactBackground.jpg" alt="Zdjęcie z ze swoimi pracami" />
        <div className="overlay"></div>
        <div className="imageDuplicate"></div>
        <h1>Kontakt</h1>
      </div>
      <div className="contactInformations flexColumn">
        <div className="flex">
          <PhoneIcon />
          <p>+48 000 000 000</p>
        </div>
        <div className="flex">
          <MailIcon />
          <p>someone@example.com</p>
        </div>
        <div className="flex">
          <InstagramIcon />
          <p>arteterapia.akw</p>
        </div>
      </div>
      {/* <div className="flexColumn">
        <img src="/vincent-tantardini-hWlvhJAxkIw-unsplash.jpg" alt="" />
        <div className="contactInformations flex">
          <div className="flex">
            <PhoneIcon />
            <p>+48 000 000 000</p>
          </div>
          <div className="flex">
            <MailIcon />
            <p>someone@example.com</p>
          </div>
          <div className="flex">
            <InstagramIcon />
            <p>arteterapia.akw</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
