import { useEffect, useRef } from "react";
import { pannellum } from "@/pannellum";
import { scenes } from "./data";

export default function Projection360Page() {
  const { current: id } = useRef(
    `panorama-${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`,
  );
  const viewer = useRef<any>(null);

  useEffect(() => {
    const pannellumScenes: any = {};
    scenes.forEach((scene) => {
      pannellumScenes[scene.id] = {
        panorama: scene.path,
        type: "equirectangular",
        compass: false,
        friction: 0,
        mouseZoom: false,
        showZoomCtrl: false,
        showFullscreenCtrl: false,
        hotSpots: scene.hotSpots,
      };
    });

    viewer.current = pannellum.viewer(id, {
      default: {
        firstScene: "scene1",
        autoLoad: true,
      },
      scenes: pannellumScenes,
    });

    return () => {
      viewer.current.destroy();
    };
  }, [id, scenes]);

  return <div id={id} className="flex h-screen w-full flex-grow"></div>;
}
