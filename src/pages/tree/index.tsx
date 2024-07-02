/* eslint-disable @typescript-eslint/no-explicit-any */
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { PlaneGeometry } from "three";
import Model from "@/components/models";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "@/components/loader";
import Circle1 from "@/assets/circle-1.svg?react";
import Circle2 from "@/assets/circle-2.svg?react";
import Circle3 from "@/assets/circle-3.svg?react";
import Light from "@/assets/light.svg?react";
import Frame from "@/assets/frame.svg?react";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { machines } from "./data";
import { env } from "@/utils/env";

extend({ PlaneGeometry });
export function Loader3D() {
  return <Html center></Html>;
}

export function RotatingModel({ modelRef }: { modelRef: any }) {
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002;
    }
  });

  return null; // This component doesn't render anything visible
}

function TreePage() {
  const modelRef = useRef();
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (!modelRef.current || loading) return;
    // rotate the model on x-axis
    const model = modelRef.current as any;
    model.rotation.x = -Math.PI / 8;
    model.position.y = -4;
    model.position.z = 0;
  }, [loading, modelRef]);
  return (
    <main className="relative flex h-[960px] w-full items-center justify-center">
      {loading && (
        <div className="absolute left-0 top-[4.2rem] z-[999] flex h-[calc(100%-5rem)] w-full items-center justify-center">
          <Loader />
        </div>
      )}
      {!loading && (
        <div className="machines">
          {machines.map((item, index) => {
            return (
              <Popover
                key={index}
                onOpenChange={(isOpen) => {
                  if (isOpen) {
                    setActive(index);
                  } else {
                    setActive(null);
                  }
                }}
              >
                <PopoverTrigger asChild>
                  <button
                    disabled={item.disabled}
                    className={cn(
                      "machine absolute z-10 h-44 w-32 -translate-x-1/2 select-none",
                      {
                        active: active === index,
                      },
                    )}
                    style={{
                      left: `${50 - (((machines.length - 1) / 2 - index) / (machines.length - 1)) * 85}%`,
                      top:
                        {
                          0: "40%",
                          1: "20%",
                          [machines.length - 2]: "20%",
                          [machines.length - 1]: "40%",
                        }[index] || "10%",
                    }}
                  >
                    <div
                      className="absolute bottom-1/2 right-1/2 z-10 translate-x-1/2 whitespace-nowrap px-2 py-0.5 font-bold"
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
                    <div className="absolute bottom-3/4 right-1/2 translate-x-1/2">
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
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  side={item.side as any}
                  align={item.align as any}
                  sideOffset={item.sideOffset}
                  className="dark w-fit border-none bg-transparent p-0 backdrop-blur"
                  style={{
                    clipPath:
                      "polygon(0% 18.5%, 2.8% 13.5%, 34% 13.5%, 36.2% 9.3%, 36.2% 0%, 100% 0%, 100% 99.6%, 1.6% 99.6%, 1.6% 67%, 0% 64%)",
                  }}
                >
                  <div
                    className="relative z-10 aspect-[1.7] h-[46rem] w-[70rem]"
                    style={{
                      backgroundImage: "url(/card-bg.png)",
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <PopoverClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-6 top-5 text-white"
                      >
                        <XIcon size={24} />
                      </Button>
                    </PopoverClose>
                    <div className="flex h-full flex-col gap-[3.5rem] pb-7 pl-11 pr-6 pt-4">
                      <div className="ml-auto flex h-14 w-[64%] shrink-0 items-center px-6 text-2xl font-semibold">
                        {item.dashboard.title}
                      </div>
                      {item.dashboard.component}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            );
          })}
        </div>
      )}
      <Canvas
        style={{
          position: "absolute",
          bottom: "0",
        }}
        shadows
        camera={{
          position: [0, 30, 30],
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
            // color2="#96CFFE"
            // color1="#96CFFE"
            url={
              `${env.VITE_LOCAL_MODELS === "true" ? "/ignore/" : "https://storage.googleapis.com/nextronic/"}` +
              "mine021.glb"
            }
            ref={modelRef}
            onLoad={() => setLoading(false)}
          />
        </Suspense>
        <RotatingModel modelRef={modelRef} />
        <OrbitControls enableRotate rotateSpeed={1} zoomToCursor />
      </Canvas>
    </main>
  );
}
export default TreePage;
