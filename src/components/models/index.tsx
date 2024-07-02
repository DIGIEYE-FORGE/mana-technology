/* eslint-disable @typescript-eslint/no-explicit-any */
// src/Model.tsx
import { forwardRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import * as THREE from "three";
import React from "react";

// void useThree;
// const vertexShader = `
// varying vec3 vPosition;

// void main() {
//   vPosition = position;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
// }
// `;

// const fragmentShader = `
// uniform vec3 color1;
// uniform vec3 color2;
// varying vec3 vPosition;

// void main() {
//   float gradient = (vPosition.y + 2.0) / 2.0; // Normalize y to range [0, 1]
//   gl_FragColor = vec4(mix(color1, color2, gradient), 2.0);
// }
// `;
const colorsMap = new Map<string, string>();

const Model = forwardRef(
  (
    {
      url,
      onLoad,
      hovered,
    }: { url: string; onLoad: () => void; hovered?: string },
    ref: any,
  ) => {
    const gltf = useLoader(GLTFLoader, url);
    // const shaderMaterial = new THREE.ShaderMaterial({
    //   uniforms: {
    //     color1: { value: new THREE.Color(color1) },
    //     color2: { value: new THREE.Color(color2) },
    //   },
    //   vertexShader,
    //   fragmentShader,
    // });

    React.useEffect(() => {
      if (gltf) {
        onLoad();
      }
    }, [gltf, onLoad, hovered]);

    gltf.scene.traverse((node) => {
      if ((node as any).isMesh) {
        (node as any).castShadow = true;
        (node as any).receiveShadow = true;
        if (!colorsMap.has((node as any)?.name)) {
          colorsMap.set(
            (node as any)?.name,
            "#" + (node as any).material.color.getHexString(),
          );
        }
        if ((node as any)?.name === hovered) {
          (node as any).material.color.set(0xff0000);
        } else if (colorsMap.has((node as any)?.name)) {
          (node as any).material.color.set(colorsMap.get((node as any)?.name));
        }
      }
    });
    console.log(colorsMap);
    // return <primitive object={gltf.scene} ref={ref} />;
    return <primitive object={gltf.scene} ref={ref} />;
  },
);

export default Model;
