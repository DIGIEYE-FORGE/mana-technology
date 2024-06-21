/* eslint-disable @typescript-eslint/no-explicit-any */
// src/Model.tsx
import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model({ url }: { url: string }) {
  const gltf = useLoader(GLTFLoader, url);

  useEffect(() => {
    gltf.scene.traverse((node) => {
      if ((node as any).isMesh) {
        (node as any).castShadow = true;
        (node as any).receiveShadow = true;
        // add color to the mesh
        (node as any).material.color.set("white");
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} />;
}

export default Model;
