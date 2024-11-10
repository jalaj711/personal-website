"use client";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import AppsSection from "src/components/AppsSection";
import WorkExperiencesSection from "src/components/WorkExperiencesSection";
import ProjectsSection from "src/components/ProjectsSection";
import ReferencesSection from "src/components/ReferencesSection";
import Landing from "src/components/Landing";
import ConnectSection from "src/components/ConnectSection";
import AboutSection from "src/components/AboutSection";
import KeepScrolling from "../KeepScrolling";
import SkillsSection from "src/components/SkillsSection";
import Footer from "../Footer";

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
      <AboutSection />
      <SkillsSection ratio={ratio - 6} />
      <ProjectsSection ratio={ratio - 10} />
      <WorkExperiencesSection ratio={ratio - 14} />
      <ReferencesSection ratio={ratio - 18} />
      <ConnectSection ratio={ratio - 22} />
      <KeepScrolling scrolled={ratio > 0.1} done={ratio >= 23.5} />
      <Footer />
    </main>
  );
}
