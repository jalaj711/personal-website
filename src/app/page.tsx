import styles from "./page.module.css";
import { Brush, NT } from "src/fonts";
import primaryBg from "../../public/images/2.webp";
import secondaryBg from "../../public/images/3.webp";

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
            and i make web apps that
          </h1>
          <h1
            className={[
              styles.h1,
              Brush.className,
              styles.secondary_header,
            ].join(" ")}
          >
            get the job done
          </h1>
        </div>
        <div className={styles.project_wrapper}>
          <div className={styles.project_container}>
            <div
              className={styles.primary}
              style={{ backgroundImage: `url(${primaryBg.src})` }}
            >
              <div
                className={styles.secondary_1}
                style={{ backgroundImage: `url(${secondaryBg.src})` }}
              ></div>
              <div
                className={styles.secondary_2}
                style={{ backgroundImage: `url(${secondaryBg.src})` }}
              ></div>
            </div>
          </div>
          {/* <div
            className={[
              styles.project_container,
              styles.background_shadow,
            ].join(" ")}
          >
            <div
              className={styles.primary}
              style={{ backgroundImage: `url(${primaryBg.src})` }}
            >
              <div
                className={styles.secondary_1}
                style={{ backgroundImage: `url(${secondaryBg.src})` }}
              ></div>
              <div
                className={styles.secondary_2}
                style={{ backgroundImage: `url(${secondaryBg.src})` }}
              ></div>
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
}
