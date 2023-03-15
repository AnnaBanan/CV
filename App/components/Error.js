import * as styles from "../../styles/error.module.scss";
import { Link } from "react-router-dom";
import Ghost from "./icons/ghost";

const Error = () => {
  return (
    <div className={styles.error}>
      <div className="content">
        <h1>Error</h1>
        <p>The page you are looking for does not exist.</p>
        <Ghost />
        <Link to="/">
          <button>go back</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
