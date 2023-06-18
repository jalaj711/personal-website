"use client";

import styles from "./index.module.css";
// import { Brush, NT } from "src/fonts";
import secondaryBg from "../../../public/images/3.webp";
import { createRef, useEffect, useRef, useState } from "react";

const RotatingImagesGear = (props: { rotation: number; reverse?: boolean }) => {
  return (
    <div
      className={styles.rotating_images_container}
      style={{
        transform: `translateY(${props.reverse ? "-" : ""}50%) rotateZ(${
          props.rotation
        }deg)`,
      }}
    >
      <div
        className={styles.rotating_images}
        style={{
          transform: `rotateZ(0deg) rotateY(30deg) translateY(-110%)`,
          backgroundImage: `url(${secondaryBg.src})`,
        }}
      ></div>
      <div
        className={styles.rotating_images}
        style={{
          transform: `rotateZ(60deg) rotateY(30deg) translateY(-110%)`,
          backgroundImage: `url(${secondaryBg.src})`,
        }}
      ></div>
      <div
        className={styles.rotating_images}
        style={{
          transform: `rotateZ(120deg) rotateY(30deg) translateY(-110%)`,
          backgroundImage: `url(${secondaryBg.src})`,
        }}
      ></div>
      <div
        className={styles.rotating_images}
        style={{
          transform: `rotateZ(180deg) rotateY(30deg) translateY(-110%)`,
          backgroundImage: `url(${secondaryBg.src})`,
        }}
      ></div>
      <div
        className={styles.rotating_images}
        style={{
          transform: `rotateZ(240deg) rotateY(30deg) translateY(-110%)`,
          backgroundImage: `url(${secondaryBg.src})`,
        }}
      ></div>
      <div
        className={styles.rotating_images}
        style={{
          transform: `rotateZ(300deg) rotateY(30deg) translateY(-110%)`,
          backgroundImage: `url(${secondaryBg.src})`,
        }}
      ></div>
    </div>
  );
};

export default function Section3(props: { ratio: number }) {
  const { ratio } = props;
  const MAX_RATIO = 3;
  const elemRef = createRef<HTMLDivElement>();
  const [maxPercentage, setMaxPercentage] = useState(0);

  useEffect(() => {
    if (elemRef.current) {
      setMaxPercentage(
        1 - window.innerWidth / elemRef.current.getBoundingClientRect().width
      );
    }
  }, [elemRef]);

  useEffect(() => {
    const resize = () => {
      if (elemRef.current) {
        setMaxPercentage(
          1 - window.innerWidth / elemRef.current.getBoundingClientRect().width
        );
      }
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [elemRef]);

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
              ? ratio < MAX_RATIO
                ? (-ratio / MAX_RATIO) * maxPercentage * 100
                : -maxPercentage * 100
              : 0
          }%)`,
        }}
        ref={elemRef}
      >
        <div className={styles.container}>
          <div className={styles.headers}>
            <h1 className={styles.h1}>Work experience</h1>
          </div>
        </div>
        <div className={styles.container}>
          <RotatingImagesGear
            rotation={
              (ratio > 0 ? (ratio < MAX_RATIO ? ratio : MAX_RATIO) : 0) * 180 +
              30
            }
            reverse
          />
          <RotatingImagesGear
            rotation={
              (ratio > 0 ? (ratio < MAX_RATIO ? -ratio : -MAX_RATIO) : 0) *
                180 +
              30
            }
          />
          <RotatingImagesGear
            rotation={
              (ratio > 0 ? (ratio < MAX_RATIO ? ratio : MAX_RATIO) : 0) * 180 
            }
            reverse
          />
          <RotatingImagesGear
            rotation={
              (ratio > 0 ? (ratio < MAX_RATIO ? -ratio : -MAX_RATIO) : 0) *
                180 
            }
          />
        </div>
      </div>
    </section>
  );
}
