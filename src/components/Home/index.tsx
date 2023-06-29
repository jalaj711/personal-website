"use client";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import AppsSection from "src/components/AppsSection";
import WorkExperiencesSection from "src/components/WorkExperiencesSection";
import ProjectsSection from "src/components/ProjectsSection";
import ReferencesSection from "src/components/ReferencesSection";
import Landing from "src/components/Landing";
import ConnectSection from "src/components/ConnectSection";
// import AboutSection from "src/components/AboutSection";

export default function Home() {
  const [ratio, setRatio] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setRatio(window.scrollY / window.innerHeight);
    });
  }, []);
  return (
    <main className={styles.main}>
      <Landing />
      <AppsSection ratio={ratio - 1} />
      <ProjectsSection ratio={ratio - 5} />
      <WorkExperiencesSection ratio={ratio - 9} />
      <ReferencesSection ratio={ratio - 13} />
      {/* <AboutSection ratio={ratio-17} /> */}
      <ConnectSection ratio={ratio - 17} />
    </main>
  );
}
