/* eslint-disable @typescript-eslint/no-explicit-any */
// src/Model.tsx
import { forwardRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = forwardRef(
  ({ url, color }: { url: string; color: string }, ref: any) => {
    const gltf = useLoader(GLTFLoader, url);

    useEffect(() => {
      gltf.scene.traverse((node) => {
        if ((node as any).isMesh) {
          (node as any).castShadow = true;
          (node as any).receiveShadow = true;

          // add color to the mesh
          (node as any).material.color.set(color);
        }
      });
    }, [gltf]);

    return <primitive object={gltf.scene} ref={ref} />;
  },
);

export default Model;
