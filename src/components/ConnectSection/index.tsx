import styles from "./index.module.css";
import { MillionDreams } from "src/fonts";
import { createRef, memo } from "react";

function ConnectSection(props: { ratio: number }) {
  const { ratio } = props;
  const MAX_RATIO = 3;
  const elemRef = createRef<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div
        className={[
          styles.container,
          ratio > 0 && ratio < MAX_RATIO && styles.in_view,
          ratio >= MAX_RATIO && styles.out_of_view,
        ].join(" ")}
        ref={elemRef}
      >
        <div className={styles.headers}>
          <h1 className={[styles.h1, MillionDreams.className].join(" ")}>
            Let&apos;s connect
          </h1>
        </div>
      </div>
      <div className={[styles.text_container].join(" ")} ref={elemRef}>
        <div
          className={styles.contact_element}
          style={{
            transform: `translateX(${
              ratio > 0 && ratio < MAX_RATIO
                ? Math.sin((ratio / MAX_RATIO) * 30) * 50
                : 0
            }%)`,
          }}
        >
          <a href="https://github.com/jalaj711/" target="_blank">
            <h1 className={[styles.text, MillionDreams.className].join(" ")}>
              GitHub
            </h1>
          </a>
        </div>
        <div
          className={styles.contact_element}
          style={{
            transform: `translateX(${
              ratio > 0 && ratio < MAX_RATIO
                ? Math.sin((ratio / MAX_RATIO) * -30) * 50
                : 0
            }%)`,
          }}
        >
          <a
            href="https://www.linkedin.com/in/jalaj-kumar-b29248232/"
            target="_blank"
          >
            <h1 className={[styles.text, MillionDreams.className].join(" ")}>
              LinkedIn
            </h1>
          </a>
        </div>
        <div
          className={styles.contact_element}
          style={{
            transform: `translateX(${
              ratio > 0 && ratio < MAX_RATIO
                ? Math.sin((ratio / MAX_RATIO) * 30) * 50
                : 0
            }%)`,
          }}
        >
          <h1 className={[styles.text, MillionDreams.className].join(" ")}>
            Mail Me
          </h1>
        </div>
        <div
          className={styles.contact_element}
          style={{
            transform: `translateX(${
              ratio > 0 && ratio < MAX_RATIO
                ? Math.sin((ratio / MAX_RATIO) * -30) * 50
                : 0
            }%)`,
          }}
        >
        <a
          href="https://www.instagram.com/jalajkumar_/"
          target="_blank"
        >
          <h1 className={[styles.text, MillionDreams.className].join(" ")}>
            Instagram
          </h1>
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(ConnectSection, (_, next) => next.ratio < -1 || next.ratio > 2)
