"use client";

import styles from "./index.module.css";
import { Brush, MillionDreams, NT } from "src/fonts";
import bg from "../../../public/images/bg.webp";
import secondaryBg from "../../../public/images/3.webp";
import { createRef, useEffect, useRef, useState } from "react";


export default function Section4(props: { ratio: number }) {
  const { ratio } = props;
  const MAX_RATIO = 3;
  const elemRef = createRef<HTMLDivElement>()
  const [maxPercentage, setMaxPercentage] = useState(0);

  useEffect(() => {
    if(elemRef.current) {
      setMaxPercentage(1 - window.innerWidth / elemRef.current.getBoundingClientRect().width);
    }
  }, [elemRef]);

  useEffect(() => {
    const resize = () => {
      if(elemRef.current) {
        setMaxPercentage(1 - window.innerWidth / elemRef.current.getBoundingClientRect().width);
      }
    }
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize)
  }, [elemRef])
  return (
    <section className={styles.section}>
      <div
        className={[
          styles.section_track,
          ratio > 0 && ratio < MAX_RATIO && styles.in_view,
          ratio >= MAX_RATIO && styles.out_of_view,
        ].join(" ")}
        style={{
          transform: `translateX(${
            ratio > 0
              ? ratio < (MAX_RATIO)
                ? (1 - ratio / (MAX_RATIO)) * -maxPercentage * 100
                : 0
              : -maxPercentage*100
          }%)`,
          backgroundImage: `linear-gradient(#000b, #000b), url(${bg.src})`,
        }}
        ref={elemRef}
      >
        <div className={styles.container}>
          <div className={styles.headers}>
            <h1 className={[styles.h1, MillionDreams.className].join(" ")}>
              Let&apos;s connect
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
