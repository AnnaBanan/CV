import * as styles from "../../styles/impressum.module.scss";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <div className="content">
      <div className={styles.impressum}>
        <h2>Impressum</h2>
        <p>Angaben gemäß § 5 TMG</p>
        <p>
          Anna-Maria Tonke
          <br />
          Eichendorffstraße 53
          <br />
          90491 Nürnberg
          <br />
        </p>
        <p>
          <strong>Vertreten durch: </strong>
          <br />
          Anna-Maria Tonke
          <br />
        </p>
        <p>
          <strong>Kontakt:</strong> <br />
          Telefon: <a href="tel:+491636960893">+49 1636960893</a>
          <br />
          E-Mail:{" "}
          <a href="mailto:anna-maria.tonke@gmx.de">anna-maria.tonke@gmx.de</a>
          <br />
        </p>
        <Link to="/">
          <button role="link">go back</button>
        </Link>
      </div>
    </div>
  );
};

export default Impressum;
