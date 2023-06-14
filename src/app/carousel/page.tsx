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
  showText?: boolean;
}) => {
  return (
    <div
      className={styles.carousel_cell}
      style={{
        transform: `rotateY(${props.rotation}deg) translateZ(${props.zTranslate})`,
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
  const [currIndex, setCurrIndex] = useState(0);
  const [zTranslate, setZTranslate] = useState("");
  const [angleMultFactor, setAngleMultFactor] = useState(0);
  const intervalId = useRef<NodeJS.Timer>();

  useEffect(() => {
    const fullWidth = 40;
    const unit = "vw";

    setZTranslate(
      Math.round(
        fullWidth / 1.9 / Math.tan(Math.PI / project_data.length)
      ).toString() + unit
    );
    setAngleMultFactor(Math.round(360 / project_data.length));
  }, []);

  useEffect(() => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    intervalId.current = setInterval(() => {
      setCurrIndex((ind) => ind + 1);
    }, 2000);
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);
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
            projects
          </h1>
        </div>
        <div className={styles.carousel_scene}>
          <div
            className={styles.carousel}
            style={{
              transform: `translateZ(-${zTranslate}) rotateY(-${
                currIndex * angleMultFactor
              }deg)`,
            }}
          >
            {project_data.map((elem, index) => (
              <CarouselCell
                title={elem.title}
                description={elem.description}
                rotation={index * angleMultFactor}
                zTranslate={zTranslate}
                showText={currIndex % project_data.length === index}
                key={elem.title + index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
