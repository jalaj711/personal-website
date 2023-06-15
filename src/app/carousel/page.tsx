"use client";

import styles from "./page.module.css";
import { Brush, NT } from "src/fonts";
import primaryBg from "../../../public/images/2.webp";
import secondaryBg from "../../../public/images/3.webp";
import { useEffect, useRef, useState } from "react";

const project_data = [
  {
    title: "project 1",
    description:
      "some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.",
  },
  {
    title: "project 2",
    description:
      "some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.",
  },
  {
    title: "project 3",
    description:
      "some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.",
  },
  {
    title: "project 4",
    description:
      "some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.",
  },
  {
    title: "project 5",
    description:
      "some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.",
  },
  {
    title: "project 6",
    description:
      "some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.",
  },
];

const CarouselCell = (props: {
  title: string;
  description: string;
  rotation: number;
  zTranslate: number | string;
  yTranslate: number | string;
  showText?: boolean;
}) => {
  return (
    <div
      className={styles.carousel_cell}
      style={{
        transform: `rotateY(${props.rotation}deg) translateZ(${props.zTranslate}) translateY(${props.yTranslate})`,
      }}
    >
      <div className={styles.carousel_cell_wrapper}>
        <div
          className={styles.carousel_cell_picture}
          style={{ backgroundImage: `url(${secondaryBg.src})` }}
        ></div>
        <div
          className={styles.carousel_cell_text}
          style={{ opacity: props.showText ? 1 : 0 }}
        >
          <div className={styles.carousel_cell_header}>{props.title}</div>
          <div className={styles.carousel_cell_description}>
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const MAX_RATIO = 2;
  const [zTranslate, setZTranslate] = useState("");
  const [angleMultFactor, setAngleMultFactor] = useState(0);
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var _ratio = window.scrollY / window.innerHeight - 0.5;
      _ratio < MAX_RATIO && setRatio(_ratio);
    });
  }, []);

  const resetScales = () => {
    var fullWidth = 40;
    var unit = "vw";

    if (window.innerWidth * 0.4 > 500) {
      fullWidth = 500;
      unit = "px";
    } else if (window.innerWidth * 0.4 < 300) {
      fullWidth = 300;
      unit = "px";
    }

    setZTranslate(
      Math.round(
        fullWidth / 1.9 / Math.tan(Math.PI / project_data.length)
      ).toString() + unit
    );
    setAngleMultFactor(Math.round(360 / project_data.length));
  };

  useEffect(() => {
    resetScales();
    window.addEventListener("resize", resetScales);
  }, []);

  return (
    <main>
      <section className={styles.section}>
        <div className={styles.section_wrapper}>
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
            <div
              className={styles.carousel}
              style={{
                transform: `translateZ(-${zTranslate}) rotateY(${
                  (-ratio * (360 - angleMultFactor)) / MAX_RATIO
                }deg)`,
              }}
            >
              {project_data.map((elem, index) => (
                <CarouselCell
                  title={elem.title}
                  description={elem.description}
                  rotation={index * angleMultFactor}
                  zTranslate={zTranslate}
                  showText={Math.abs(((ratio * (360 - angleMultFactor)) / MAX_RATIO) - (index * angleMultFactor)) < angleMultFactor/2}
                  key={elem.title + index}
                  yTranslate={`${-ratio / MAX_RATIO * 100 * (project_data.length - 1)}%`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
