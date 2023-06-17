"use client";
import styles from "./index.module.css";
import { Brush, NT } from "src/fonts";
import primaryBg from "../../../public/images/2.webp";
import secondaryBg from "../../../public/images/3.webp";
import { useEffect, useRef, useState } from "react";

export default function Section1(props: { ratio: number }) {
  const secondaryTextRef = useRef<HTMLHeadingElement | null>(null);
  const MAX_RATIO = 3

  useEffect(() => {
      if (secondaryTextRef.current && props.ratio > 0 && props.ratio < MAX_RATIO) {
        const values = ["appealing", "scalable", "real time", "reliable"];
        if (props.ratio < 0.3) secondaryTextRef.current.innerText = values[0];
        else if (props.ratio > 0.7 && props.ratio < 1.3)
          secondaryTextRef.current.innerText = values[1];
        else if (props.ratio > 1.7 && props.ratio < 2.3)
          secondaryTextRef.current.innerText = values[2];
        else if (props.ratio > 2.7) secondaryTextRef.current.innerText = values[3];
        else {
          var text = "";
          for (var i = 0; i < Math.round(Math.random() * 8 + 4); i++) {
            text += "abc def ghi jkl mnop qrst uvwx yz"[
              Math.round(Math.random() * 32)
            ];
          }
          secondaryTextRef.current.innerText = text;
        }
      }
  }, [props.ratio]);
  return (
      <section className={styles.section}>
        {/* <h1 className={[styles.h1, NT.className].join(" ")}>JALAJ</h1>
        <h1 className={[MillionDreams.className].join(" ")}>Web Developer</h1> */}
        <div
          className={[
            styles.headers,
            props.ratio > 0 && props.ratio < MAX_RATIO && styles.in_view_header,
            props.ratio > MAX_RATIO && styles.out_of_view_wrapper
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
  );
}
