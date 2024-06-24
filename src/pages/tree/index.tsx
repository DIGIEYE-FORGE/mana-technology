/* eslint-disable @typescript-eslint/no-explicit-any */
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { PlaneGeometry } from "three";
import Model from "@/components/models";
import { Suspense, useRef } from "react";
import Loader from "@/components/loader";

extend({ PlaneGeometry });

function Loader3D() {
  return (
    <Html center>
      <div className="flex h-full w-full items-center justify-center">
        <Loader />
      </div>
    </Html>
  );
}

function RotatingModel({ modelRef }: { modelRef: any }) {
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001; // Adjust rotation speed as needed
    }
  });

  return null; // This component doesn't render anything visible
}

const machinesImages = [
  "/machine-01.svg",
  "/machine-02.svg",
  "/machine-03.svg",
  "/machine-04.svg",
  "/machine-05.svg",
  "/machine-06.svg",
];

function TreePage() {
  const modelRef = useRef();

  return (
    <div className="h-full w-full">
      <div className="absolute bottom-0 left-0 h-full w-full overflow-hidden">
        {machinesImages.map((image, index) => {
          return (
            <div
              className="absolute inset-x-[14rem] bottom-[8rem]"
              style={{
                transform: `rotate(${(180 / (machinesImages.length - 1)) * index}deg) `,
              }}
            >
              <img
                src={image}
                alt={image}
                className="absolute bottom-1/2 left-0 h-40"
                style={{
                  transform: `translateY(50%) rotate(-${(180 / (machinesImages.length - 1)) * index}deg) `,
                }}
              />
            </div>
          );
        })}
      </div>
      <Canvas
        shadows
        camera={{
          position: [0, 20, 40],
          fov: 35,
          localToWorld(vector) {
            return vector;
          },
        }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Suspense fallback={<Loader3D />}>
          <Model
            url="https://storage.googleapis.com/nextronic/mine00000017.glb"
            ref={modelRef}
          />
        </Suspense>
        <RotatingModel modelRef={modelRef} />
        <OrbitControls zoomToCursor />
      </Canvas>
    </div>
  );
}
export default TreePage;
