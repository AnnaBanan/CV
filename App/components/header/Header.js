import * as styles from "../../../styles/header.module.scss";
import Portrait from "./Portrait";
import Profile from "./Profile";
import Contact from "../Contact";
import { useMediaQuery } from "../../utils/useMediaQuery";

const Header = () => {
  const desktopMQ = useMediaQuery("(min-width: 882px)");
  const printMQ = useMediaQuery("print");
  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.portrait}>
          <Portrait />
        </div>
        <div className={styles.header__content}>
          <h1 className={styles.headline}>Anna-Maria Tonke</h1>
          <div className={styles.profile}>
            <Profile />
          </div>
          {desktopMQ | printMQ ? <Contact /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Header;
