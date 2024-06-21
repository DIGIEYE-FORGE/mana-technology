/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface ModelProps {
  url: string;
}

const Model: React.FC<ModelProps> = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);

  useEffect(() => {
    gltf.scene.traverse((node) => {
      if ("isMesh" in node) {
        (node as any).castShadow = true;
        (node as any).receiveShadow = true;
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} />;
};

export default Model;
