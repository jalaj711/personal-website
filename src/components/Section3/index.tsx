"use client";

import styles from "./index.module.css";
// import { MillionDreams, NT } from "src/fonts";
import secondaryBg from "../../../public/images/2.webp";
import bg from "../../../public/images/bg.webp";
import { createRef, useEffect, useRef, useState } from "react";
import { MillionDreams } from "src/fonts";

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
          backgroundImage: `linear-gradient(#000b, #000b), url(${bg.src})`,
        }}
        ref={elemRef}
      >
        <div className={styles.container}>
          <div className={styles.headers}>
            <h1 className={[styles.h1, MillionDreams.className].join(" ")}>
              Work experience
            </h1>
          </div>
        </div>
        <div className={styles.container}>
          <div
            className={styles.info_container}
            style={{
              bottom: "-20vh",
            }}
          >
            <h2 className={[styles.h2, MillionDreams.className].join(" ")}>
              Full Stack Developer & SysAdmin
            </h2>
            <h3 className={styles.h3}>SHN Advertising</h3>
            <div className={styles.text}>
              Some description about this particular experience. Some
              description about this particular experience. Some description
              about this particular experience. Some description about this
              particular experience. Some description about this particular
              experience.
            </div>
          </div>
          <RotatingImagesGear
            rotation={
              (ratio > 0 ? (ratio < MAX_RATIO ? -ratio : -MAX_RATIO) : 0) * 45
            }
          />
        </div>
        <div className={styles.container}>
          <RotatingImagesGear
            rotation={
              (ratio > 0 ? (ratio < MAX_RATIO ? ratio : MAX_RATIO) : 0) * 45 +
              30
            }
            reverse
          />
          <div
            className={styles.info_container}
            style={{
              top: "-20vh",
            }}
          >
            <h2 className={[styles.h2, MillionDreams.className].join(" ")}>
              Full Stack Developer & SysAdmin
            </h2>
            <h3 className={styles.h3}>SHN Advertising</h3>
            <div className={styles.text}>
              Some description about this particular experience. Some
              description about this particular experience. Some description
              about this particular experience. Some description about this
              particular experience. Some description about this particular
              experience.
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div
            className={styles.info_container}
            style={{
              bottom: "-20vh",
            }}
          >
            <h2 className={[styles.h2, MillionDreams.className].join(" ")}>
              Full Stack Developer & SysAdmin
            </h2>
            <h3 className={styles.h3}>SHN Advertising</h3>
            <div className={styles.text}>
              Some description about this particular experience. Some
              description about this particular experience. Some description
              about this particular experience. Some description about this
              particular experience. Some description about this particular
              experience.
            </div>
          </div>
          <RotatingImagesGear
            rotation={
              (ratio > 0 ? (ratio < MAX_RATIO ? -ratio : -MAX_RATIO) : 0) * 45 +
              30
            }
          />
        </div>
        <div className={styles.container}>
          <RotatingImagesGear
            rotation={
              (ratio > 0 ? (ratio < MAX_RATIO ? ratio : MAX_RATIO) : 0) * 45
            }
            reverse
          />
          <div
            className={styles.info_container}
            style={{
              top: "-20vh",
            }}
          >
            <h2 className={[styles.h2, MillionDreams.className].join(" ")}>
              Full Stack Developer & SysAdmin
            </h2>
            <h3 className={styles.h3}>SHN Advertising</h3>
            <div className={styles.text}>
              Some description about this particular experience. Some
              description about this particular experience. Some description
              about this particular experience. Some description about this
              particular experience. Some description about this particular
              experience.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
