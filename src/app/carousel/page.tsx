import styles from "./page.module.css";
import { Brush, NT } from "src/fonts";
import primaryBg from "../../../public/images/2.webp";
import secondaryBg from "../../../public/images/3.webp";

export default function Home() {
  return (
    <main>
      <section className={styles.section}>
        {/* <h1 className={[styles.h1, NT.className].join(" ")}>JALAJ</h1>
        <h1 className={[MillionDreams.className].join(" ")}>Web Developer</h1> */}
        <div className={styles.headers}>
          <h1
            className={[styles.h1, NT.className, styles.primary_header].join(
              " "
            )}
          >
            projects
          </h1>
        </div>
        <div className={styles.carousel_scene}>
          <div className={styles.carousel}>
            <div className={styles.carousel_cell}>1</div>
            <div className={styles.carousel_cell}>2</div>
            <div className={styles.carousel_cell}>3</div>
            <div className={styles.carousel_cell}>4</div>
            <div className={styles.carousel_cell}>5</div>
            <div className={styles.carousel_cell}>6</div>
          </div>
        </div>
      </section>
    </main>
  );
}
