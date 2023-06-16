"use client";
import styles from "./page.module.css";
import { Brush, NT } from "src/fonts";
import primaryBg from "../../public/images/2.webp";
import secondaryBg from "../../public/images/3.webp";
import { useEffect, useRef, useState } from "react";
import Section1 from "src/components/Section1";
import Section2 from "src/components/Section2";

export default function Home() {
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setRatio(window.scrollY / window.innerHeight);
    });
  }, []);
  return (
    <main>
      <Section1 ratio={ratio} />
      <Section2 ratio={ratio - 4 /** 3 is the offset because of section 1 */} />
    </main>
  );
}
