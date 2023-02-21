import * as styles from "../../styles/footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="content">
        <span>© Anna-Maria Tonke 2023 — </span>
        <Link to="impressum">Impressum</Link>
      </div>
    </footer>
  );
};

export default Footer;
