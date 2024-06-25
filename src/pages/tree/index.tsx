/* eslint-disable @typescript-eslint/no-explicit-any */
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { PlaneGeometry } from "three";
import Model from "@/components/models";
import { Suspense, useRef, useState } from "react";
import Loader from "@/components/loader";

extend({ PlaneGeometry });

function Loader3D() {
  return (
    <Html center>
      {/* <div className="absolute top-0 flex h-full w-full items-center justify-center">
        <Loader />
      </div> */}
    </Html>
  );
}

function RotatingModel({ modelRef }: { modelRef: any }) {
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002; // Adjust rotation speed as needed
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

  const [loading, setLoading] = useState(true);
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {loading && (
        <div className="absolute left-0 top-[4.2rem] z-[999] flex h-[calc(100%-5rem)] w-full items-center justify-center">
          <Loader />
        </div>
      )}
      {!loading && (
        <div className="absolute bottom-0 left-0 h-full w-full overflow-hidden">
          {machinesImages.map((image, index) => {
            return (
              <div
                key={image}
                className="absolute inset-x-[6rem] bottom-[8rem]"
                style={{
                  transform: `rotate(${(180 / (machinesImages.length - 1)) * index}deg) `,
                }}
              >
                <img
                  src={image}
                  alt={image}
                  className="absolute bottom-1/2 left-0 h-60"
                  style={{
                    transform: `translateY(50%) rotate(-${(180 / (machinesImages.length - 1)) * index}deg) `,
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
      <Canvas
        style={{
          width: "70rem",
          height: "40rem",
          position: "absolute",
          bottom: "0",
        }}
        shadows
        camera={{
          position: [0, 60, 40],
          fov: 28,
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
            color2="#96CFFE"
            color1="#96CFFE"
            url="https://storage.googleapis.com/nextronic/mine00000017.glb"
            ref={modelRef}
            onLoad={() => setLoading(false)}
          />
        </Suspense>
        <RotatingModel modelRef={modelRef} />
        <OrbitControls enableRotate rotateSpeed={1} enableZoom={false} />
      </Canvas>
    </div>
  );
}
export default TreePage;
