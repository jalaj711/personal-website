"use client";

import styles from "./index.module.css";
import { MillionDreams } from "src/fonts";

export default function ReferencesSection() {
  return (
    <section className={styles.section}>
      <div className={[styles.section_track, styles.in_view].join(" ")}>
        <div className={styles.container}>
          <div className={styles.headers}>
            <h1 className={[styles.h1, MillionDreams.className].join(" ")}>
              But why should we hire you?
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
