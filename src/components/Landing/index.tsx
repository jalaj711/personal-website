import styles from "./index.module.css";
import img from "../../../public/images/landing_bg.webp";
import img_layer_2 from "../../../public/images/landing_bg_layer_2.webp";
import img_layer_3 from "../../../public/images/landing_bg_layer_3.webp";
import { MillionDreams, NT } from "src/fonts";

export default function Landing() {
  return (
    <section className={styles.section}>
      <div className={[styles.image_container, MillionDreams.className].join(' ')}>
        <div
          className={styles.heading_image}
          style={{ backgroundImage: `url(${img.src})`, zIndex: 1 }}
        />
        <div
          className={styles.heading_image}
          style={{ backgroundImage: `url(${img_layer_2.src})`, zIndex: 10 }}
        />
        <div
          className={styles.heading_image}
          style={{ backgroundImage: `url(${img_layer_3.src})`, zIndex: 20 }}
        />
        <div
          className={styles.heading_title}
          style={{ top: '-8%', left: '17%', zIndex: 0 }}
        >
          J
        </div>
        <div
          className={styles.heading_title}
          style={{ top: '0%', left: '63%', zIndex: 5 }}
        >
          A
        </div>
        <div
          className={styles.heading_title}
          style={{ top: '32%', left: '4%', zIndex: 0 }}
        >
          L
        </div>
        <div
          className={styles.heading_title}
          style={{ top: '45%', left: '66%', zIndex: 15 }}
        >
          A
        </div>
        <div
          className={styles.heading_title}
          style={{ top: '69%', left: '26%', zIndex: 25 }}
        >
          J
        </div>
      </div>
      <h1 className={NT.className}>Full Stack Developer | UI/UX Designer | C++ programmer</h1>
    </section>
  );
}
