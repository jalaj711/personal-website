"use client";
import { useEffect, useRef, useState } from "react";
import Cache from "src/utils/cache";
import Loader from "../components/Loader";
// import AboutSection from "src/components/AboutSection";

const _require_manifest = {
  images: [
    {
      loadfn: () => import("../../public/images/projects/gs1.webp"),
      weight: 40,
      name: "image 100",
    },
  ],
  components: [
    {
      loadfn: () => import("../components/AboutSection"),
      weight: 100,
      name: "web components 2",
    },
    {
      loadfn: () => import("../components/AppsSection"),
      weight: 100,
      name: "web components 3",
    },
    {
      loadfn: () => import("../components/Chip"),
      weight: 10,
      name: "web components 4",
    },
    {
      loadfn: () => import("../components/ConnectSection"),
      weight: 100,
      name: "web components 5",
    },
    {
      loadfn: () => import("../components/EnteringAnimation"),
      weight: 100,
      name: "web components 6",
    },
    {
      loadfn: () => import("../components/Landing"),
      weight: 100,
      name: "web components 7",
    },
    {
      loadfn: () => import("../components/ProjectsSection"),
      weight: 100,
      name: "web components 8",
    },
    {
      loadfn: () => import("../components/ConnectSection"),
      weight: 100,
      name: "web components 9",
    },
  ],
  home: [
    {
      loadfn: () => import("../components/Home"),
      weight: 200,
      name: "main component",
    },
  ],
};

export default function Home() {
  const [loaded, setLoaded] = useState(0);
  const [loadTargetQueue, setLoadTargetQueue] = useState<
    Array<{ p: Number; t: string }>
  >([]);
  const [loadedText, setLoadedText] = useState("");
  const [HomeComponent, setHomeComponent] = useState<React.FC | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const cache = new Cache(_require_manifest);
    cache.load_all((p, t) => {
      setLoadTargetQueue((q) => [...q, { p, t }]);
    });
  }, []);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const updateLoaded = () => {
      if (loadTargetQueue.length > 0) {
        setLoaded((curr) => {
          if (curr == 100) return curr;
          if (curr == loadTargetQueue[0].p) {
            setLoadedText(loadTargetQueue[0].t);
            setLoadTargetQueue(loadTargetQueue.slice(1));
            timeoutRef.current = setTimeout(updateLoaded, 20);
            return curr;
          }
          timeoutRef.current = setTimeout(updateLoaded, 20);
          return curr + 1;
        });
      } else {
      }
    };
    timeoutRef.current = setTimeout(updateLoaded, 20);
  }, [loadTargetQueue]);

  return HomeComponent ? (
    <HomeComponent />
  ) : (
    <Loader percentage={loaded} text={loadedText} />
  );
}
