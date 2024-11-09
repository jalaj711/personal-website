import styles from "./index.module.css";
import { MillionDreams } from "src/fonts";
import { createRef, memo } from "react";

function thetaToOpacity(theta: number) {
  if (theta < 2.6) return 0;
  if (theta < 4) return (theta - 2.6) / 1.4;
  if (theta < 5.3) return 1;
  if (theta < 7) return 1 - (theta - 5.3) / 1.7;
  return 0;
}

function ContactElement(props: {
  theta: number;
  r: number;
  name: string;
  link: string;
}) {
  return (
    <div
      className={styles.contact_element}
      style={{
        transform: `translateX(calc(${
          Math.cos(props.theta) * props.r
        }px - 50%)) translateY(${Math.sin(props.theta) * props.r}px)`,
        opacity: `${thetaToOpacity(props.theta)}`,
      }}
    >
      <a href={props.link} target="_blank">
        <h1 className={[styles.text, MillionDreams.className].join(" ")}>
          {props.name}
        </h1>
      </a>
    </div>
  );
}

function ConnectSection(props: { ratio: number }) {
  const { ratio } = props;
  const MAX_RATIO = 4;
  const elemRef = createRef<HTMLDivElement>();

  const theta = (((ratio / MAX_RATIO) * 720 + 135) * Math.PI) / 180;
  const r = Math.max(window.innerWidth, window.innerHeight) / 4;
  return (
    <section className={styles.section}>
      <div
        className={[
          styles.container,
          ratio > 0 && ratio < MAX_RATIO && styles.in_view,
          ratio >= MAX_RATIO-0.5 && styles.out_of_view,
        ].join(" ")}
        ref={elemRef}
      >
        <div className={styles.headers}>
          <h1 className={[styles.h1, MillionDreams.className].join(" ")}>
            Skills
          </h1>
        </div>
        <div className={[styles.text_container].join(" ")} ref={elemRef}>
          <ContactElement
            name="Github"
            link="https://github.com/jalaj711/"
            theta={theta}
            r={r}
          />
          <ContactElement
            name="LinkedIn"
            link="https://www.linkedin.com/in/jalaj-kumar-b29248232/"
            theta={theta - Math.PI / 4}
            r={r}
          />
          <ContactElement
            name="Mail Me"
            link="mailto:jalaj1318@gmail.com"
            theta={theta - (2 * Math.PI) / 4}
            r={r}
          />
          <ContactElement
            name="Instagram"
            link="https://www.instagram.com/jalajkumar_/"
            theta={theta - (3 * Math.PI) / 4}
            r={r}
          />
          <ContactElement
            name="Github"
            link="https://github.com/jalaj711/"
            theta={theta - (4 * Math.PI) / 4}
            r={r}
          />
          <ContactElement
            name="LinkedIn"
            link="https://www.linkedin.com/in/jalaj-kumar-b29248232/"
            theta={theta - (5 * Math.PI) / 4}
            r={r}
          />
          <ContactElement
            name="Mail Me"
            link="mailto:jalaj1318@gmail.com"
            theta={theta - (6 * Math.PI) / 4}
            r={r}
          />
          <ContactElement
            name="Instagram"
            link="https://www.instagram.com/jalajkumar_/"
            theta={theta - (7 * Math.PI) / 4}
            r={r}
          />
        </div>
      </div>
    </section>
  );
}

export default memo(
  ConnectSection,
  (_, next) => next.ratio < -1 || next.ratio > 4
);
