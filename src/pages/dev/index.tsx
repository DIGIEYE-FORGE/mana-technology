import { useEffect, useRef } from "react";
import { pannellum } from "@/pannellum";

export default function DevPage() {
  const { current: id } = useRef(
    `panorama-${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`,
  );
  const viewer = useRef<any>(null);

  useEffect(() => {
    viewer.current = pannellum.viewer(id, {
      autoLoad: true,
      panorama: "https://pannellum.org/images/cerro-toco-0.jpg",
      dynamicUpdate: true,
      compass: false,
      friction: 0,
      mouseZoom: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      type: "equirectangular",
    });

    return () => {
      viewer.current.destroy();
    };
  }, [id]);
  return (
    // <main className="grid place-content-center">
    <div id={id} className="flex h-screen w-full flex-grow rounded-xl"></div>
    // </main>
  );
}
