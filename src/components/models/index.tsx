/* eslint-disable @typescript-eslint/no-explicit-any */
// src/Model.tsx
import { forwardRef } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import React from "react";

void useThree;
const vertexShader = `
varying vec3 vPosition;

void main() {
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform vec3 color1;
uniform vec3 color2;
varying vec3 vPosition;

void main() {
  float gradient = (vPosition.y + 2.0) / 2.0; // Normalize y to range [0, 1]
  gl_FragColor = vec4(mix(color1, color2, gradient), 2.0);
}
`;

const Model = forwardRef(
  (
    {
      url,
      color1,
      color2,
      onLoad,
    }: { url: string; color1: string; color2: string; onLoad: () => void },
    ref: any,
  ) => {
    const gltf = useLoader(GLTFLoader, url);
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(color1) },
        color2: { value: new THREE.Color(color2) },
      },
      vertexShader,
      fragmentShader,
    });

    React.useEffect(() => {
      if (gltf) {
        onLoad();
      }
    }, [gltf, onLoad]);

    gltf.scene.traverse((node) => {
      if ((node as any).isMesh) {
        (node as any).castShadow = true;
        (node as any).receiveShadow = true;

        (node as any).material = shaderMaterial;
      }
    });
    // return <primitive object={gltf.scene} ref={ref} />;
    return <primitive object={gltf.scene} ref={ref} />;
  },
);

export default Model;
