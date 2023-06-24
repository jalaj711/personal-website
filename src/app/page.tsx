"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Section1 from "src/components/Section1";
import Section2 from "src/components/Section2";
import Section3 from "src/components/Section3";
// import Section4 from "src/components/Section4";
import Landing from "src/components/Landing";
import Section5 from "src/components/Section5";

export default function Home() {
  const [ratio, setRatio] = useState(0);
  console.log(ratio);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setRatio(window.scrollY / window.innerHeight);
    });
  }, []);
  return (
    <main className={styles.main}>
      <Landing />
      <Section1 ratio={ratio - 1} />
      <Section3 ratio={ratio - 5} />
      <Section2 ratio={ratio - 9} />
      {/* <Section4 ratio={ratio - 13} /> */}
      <Section5 ratio={ratio - 13} />
    </main>
  );
}
