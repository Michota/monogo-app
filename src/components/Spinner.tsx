import { LoaderIcon } from "lucide-react";
import styles from "./styles/Spinner.module.css";

function Spinner() {
  return <LoaderIcon className={styles.spinIcon} />;
}

export default Spinner;
