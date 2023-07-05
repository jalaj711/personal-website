"use client";

import styles from "./index.module.css";
import { Brush, MillionDreams, NT } from "src/fonts";
import secondaryBg from "../../../public/images/3.webp";
import { createRef, useEffect, useRef, useState } from "react";

const RotatingImagesGear = (props: { rotation: number; id: string }) => {
  return (
    <div className={styles.rotating_images_container}>
      <svg viewBox="0 0 150 150" className={styles.rotating_images}>
        <mask id={"svg-mask-" + props.id}>
          <svg viewBox="0 0 150 150">
            <g transform={`rotate(${props.rotation}, 75, 75)`}>
              <path
                fill="#fff"
                d="M 29.27 41.27 A 12 12 0 0 1 41.27 29.27 L 117.27 29.27 A 12 12 0 0 1 129.27 41.27 L 129.27 117.27 A 12 12 0 0 1 117.27 129.27 L 41.27 129.27 A 12 12 0 0 1 29.27 117.27 Z"
              />
            </g>
          </svg>
        </mask>
        <image
          href={secondaryBg.src}
          mask={"url(#svg-mask-" + props.id + ")"}
          preserveAspectRatio="xMidYMid slice"
          width={150}
          height={150}
        ></image>
      </svg>
    </div>
  );
};

export default function ReferencesSection(props: { ratio: number }) {
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
                ? (1 - ratio / MAX_RATIO) * -maxPercentage * 100
                : 0
              : -maxPercentage * 100
          }%)`,
          // backgroundImage: `linear-gradient(#000b, #000b), url(${bg.src})`,
        }}
        ref={elemRef}
      >
        <div className={styles.container}>
          <RotatingImagesGear
            rotation={
              (ratio > 0 ? (ratio < MAX_RATIO ? ratio : MAX_RATIO) : 0) * 60
            }
            id="1"
          />
        </div>
        <div className={styles.container}>
          <RotatingImagesGear
            id="2"
            rotation={
              (ratio > 0 ? (ratio < MAX_RATIO ? -ratio : -MAX_RATIO) : 0) * 60
            }
          />
        </div>
        <div className={styles.container}>
          <RotatingImagesGear
            id="3"
            rotation={
              (ratio > 0 ? (ratio < MAX_RATIO ? ratio : MAX_RATIO) : 0) * 60
            }
          />
        </div>
        <div className={styles.container}>
          <RotatingImagesGear
            id="4"
            rotation={
              (ratio > 0 ? (ratio < MAX_RATIO ? -ratio : -MAX_RATIO) : 0) * 60
            }
          />
        </div>
        <div className={styles.container}>
          <div className={styles.headers}>
            <h1 className={[styles.h1, MillionDreams.className].join(" ")}>
              About Me
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
