import * as styles from "../../styles/contact.module.scss";
import IconHome from "./icons/IconHome";
import IconMail from "./icons/IconMail";
import IconPhone from "./icons/IconPhone";
import IconLink from "./icons/IconLink";
import IconDownload from "./icons/IconDownload";
import * as MyPDF from "../../assets/CV.pdf";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact:</h2>
      <ul>
        <li>
          <IconHome />
          <span>Eichendorffstr. 53, Nuremberg</span>
        </li>
        <li>
          <IconPhone />
          <span>
            <a href="tel:+491636960893">+49 1636960893</a>
          </span>
        </li>
        <li>
          <IconMail />
          <span>
            <a href="mailto:anna-maria.tonke@gmx.de">anna-maria.tonke@gmx.de</a>
          </span>
        </li>
        <li>
          <IconLink />
          <span>
            <a
              href="https://www.linkedin.com/in/anna-maria-tonke-94893821b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </span>
        </li>
        <li>
          <IconDownload />
          <span>
            <a href="./assets/CV.pdf" download="CV.pdf">
              Download Here
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
