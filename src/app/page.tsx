"use client";
import { useEffect, useRef, useState } from "react";
import Cache from "src/utils/cache";
import Loader from "../components/Loader";
// import AboutSection from "src/components/AboutSection";

// Just a sample require manifest for testing purposes
const _require_manifest = {
  images: [
    {
      loadfn: () => import("../../public/images/2.webp"),
      weight: 40,
      // name: "image 100",
    },
    {
      loadfn: () => import("../../public/images/3.webp"),
      weight: 40,
      // name: "image 100",
    },
    {
      loadfn: () => import("../../public/images/bg.webp"),
      weight: 40,
      // name: "image 100",
    },
    {
      loadfn: () => import("../../public/images/landing_bg.webp"),
      weight: 40,
      // name: "image 100",
    },
    {
      loadfn: () => import("../../public/images/landing_bg_layer_2.webp"),
      weight: 40,
      // name: "image 100",
    },
    {
      loadfn: () => import("../../public/images/landing_bg_layer_3.webp"),
      weight: 40,
      // name: "image 100",
    },
    {
      loadfn: () => import("../../public/images/projects/gs1.webp"),
      weight: 40,
      // name: "image 100",
    },
    {
      loadfn: () => import("../../public/images/projects/gs2.webp"),
      weight: 40,
      // name: "image 100",
    },
    {
      loadfn: () => import("../../public/images/projects/gs3.webp"),
      weight: 40,
      // name: "image 100",
    },
    {
      loadfn: () => import("../../public/images/projects/jb1.webp"),
      weight: 40,
      // name: "image 100",
    },
    {
      loadfn: () => import("../../public/images/projects/jb2.webp"),
      weight: 40,
      // name: "image 100",
    },
    {
      loadfn: () => import("../../public/images/projects/jb3.webp"),
      weight: 40,
      // name: "image 100",
    },
    {
      loadfn: () => import("../../public/images/projects/kcd1.webp"),
      weight: 40,
      // name: "image 100",
    },
    {
      loadfn: () => import("../../public/images/projects/kcd3.webp"),
      weight: 40,
      // name: "image 100",
    },
    {
      loadfn: () => import("../../public/images/projects/vistaar_1.webp"),
      weight: 40,
      // name: "image 100",
    },
    {
      loadfn: () => import("../../public/images/projects/vistaar_3.webp"),
      weight: 40,
      // name: "image 100",
    },
    {
      loadfn: () => import("../../public/images/projects/vistaar_5.webp"),
      weight: 40,
      // name: "image 100",
    },
  ],
  home: [
    {
      loadfn: () => import("../components/Home"),
      weight: 200,
      // name: "main component",
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
    cache.load_all((p, t, HC) => {
      setLoadTargetQueue((q) => [...q, { p, t }]);
      if (HC) setHomeComponent((() => HC));
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
            timeoutRef.current = setTimeout(updateLoaded, 10);
            return curr;
          }
          timeoutRef.current = setTimeout(updateLoaded, 10);
          return curr + 1;
        });
      } else {
      }
    };
    timeoutRef.current = setTimeout(updateLoaded, 10);
  }, [loadTargetQueue]);

  return HomeComponent && loaded === 100 ? (
    <HomeComponent/>
  ) : (
    <Loader percentage={loaded} text={loadedText} />
  );
}
