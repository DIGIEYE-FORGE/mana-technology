/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Canvas, extend, useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
// import { extend, useFrame } from "@react-three/fiber";
// import { Html } from "@react-three/drei";
// import { OrbitControls, Html } from "@react-three/drei";
import { PlaneGeometry } from "three";
// import Model from "@/components/models";
// import { useRef, useState } from "react";
import { useState } from "react";
// import { Suspense, useRef, useState } from "react";
import Loader from "@/components/loader";
import Circle1 from "@/assets/circle-1.svg?react";
import Circle2 from "@/assets/circle-2.svg?react";
import Circle3 from "@/assets/circle-3.svg?react";
import Light from "@/assets/light.svg?react";
import Frame from "@/assets/frame.svg?react";

extend({ PlaneGeometry });
// function Loader3D() {
//   return (
//     <Html center>
//       {/* <div className="absolute top-0 flex h-full w-full items-center justify-center">
//         <Loader />
//       </div> */}
//     </Html>
//   );
// }

// function RotatingModel({ modelRef }: { modelRef: any }) {
//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y += 0.002; // Adjust rotation speed as needed
//     }
//   });

//   return null; // This component doesn't render anything visible
// }

const machines = [
  {
    name: "Foration Simba E70S",
    image: "/machine-01.png",
  },
  {
    name: "Foration Simba E70S",
    image: "/machine-02.png",
  },
  {
    name: "Foration Simba E70S",
    image: "/machine-03.png",
  },
  {
    name: "Foration Simba E70S",
    image: "/machine-04.png",
  },
  {
    name: "Foration Simba E70S",
    image: "/machine-05.png",
  },
  {
    name: "Foration Simba E70S",
    image: "/machine-06.png",
  },
];

function TreePage() {
  // const modelRef = useRef();

  // const [loading, setLoading] = useState(false);
  const [loading] = useState(false);
  return (
    <div className="relative flex h-full w-full items-center justify-center pl-6">
      {loading && (
        <div className="absolute left-0 top-[4.2rem] z-[999] flex h-[calc(100%-5rem)] w-full items-center justify-center">
          <Loader />
        </div>
      )}
      {!loading && (
        <>
          {machines.map((item, index) => {
            return (
              <div
                key={index}
                className="absolute h-44 w-32 -translate-x-1/2"
                style={{
                  left: `${50 - (((machines.length - 1) / 2 - index) / (machines.length - 1)) * 80}%`,
                  top:
                    {
                      0: "60%",
                      1: "30%",
                      [machines.length - 2]: "30%",
                      [machines.length - 1]: "60%",
                    }[index] || "10%",
                }}
              >
                <div
                  className="absolute bottom-1/2 right-1/2 z-10 translate-x-1/2 whitespace-nowrap px-2 py-0.5"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, transparent, #002FBE, transparent)",
                    border: "10px solid",
                    borderImageSlice: 1,
                    borderWidth: "1px",
                    borderImageSource:
                      "linear-gradient(to right, transparent, white, transparent)",
                  }}
                >
                  {item.name}
                </div>
                <div className="debug absolute bottom-3/4 right-1/2 translate-x-1/2">
                  <Frame className="bottom-0 right-0 aspect-square size-20 translate-y-[0%]" />
                  <div className="absolute bottom-2 right-4 z-10 w-32">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="machine-highlight absolute bottom-0 aspect-square w-full">
                  <div className="circle circle-3 relative h-full w-full">
                    <Circle3 className="rotate h-full w-full duration-1000" />
                  </div>
                  <div className="circle circle-2 relative h-full w-full">
                    <Circle2 className="rotate h-full w-full duration-1000" />
                  </div>
                  <div className="circle circle-1 relative h-full w-full">
                    <Circle1 className="rotate h-full w-full duration-1000" />
                  </div>
                  <Light className="absolute bottom-[40%] right-1/2 w-full translate-x-1/2" />
                </div>
              </div>
            );
          })}
        </>
      )}
      {/* <Canvas
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
      </Canvas> */}
    </div>
  );
}
export default TreePage;
