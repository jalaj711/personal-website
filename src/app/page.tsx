"use client";
import styles from "./page.module.css";
import { Brush, NT } from "src/fonts";
import primaryBg from "../../public/images/2.webp";
import secondaryBg from "../../public/images/3.webp";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [ratio, setRatio] = useState(0);
  const secondaryTextRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var _ratio = (window.scrollY / window.innerHeight);
      if (secondaryTextRef.current) {
        const values = [
          "appealing",
          "scalable",
          "real time",
          "reliable",
        ];
        if (_ratio < 0.3) secondaryTextRef.current.innerText = values[0];
        else if (_ratio > 0.7 && _ratio < 1.3)
          secondaryTextRef.current.innerText = values[1];
        else if (_ratio > 1.7 && _ratio < 2.3)
          secondaryTextRef.current.innerText = values[2];
        else if (_ratio > 2.7) secondaryTextRef.current.innerText = values[3];
        else {
          var text = "";
          for(var i=0;i<Math.round(Math.random() * 8 + 4);i++){
            text += "abc def ghi jkl mnop qrst uvwx yz"[Math.round(Math.random() * 32)];
          };
          secondaryTextRef.current.innerText = text;
        }
      }
      setRatio(_ratio)
    });
  }, []);
  return (
    <main>
      <section className={styles.section}>
        {/* <h1 className={[styles.h1, NT.className].join(" ")}>JALAJ</h1>
        <h1 className={[MillionDreams.className].join(" ")}>Web Developer</h1> */}
        <div
          className={[
            styles.headers,
            ratio < 3 ? styles.in_view_header : "",
          ].join(" ")}
        >
          <div className={styles.headers_wrapper}>
            <h1
              className={[styles.h1, NT.className, styles.primary_header].join(
                " "
              )}
            >
              and i make apps that are
            </h1>
            <h1
              className={[
                styles.h1,
                Brush.className,
                styles.secondary_header,
              ].join(" ")}
              ref={secondaryTextRef}
            >
              appealing
            </h1>
          </div>
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
        </div>
      </section>
    </main>
  );
}
