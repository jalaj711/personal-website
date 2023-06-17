"use client";

import styles from "./index.module.css";
import { Brush, NT } from "src/fonts";
import secondaryBg from "../../../public/images/3.webp";
import { createRef, useEffect, useRef, useState } from "react";

const project_data = [
  {
    title: "Gastos",
    description:
      "some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.",
  },
  {
    title: "Kitchendotcom.in",
    description:
      "some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.",
  },
  {
    title: "Vistaar",
    description:
      "some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.",
  },
  {
    title: "Todox",
    description:
      "some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.",
  },
  {
    title: "Blogit",
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
          <div
            className={[Brush.className, styles.carousel_cell_header].join(" ")}
          >
            {props.title}
          </div>
          <div className={styles.carousel_cell_description}>
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};

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
        }}
        ref={elemRef}
      >
        <div className={styles.container} style={{ background: "red" }}></div>
        <div className={styles.container} style={{ background: "blue" }}></div>
        <div className={styles.container} style={{ background: "green" }}></div>
        <div
          className={styles.container}
          style={{ background: "yellow" }}
        ></div>
        <div
          className={styles.container}
          style={{ background: "purple" }}
        ></div>
      </div>
    </section>
  );
}
