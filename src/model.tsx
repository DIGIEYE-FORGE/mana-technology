import React, { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

interface ModelProps {
  url: string;
}

const Model: React.FC<ModelProps> = ({ url }) => {
  const gltf = useLoader<GLTF>(GLTFLoader, url);

  useEffect(() => {
    gltf.scene.traverse((node) => {
      if ("isMesh" in node) {
        (node as THREE.Mesh).castShadow = true;
        (node as THREE.Mesh).receiveShadow = true;
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} />;
};

export default Model;
