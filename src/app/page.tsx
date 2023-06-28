"use client";
import { useEffect, useRef, useState } from "react";
import Cache from "src/utils/cache";
import Loader from "../components/Loader";
// import AboutSection from "src/components/AboutSection";

const request_manifest = [
  { loadfn: () => import("../components/Loader"), weight: 100, name: "web components 1" },
  { loadfn: () => import("../components/AboutSection"), weight: 100, name: "web components 2" },
  { loadfn: () => import("../components/AppsSection"), weight: 100, name: "web components 3" },
  { loadfn: () => import("../components/Chip"), weight: 10, name: "web components 4" },
  { loadfn: () => import("../components/ConnectSection"), weight: 100, name: "web components 5" },
  { loadfn: () => import("../components/EnteringAnimation"), weight: 100, name: "web components 6" },
  { loadfn: () => import("../components/Landing"), weight: 100, name: "web components 7" },
  { loadfn: () => import("../components/ProjectsSection"), weight: 100, name: "web components 8" },
  { loadfn: () => import("../components/ConnectSection"), weight: 100, name: "web components 9" },
];

export default function Home() {
  const [loaded, setLoaded] = useState(0);
  const [loadTarget, setLoadTarget] = useState(0);
  const [loadedText, setLoadedText] = useState("");
  const [HomeComponent, setHomeComponent] = useState<React.FC | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const cache = new Cache(request_manifest);
    cache.load_all((p, t) => {
      console.log(p, t);
      setLoadTarget(p);
      setLoadedText(t);
    });
  }, []);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const updateLoaded = () => {
      setLoaded((load) => (load === loadTarget ? load : load + 1));
      timeoutRef.current = setTimeout(updateLoaded, 50);
    };
    timeoutRef.current = setTimeout(updateLoaded, 50);
  }, [loadTarget]);

  return HomeComponent ? (
    <HomeComponent />
  ) : (
    <Loader percentage={loaded} text={loadedText} />
  );
}
