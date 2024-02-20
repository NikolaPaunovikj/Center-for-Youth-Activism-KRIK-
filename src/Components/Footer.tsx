import styles from "../styles/Components_Style/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";

const Footer = () => {
  return (
    <div id="contact" className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <h1>
          Месечен
          <br />
          билтен
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim.
        </p>
        <div className={styles.buttonContainer}>
          <input aria-label={"email"} type="text" placeholder="Вашата Емаил Адреса" />
          <button>CTA</button>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContact}>
          <h5 aria-label={"contact us"}>Контактирај Не!</h5>
          <div>
            <input type="text" placeholder="Вашето Име" />
            <input type="text" placeholder="Вашата Емаил Адреса" />
            <button>CTA</button>
          </div>
        </div>
        <div className={styles.footerBottomInfo}>
          <h5>Приклучи Се</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim.
            Est dapibus turpis metus ac rhoncus tellus volutpat.{" "}
          </p>
        </div>
        <div className={styles.footerBottomAbout}>
          <h5>За Крик</h5>
          <p aria-label={"krik info"}>
            Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim.{" "}
          </p>
          <div className={styles.iconsContainer}>
            <FontAwesomeIcon aria-label={"linkedin"} className={styles.icon} icon={faLinkedinIn} />
            <FontAwesomeIcon aria-label={"instagram"} className={styles.icon} icon={faInstagram} />
            <FontAwesomeIcon aria-label={"facebook"} className={styles.icon} icon={faFacebookF} />
            <FontAwesomeIcon aria-label={"twitter"} className={styles.icon} icon={faTwitter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
