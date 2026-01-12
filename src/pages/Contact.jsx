import { useGSAP } from "@gsap/react";
import { IconBrandInstagram, IconMailFilled } from "@tabler/icons-react";
import {
  fadeFromBottom,
  fadeFromRight,
  fadeFromTop,
} from "../components/revealAnimations";
import styles from "./css/Contact.module.css";

const Contact = () => {
  useGSAP(() => {
    fadeFromTop(".upper");
    fadeFromBottom(".lower");
    fadeFromRight(".heading");
  });

  return (
    <div id="contact" aria-label="Kontakt">
      <header className={`${styles.header} flex`}>
        <div className={`${styles.background} flex`}>
          <div className={`${styles.container} ${styles.upper}`}>
            <picture>
              <source
                srcSet="/images/contact/background.avif"
                type="image/avif"
              />
              <source
                srcSet="/images/contact/background.webp"
                type="image/webp"
              />
              <img src="/images/contact/background.jpg" alt="Zdjęcie obrazu" />
            </picture>
            <div className={`${styles.overlay}`}></div>
          </div>
          <div className={`${styles.container} ${styles.lower}`}>
            <picture>
              <source
                srcSet="/images/contact/background.avif"
                type="image/avif"
              />
              <source
                srcSet="/images/contact/background.webp"
                type="image/webp"
              />
              <img src="/images/contact/background.jpg" alt="Zdjęcie obrazu" />
            </picture>
            <div className={`${styles.overlay}`}></div>
          </div>
        </div>
        <div className={`${styles.content} flexColumn`}>
          <div className={`${styles.heading}`}>
            <h1>Kontakt</h1>
            <h2>Serdecznie zapraszam...</h2>
          </div>
          <div className={`${styles.info} flexColumn`}>
            <div className="flex">
              <IconMailFilled size={25} />
              <p>agnieszka.kornas-wisniewska@wp.pl</p>
            </div>
            <div className="flex">
              <IconBrandInstagram size={25} />
              <p>arteterapia.akw</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Contact;
