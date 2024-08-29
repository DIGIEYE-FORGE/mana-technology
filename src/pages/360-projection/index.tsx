import { useCallback, useEffect, useRef } from "react";
import { pannellum } from "@/pannellum";
import { HotSpot, Scene } from "@/utils";
import { scenes } from "./data";

export function customMarker(hotSpotDiv: HTMLElement, args: HotSpot): void {
  hotSpotDiv.classList.remove("pnlm-hotspot", "pnlm-sprite");

  if (args.label) {
    hotSpotDiv.classList.add("custom-label");
    hotSpotDiv.setAttribute("data-label", args.label);
  } else {
    hotSpotDiv.classList.add("custom-icon-container");

    const icon = document.createElement("img");
    icon.classList.add("custom-icon");
    icon.src =
      args.markerType === "backward"
        ? "/src/assets/Arrow-Blue.png"
        : "/src/assets/Arrow-White.png";

    const {
      rotateX = 290,
      rotateY = 0,
      rotateZ = 0,
      scale = 1,
    } = args.transform || {};
    icon.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;

    hotSpotDiv.appendChild(icon);
  }
}

export default function Projection360Page() {
  const id = useRef(`panorama-${Math.floor(Math.random() * 90000) + 10000}`);
  const viewer = useRef<any>(null);

  const initializeScene = useCallback(
    (scene: Scene) => ({
      panorama: scene.path,
      type: "equirectangular",
      compass: false,
      friction: 0,
      mouseZoom: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      hotSpots: scene.hotSpots.map((hotSpot) => ({
        ...hotSpot,
        createTooltipFunc: customMarker,
        createTooltipArgs: {
          label: hotSpot.label,
          transform: hotSpot.transform,
          markerType: hotSpot.markerType || "forward",
        },
      })),
    }),
    [],
  );

  useEffect(() => {
    const pannellumScenes: Record<string, any> = {};

    // Load only the first scene initially
    pannellumScenes[scenes[0].id] = initializeScene(scenes[0]);

    // Initialize the viewer with the first scene
    viewer.current = pannellum.viewer(id.current, {
      default: {
        firstScene: scenes[0].id,
        autoLoad: true,
      },
      scenes: pannellumScenes,
    });

    // Function to clear hotspots before loading new ones
    const clearHotspots = () => {
      const hotspots = document.querySelectorAll(".pnlm-hotspot-base");
      hotspots.forEach((hotspot) => hotspot.remove());
    };

    // Listen to scene change events
    viewer.current.on("scenechange", clearHotspots);

    // Load the other scenes in the background after the first scene is loaded
    const loadRemainingScenes = () => {
      scenes.slice(1).forEach((scene) => {
        pannellumScenes[scene.id] = initializeScene(scene);
      });

      // Add the remaining scenes to the viewer
      viewer.current.addScene(pannellumScenes);
    };

    setTimeout(loadRemainingScenes, 100); // Adjust the timeout as needed

    return () => {
      viewer.current.destroy();
    };
  }, [id, initializeScene]);

  return <div id={id.current} className="flex h-screen w-full flex-grow"></div>;
}
