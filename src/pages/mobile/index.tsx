/* eslint-disable @typescript-eslint/no-explicit-any */
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Loader3D } from "../tree";
import Model from "@/components/models";
import { env } from "@/utils/env";
import { OrbitControls } from "@react-three/drei";
import { locations, TLocation } from "./data";
import Circle1 from "@/assets/circle-1.svg?react";
import Circle2 from "@/assets/circle-2.svg?react";
import Circle3 from "@/assets/circle-3.svg?react";
import Light from "@/assets/light.svg?react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function MobilePage() {
  const [loading, setLoading] = useState(true);

  return (
    <main
      className="dark flex flex-col overflow-y-auto text-foreground"
      style={{
        backgroundImage:
          "linear-gradient(to bottom,  #172f6dd0 0%, #0f172ad0 70%), url(/sky-bg.png)",
        backgroundSize: "100% 100%, 100% 100%",
      }}
    >
      <div className="flex h-1 flex-1 items-center justify-center overflow-auto">
        <div className="relative">
          <img
            className="object-contain opacity-70"
            src="/magazine2.png"
            alt="Magazine"
          />
          {!loading &&
            locations.map((location, index) => (
              <Location key={index} location={location} />
            ))}
        </div>
      </div>
      <div className="relative h-1 flex-1">
        <ThreeDModel setLoading={setLoading} />
      </div>
    </main>
  );
}

export function RotatingModel({
  modelRef,
  isRotating,
}: {
  modelRef: any;
  isRotating?: boolean;
}) {
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += isRotating ? 0.002 : 0;
    }
  });

  return null;
}

function ThreeDModel({
  setLoading,
}: {
  setLoading: (loading: boolean) => void;
}) {
  const [isRotating, setIsRotating] = useState(true);
  const modelRef = useRef();

  return (
    <Canvas
      style={{
        position: "absolute",
        bottom: "0",
      }}
      shadows
      camera={{
        position: [30, 30, window.innerWidth > 768 ? 30 : 70],
        fov: 20,
        localToWorld(vector) {
          return vector;
        },
      }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
      }}
      onClick={() => setIsRotating(!isRotating)}
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
          // hovered={hovered}
          url={
            `${env.VITE_LOCAL_MODELS === "true" ? "/ignore/" : "https://managem.digieye.io/statics/"}` +
            "mine026.glb"
          }
          ref={modelRef}
          onLoad={() => setLoading(false)}
        />
      </Suspense>
      <RotatingModel modelRef={modelRef} isRotating={isRotating} />
      <OrbitControls enableRotate rotateSpeed={1} zoomToCursor />
    </Canvas>
  );
}

function Location({ location }: { location: TLocation }) {
  const { name, quickAccess, ...style } = location;
  return (
    <div
      className="machine-highlight absolute size-[3rem] cursor-pointer"
      style={style}
    >
      <div className="gradient-border absolute right-1/2 top-0 translate-x-1/2 scale-75 whitespace-nowrap text-xs">
        {name}
      </div>
      <div className="circle circle-3 relative h-full w-full">
        <Circle3 className="rotate h-full w-full duration-1000" />
      </div>
      <div className="circle circle-2 relative h-full w-full">
        <Circle2 className="rotate h-full w-full duration-1000" />
      </div>
      <div className="circle circle-1 relative h-full w-full">
        <Circle1 className="rotate h-full w-full duration-1000" />
      </div>
      <Light className="absolute bottom-[40%] right-1/2 h-full w-full translate-x-1/2" />
      {quickAccess?.items.length && (
        <div
          className={cn("absolute flex h-[2rem] min-w-[2rem] gap-2", {
            "bottom-[120%]": quickAccess?.side === "top",
            "top-[120%]": quickAccess?.side === "bottom",
            "left-[120%]": quickAccess?.side === "right",
            "right-[120%]": quickAccess?.side === "left",
            "bottom-1/2 translate-y-1/2": ["right", "left"].includes(
              quickAccess?.side ?? "",
            ),
            "right-1/2 translate-x-1/2": ["top", "bottom"].includes(
              quickAccess?.side ?? "",
            ),
          })}
        >
          {quickAccess.items.map((item, index) => {
            return (
              <div
                style={{
                  background: `url(${item.image})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
                className="size-[2rem] cursor-pointer"
                key={index}
              >
                {["video", "image"].includes(item.type) && (
                  <Dialog>
                    <DialogTrigger className="absolute inset-0" />
                    <DialogContent
                      showCloseButton={false}
                      className="w-fit border-none !p-0"
                      style={{
                        clipPath:
                          "polygon(0% 18.5%, 2.8% 13.5%, 34% 13.5%, 36.2% 9.3%, 36.2% 0%, 100% 0%, 100% 99.6%, 1.6% 99.6%, 1.6% 67%, 0% 64%)",
                      }}
                    >
                      <div
                        className="relative z-10 aspect-[1.7] w-[min(90vw,500px)]"
                        style={{
                          backgroundImage: "url(/card-bg.png)",
                          backgroundSize: "100% 100%",
                        }}
                      ></div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
