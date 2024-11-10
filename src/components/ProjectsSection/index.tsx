"use client";

import styles from "./index.module.css";
// import { MillionDreams, NT } from "src/fonts";
import vistaar_1 from "../../../public/images/projects/vistaar_1.webp";
import vistaar_3 from "../../../public/images/projects/vistaar_3.webp";
import vistaar_5 from "../../../public/images/projects/vistaar_5.webp";
import gs1 from "../../../public/images/projects/xv62.png";
import gs2 from "../../../public/images/projects/xv61.png";
import gs3 from "../../../public/images/projects/xv63.png";
import jb1 from "../../../public/images/projects/jb1.png";
import jb2 from "../../../public/images/projects/jb2.png";
import jb3 from "../../../public/images/projects/jb3.png";
import kcd1 from "../../../public/images/projects/kcd1.webp";
import kcd3 from "../../../public/images/projects/kcd3.webp";
import { createRef, useEffect, memo, useState } from "react";
import { MillionDreams } from "src/fonts";
import Chip, {
  ChipGroup
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

function ProjectsSection(props: { ratio: number }) {
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
        <div className={styles.container} style={{width: "100vw"}}>
          <div className={styles.headers}>
            <h1 className={[styles.h1, MillionDreams.className].join(" ")}>
              Talk is cheap <br/><br/> Show me the code.
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
              <Chip>Django</Chip>
              <Chip>React</Chip>
              <Chip>Redux</Chip>
              <Chip>DRF</Chip>
              <Chip>TS</Chip>
              <Chip>Postgres</Chip>
            </ChipGroup>
            <div className={styles.text}>
              It&apos; a <b>full blown ERP solution</b> for Jewellery stores. It
              features customer, supplier and staff management, custom billing
              solution, multi-user billing and real time price updates. It is
              highly scalable and is currently in use by multiple stores helping
              them manage{" "}
              <b>
                over 15k+ customers, 7k+ products and handling INR 60crores+ in
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
              Content Display Manager
            </h2>
            <ChipGroup>
              <Chip>Django</Chip>
              <Chip>React</Chip>
              <Chip>DRF</Chip>
              <Chip>Redis</Chip>
              <Chip>Celery</Chip>
            </ChipGroup>
            <div className={styles.text}>
              An application to convert <b>Android TVs to Smart Signages</b>. This app
              allows the end user to control thousands of displays from a 
              single endpoint helping clients seamlessly enhance customer 
              engagement. The application is currently used by enterprise clients to manage over 
              <b> 500 displays</b> running more than <b>300GB of content</b> for a total
                of <b>4,500+ hours of cumulative daily runtime</b> 
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
              <Chip>HTML5</Chip>
              <Chip >JS</Chip>
              <Chip >css3</Chip>
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
              <Chip>TS</Chip>
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
              Risc-V XV6 OS
            </h2>
            <ChipGroup>
              <Chip>C</Chip>
              <Chip>ASM</Chip>
              <Chip>GDB</Chip>
              <Chip>GCC</Chip>
              <Chip>QEMU</Chip>
            </ChipGroup>
            <div className={styles.text}>
              Built on C and Assembly Language, this is an
              <b> operating system</b> based on the original XV6 system. 
              It comes with features like{" "}
              <b>
                copy on write fork, superpages and threading.
              </b>{" "}. It supports new system calls like kpgtbl, trace, backtrace & sigalarm
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ProjectsSection, (_, next) => next.ratio < -1 || next.ratio > 4)
