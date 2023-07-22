"use client";

import styles from "./index.module.css";
// import { MillionDreams, NT } from "src/fonts";
import vistaar_1 from "../../../public/images/projects/vistaar_1.webp";
import vistaar_3 from "../../../public/images/projects/vistaar_3.webp";
import vistaar_5 from "../../../public/images/projects/vistaar_5.webp";
import gs1 from "../../../public/images/projects/gs1.webp";
import gs2 from "../../../public/images/projects/gs2.webp";
import gs3 from "../../../public/images/projects/gs3.webp";
import jb1 from "../../../public/images/projects/jb1.webp";
import jb2 from "../../../public/images/projects/jb2.webp";
import jb3 from "../../../public/images/projects/jb3.webp";
import kcd1 from "../../../public/images/projects/kcd1.webp";
import kcd3 from "../../../public/images/projects/kcd3.webp";
import atd1 from "../../../public/images/projects/atd1.webp";
import atd2 from "../../../public/images/projects/atd2.webp";
import atd3 from "../../../public/images/projects/atd3.webp";
import atd4 from "../../../public/images/projects/atd4.webp";
import bg from "../../../public/images/bg.webp";
import { createRef, useEffect, useRef, useState } from "react";
import { MillionDreams } from "src/fonts";
import Chip, {
  ChipGroup,
  DRFChip,
  DjangoChip,
  FigmaChip,
  FlaskChip,
  JSChip,
  MySqlChip,
  PostgresChip,
  ReactChip,
  ReduxChip,
  TSChip,
} from "../Chip";

const RotatingImagesGear = (props: {
  rotation: number;
  reverse?: boolean;
  images: string[];
}) => {
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
          backgroundImage: `url(${props.images[0]})`,
        }}
      ></div>
      <div
        className={styles.rotating_images}
        style={{
          transform: `rotateZ(60deg) rotateY(30deg) translateY(-110%)`,
          backgroundImage: `url(${props.images[1 % props.images.length]})`,
        }}
      ></div>
      <div
        className={styles.rotating_images}
        style={{
          transform: `rotateZ(120deg) rotateY(30deg) translateY(-110%)`,
          backgroundImage: `url(${props.images[2 % props.images.length]})`,
        }}
      ></div>
      <div
        className={styles.rotating_images}
        style={{
          transform: `rotateZ(180deg) rotateY(30deg) translateY(-110%)`,
          backgroundImage: `url(${props.images[3 % props.images.length]})`,
        }}
      ></div>
      <div
        className={styles.rotating_images}
        style={{
          transform: `rotateZ(240deg) rotateY(30deg) translateY(-110%)`,
          backgroundImage: `url(${props.images[4 % props.images.length]})`,
        }}
      ></div>
      <div
        className={styles.rotating_images}
        style={{
          transform: `rotateZ(300deg) rotateY(30deg) translateY(-110%)`,
          backgroundImage: `url(${props.images[5 % props.images.length]})`,
        }}
      ></div>
    </div>
  );
};

export default function ProjectsSection(props: { ratio: number }) {
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
          // backgroundImage: `linear-gradient(#000b, #000b), url(${bg.src})`,
        }}
        ref={elemRef}
      >
        <div className={styles.container}>
          <div className={styles.headers}>
            <h1 className={[styles.h1, MillionDreams.className].join(" ")}>
              Projects
            </h1>
          </div>
        </div>
        <div className={styles.container}>
          <div
            className={styles.info_container}
            style={{
              bottom: "-15vh",
            }}
          >
            <h2 className={[styles.h2, MillionDreams.className].join(" ")}>
              Jewellery Billing
            </h2>
            <ChipGroup>
              <DjangoChip />
              <ReactChip />
              <ReduxChip />
              <DRFChip />
              <TSChip />
              <PostgresChip />
            </ChipGroup>
            <div className={styles.text}>
              It&apos; a <b>full blown ERP solution</b> for Jewellery stores. It
              features customer, supplier and staff management, custom billing
              solution, multi-user billing and real time price updates. It is
              highly scalable and is currently in use by multiple stores helping
              them manage{" "}
              <b>
                over 3.5k+ customers, 1k+ products and handling INR 30crores+ in
                sales
              </b>{" "}
              annually.
            </div>
          </div>
          <RotatingImagesGear
            rotation={
              (ratio > 0 ? (ratio < MAX_RATIO ? ratio : MAX_RATIO) : 0) * 45
            }
            images={[jb1.src, jb2.src, jb3.src]}
          />
        </div>

        <div className={styles.container}>
          <RotatingImagesGear
            rotation={
              (ratio > 0 ? (ratio < MAX_RATIO ? -ratio : -MAX_RATIO) : 0) * 45 +
              30
            }
            reverse
            images={[kcd1.src, kcd3.src]}
          />
          <div
            className={styles.info_container}
            style={{
              top: "-20vh",
            }}
          >
            <h2 className={[styles.h2, MillionDreams.className].join(" ")}>
              Kictehndotcom
            </h2>
            <ChipGroup>
              <DjangoChip />
              <ReactChip />
              <DRFChip />
              <JSChip />
              <FigmaChip />
            </ChipGroup>
            <div className={styles.text}>
              Full Stack website for the modular kitchen design and development
              company kitchendotcom. It features{" "}
              <b>a dynamic portfolio, a blog sub-site and a price estimator</b>{" "}
              for their company. It comes with <b>firebase powered</b> mobile
              authentication, helping the company attract hundreds of new
              customers every month.
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
              Vistaar
            </h2>
            <ChipGroup>
              <Chip color={{ r: 255, g: 100, b: 100 }}>HTML5</Chip>
              <JSChip />
              <Chip color={{ r: 100, g: 100, b: 255 }}>css3</Chip>
              <Chip>Locomotive</Chip>
              <Chip>Scroll Effects</Chip>
            </ChipGroup>
            <div className={styles.text}>
              Website for eastern India&apos;s <b>biggest debating festival</b>.
              It uses locomotive js to power its appealing{" "}
              <b>scroll animations and a unique horizontal layout</b>. The
              website is designed to be minimal while being elegant and
              appealing to be able to cater to the
              <b> 1.5k+ participants</b> from a dozen different reputed colleges
              that were expected to participate in the event.
            </div>
          </div>
          <RotatingImagesGear
            rotation={
              (ratio > 0 ? (ratio < MAX_RATIO ? -ratio : -MAX_RATIO) : 0) * 45 +
              30
            }
            images={[vistaar_3.src, vistaar_1.src, vistaar_5.src]}
          />
        </div>
        {/* <div className={styles.container}>
          <div
            className={styles.info_container}
            style={{
              bottom: "-20vh",
            }}
          >
            <h2 className={[styles.h2, MillionDreams.className].join(" ")}>
              Attendance Tracker
            </h2>
            <ChipGroup>
              <Chip>React Native</Chip>
              <TSChip />
            </ChipGroup>
            <div className={styles.text}>
              A <b>cross platform mobile application</b> for students to track
              their attendances in various courses easily. An{" "}
              <b>easy to use UI</b> allows anyone to use the app and gain
              helpful insights about their statictics and gain insights like the
              current status quo and how many classes they need to attend to
              catch up to their target level.
            </div>
          </div>
          <RotatingImagesGear
            rotation={
              (ratio > 0 ? (ratio < MAX_RATIO ? -ratio : -MAX_RATIO) : 0) * 45
            }
            images={[atd2.src, atd4.src, atd3.src, atd1.src]}
          />
        </div> */}
        <div className={styles.container}>
          <RotatingImagesGear
            rotation={
              (ratio > 0 ? (ratio < MAX_RATIO ? ratio : MAX_RATIO) : 0) * 45
            }
            reverse
            images={[gs2.src, gs1.src, gs3.src]}
          />
          <div
            className={styles.info_container}
            style={{
              top: "-20vh",
            }}
          >
            <h2 className={[styles.h2, MillionDreams.className].join(" ")}>
              Gastos
            </h2>
            <ChipGroup>
              <DjangoChip />
              <ReactChip />
              <ReduxChip />
              <DRFChip />
              <TSChip />
              <PostgresChip />
            </ChipGroup>
            <div className={styles.text}>
              Built on Django, React and Typescript, Gastos is a
              <b> finance-tracking app</b> which helps you keep track of your
              expenses and incomes. It comes with features like{" "}
              <b>
                multi-device support, custom color coded labels, multi wallet
                tracking
              </b>{" "}
              and helps users find exactly where they are overspending by giving
              them about <b>daily, weekly and monthly insights</b>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
