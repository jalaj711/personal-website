import styles from "./index.module.css";
import { Raleway } from "src/fonts";

export default function Footer() {
  return <div className={[styles.footer, Raleway.className].join(" ")}>
    <span className={styles.footerElem}>
    &copy; 2022-24 Jalaj Kumar
    </span>
    <span className={styles.filler} />
    <span className={styles.footerElem} onClick={() => {
        window.open("https://github.com/jalaj711/", "_blank")
    }}>Github</span>
    <span className={styles.footerElem} onClick={() => {
        window.open("https://linkedin.com/in/jalajkumar/", "_blank")
    }}>LinkedIn</span>
    <span className={styles.footerElem} onClick={() => {
        window.open("https://ja1aj.vercel.app/", "_blank")
    }}>Website</span>
  </div>;
}
