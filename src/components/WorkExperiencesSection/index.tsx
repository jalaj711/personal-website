"use client";

import styles from "./index.module.css";
import { Brush, MillionDreams, NT } from "src/fonts";
import shn from "../../../public/images/shn.webp";
import ds from "../../../public/images/ds.webp";
import ry from "../../../public/images/ry.webp";
import ra from "../../../public/images/ra.webp";
import { useEffect, useRef, useState } from "react";

const project_data = [
  {
    title: "Software Developer",
    description:
      "Primarily worked on several ERP solutions built on Django and React. Handled the development process for these applications right from design to development to tetsing to deployment to maintainence.",
    image: shn.src,
  },
  {
    title: "Web Developer",
    description:
      "Developed several websites for the society and helped organise various events including the biggest debating festival of entire eastern india. Represented the society in several debating events throughout the nation.",
    image: ds.src,
  },
  {
    title: "Backend Engineer",
    description:
      "Collaborated with the frontend team and other backend developers to come up with an optimal REST API server based on Postgres & ExpressJs for their e-commmerce engine",
    image: ry.src,
  },
  {
    title: "Full Stack Intern",
    description:
      "Worked with other full stack developers to develop a website for their client which included dynamic blogs, a portfolio and a price estimator.",
    image: ra.src,
  },
  // {
  //   title: "Technical Content Writer",
  //   description:
  //     "some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.some description about project 1.",
  // },
];

const CarouselCell = (props: {
  title: string;
  description: string;
  image: string;
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
          style={{ backgroundImage: `url(${props.image})` }}
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

export default function WorkExperiencesSection(props: { ratio: number }) {
  const MAX_RATIO = 2;
  const [zTranslate, setZTranslate] = useState("");
  const [angleMultFactor, setAngleMultFactor] = useState(0);
  const [ratio, setRatio] = useState(-0.5);

  useEffect(() => {
    var _ratio = props.ratio - 0.5;
    _ratio > -0.5 && _ratio < MAX_RATIO + 0.5 && setRatio(_ratio);
  }, [props.ratio]);

  const resetScales = () => {
    var fullWidth = 40;
    var unit = "vw";

    if (window.innerWidth * 0.4 > 500) {
      fullWidth = 600;
      unit = "px";
    } else if (window.innerWidth * 0.4 < 300) {
      fullWidth = 300;
      unit = "px";
    }

    setZTranslate(
      Math.round(
        fullWidth /
          (fullWidth === 600 ? 1 : 1.5) /
          Math.tan(Math.PI / project_data.length)
      ).toString() + unit
    );
    setAngleMultFactor(Math.round(360 / project_data.length));
  };

  useEffect(() => {
    resetScales();
    window.addEventListener("resize", resetScales);
  }, []);

  return (
    <section className={styles.section}>
      <div
        className={[
          styles.section_wrapper,
          props.ratio > 0 && styles.in_view_wrapper,
          props.ratio > MAX_RATIO + 1 && styles.out_of_view_wrapper,
        ].join(" ")}
      >
        <div className={styles.carousel_scene}>
          <div className={styles.headers}>
            <h1
              className={[
                styles.h1,
                MillionDreams.className,
                styles.primary_header,
              ].join(" ")}
              style={{
                transform: `translateZ(-${zTranslate})`,
                opacity: ratio > -0.2 ? (ratio < MAX_RATIO + 0.2 ? 0.2 : 1) : 1,
              }}
            >
              Work Experiences
            </h1>
          </div>
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
                image={elem.image as string}
                rotation={index * angleMultFactor}
                zTranslate={zTranslate}
                showText={
                  Math.abs(
                    (ratio * (360 - angleMultFactor)) / MAX_RATIO -
                      index * angleMultFactor
                  ) <
                  angleMultFactor / 3
                }
                key={elem.title + index}
                yTranslate={`${
                  (-ratio / MAX_RATIO) * 100 * (project_data.length - 1)
                }%`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
