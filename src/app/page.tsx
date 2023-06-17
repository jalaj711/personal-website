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
import Landing from "src/components/Landing";

export default function Home() {
  const [ratio, setRatio] = useState(0);
  console.log(ratio);

  useEffect(() => {
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    //@ts-ignore
    navigator.msMaxTouchPoints > 0
      ? window.addEventListener("touchmove", () => {
          setRatio(window.scrollY / window.innerHeight);
        })
      : window.addEventListener("scroll", () => {
          setRatio(window.scrollY / window.innerHeight);
        });
  }, []);
  return (
    <main className={styles.main}>
      <Landing />
      <Section1 ratio={ratio - 1} />
      <Section2 ratio={ratio - 5} />
      <Section3 ratio={ratio - 9} />
      <Section4 ratio={ratio - 13} />
    </main>
  );
}
