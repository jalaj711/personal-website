import styles from "./index.module.css";
import img from "../../../public/images/landing_bg.webp";
import img_layer_2 from "../../../public/images/landing_bg_layer_2.webp";
import img_layer_3 from "../../../public/images/landing_bg_layer_3.webp";
import { MillionDreams, NT } from "src/fonts";
import EnteringAnimation from "../EnteringAnimation";
import { useEffect } from "react";

export default function Landing() {
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflowY = "auto";
      var elems = document.getElementsByClassName(styles.being_animated);
      if (elems) {
        for (var i = 0; i < elems.length; i++)
          elems[i].classList.remove(styles.being_animated);
      }
    }, 5000);
  }, []);

  return (
    <section className={styles.section}>
      <EnteringAnimation />
      <div
        className={[
          styles.image_container,
          styles.being_animated,
          MillionDreams.className,
        ].join(" ")}
      >
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
        <div className={styles.heading_title}>J</div>
        <div className={styles.heading_title}>A</div>
        <div className={styles.heading_title}>L</div>
        <div className={styles.heading_title}>A</div>
        <div className={styles.heading_title}>J</div>
      </div>
      <h1 className={[NT.className, styles.descriptions].join(" ")}>
        <span>Full Stack Developer </span>
        <span className={styles.primary_description}>Low Level Programmer</span>
        <span>C/C++/Rust</span> 
      </h1>
    </section>
  );
}
