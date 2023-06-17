"use client";
import styles from "./page.module.css";
import { Brush, NT } from "src/fonts";
import primaryBg from "../../public/images/2.webp";
import secondaryBg from "../../public/images/3.webp";
import { useEffect, useRef, useState } from "react";
import Section1 from "src/components/Section1";
import Section2 from "src/components/Section2";
import Section3 from "src/components/Section3";
import Section4 from "src/components/Section4";

export default function Home() {
  const [ratio, setRatio] = useState(0);
  console.log(ratio);

  useEffect(() => {
     document.body.addEventListener("scroll", () => {
          setRatio(window.scrollY / window.innerHeight);
        });
  }, []);
  return (
    <main className={styles.main}>
      <Section1 ratio={ratio} />
      <Section3 ratio={ratio - 4} />
      <Section2 ratio={ratio - 8 /** 3 is the offset because of section 1 */} />
      <Section4 ratio={ratio - 12} />
    </main>
  );
}
