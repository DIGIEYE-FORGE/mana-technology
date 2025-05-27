/* eslint-disable @typescript-eslint/no-explicit-any */
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Loader3D } from "../tree";
// import Model from "@/components/models";
import { env } from "@/utils/env";
import { OrbitControls } from "@react-three/drei";
import { locations, TLocation, undergroundLocations } from "./data";
import Circle1 from "@/assets/circle-1.svg?react";
import Circle2 from "@/assets/circle-2.svg?react";
import Circle3 from "@/assets/circle-3.svg?react";
import Light from "@/assets/light.svg?react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon, Minimize, Shrink, XIcon } from "lucide-react";
import { OverviewButton } from "./components/overview-button";
import ProjectPlaningButton from "./components/project-planing-button";
import { EsgButton } from "./components/esg-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DialogClose } from "@radix-ui/react-dialog";
import VideoDialog from "../main-project/video-dialog";
import { toggleFullScreen } from "@/utils";
import Model from "@/components/models";

export default function MobilePage() {
  const [loading, setLoading] = useState(true);

  return (
    <main
      className="dark flex flex-col overflow-y-auto text-foreground"
      style={{
        backgroundImage:
          "linear-gradient(to bottom,#172f6dd0 0%, #0f172ad0 70%), url(/sky-bg.png)",
        backgroundSize: "100% 100%, 100% 100%",
      }}
    >
      <UpBar />
      <div className="xl:h-[4rem]"></div>
      <div className="relative mx-auto flex aspect-[3.2] h-[40%] min-h-[14rem] max-w-full items-center justify-center">
        <div className="relative">
          <img
            className="object-contain opacity-70"
            src="/magazine2.png"
            alt="Magazine"
          />
          <div className="absolute inset-0">
            {!loading &&
              locations.map((location, index) => (
                <Location key={index} location={location} />
              ))}
          </div>
        </div>
      </div>
      <div className="relative h-1 min-h-[16rem] flex-1">
        {!loading &&
          undergroundLocations &&
          undergroundLocations.map((location, index) => (
            <Location key={index} location={location} />
          ))}
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

export function ThreeDModel({
  setLoading,
}: {
  setLoading: (loading: boolean) => void;
}) {
  void setLoading(false);
  const [isRotating, setIsRotating] = useState(true);
  const modelRef = useRef();

  return (
    <Canvas
      style={{ position: "absolute", bottom: "0" }}
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
  const { name, quickAccess, info, ...style } = location;
  const [showInfo, setShowInfo] = useState(window.innerWidth > 1024);

  return (
    <div
      className="machine-highlight absolute z-10 size-[3rem] cursor-pointer md:size-[5rem]"
      style={style}
      onClick={() => setShowInfo(!showInfo)}
    >
      <div className="gradient-border absolute right-1/2 top-0 translate-x-1/2 whitespace-nowrap text-xs max-sm:scale-75 sm:text-sm md:text-base lg:text-lg">
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
          className={cn("absolute z-[20] flex gap-2", {
            "bottom-[110%]": quickAccess?.side === "top",
            "top-[110%]": quickAccess?.side === "bottom",
            "left-[105%]": quickAccess?.side === "right",
            "right-[110%]": quickAccess?.side === "left",
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
                  background: `url(${item.thumb})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
                className="relative size-[1.2rem] cursor-pointer md:size-[3rem] lg:size-[4rem]"
                key={index}
              >
                {["video", "image"].includes(item.type) && (
                  <Dialog>
                    <DialogTrigger className="absolute inset-0" />
                    <DialogContent
                      showCloseButton={false}
                      className="dark z-[100] aspect-video max-h-[80vh] w-[min(60rem,90vw)] max-w-none overflow-hidden rounded-xl border-none object-contain p-0 text-foreground opacity-90"
                    >
                      <DialogClose asChild>
                        <Button
                          size={"icon"}
                          variant={"ghost"}
                          className="absolute right-1 top-1 z-[1002] opacity-25 hover:opacity-100"
                        >
                          <XIcon size={20} />
                        </Button>
                      </DialogClose>
                      {item.type === "video" && (
                        <div className="relative h-full w-full">
                          <video
                            // onPlay={(e) => {
                            //   const target = e.target as HTMLVideoElement;
                            //   if (target.requestFullscreen) {
                            //     target.requestFullscreen().catch((e) => {
                            //       console.error(e);
                            //     });
                            //   }
                            // }}
                            className="w-full object-contain"
                            controls
                            src={
                              `${env.VITE_LOCAL_VIDEOS === "true" ? "/ignore/" : "https://managem.digieye.io/statics/"}` +
                              item?.url
                            }
                          />
                          {item.title == "Plant" && (
                            <div className="absolute left-[50%] top-[1%] w-fit -translate-x-1/2 transform bg-black/50 p-2">
                              <VideoDialog />
                            </div>
                          )}
                        </div>
                      )}

                      {item.type === "image" && (
                        <img
                          className="w-full object-contain"
                          src={item.url}
                          alt={item.title}
                        />
                      )}
                    </DialogContent>
                    {/* <DialogContent
                      showCloseButton={false}
                      className="back dark w-fit max-w-none border-none !p-0 text-foreground"
                      style={{
                        clipPath:
                          "polygon(0% 18.5%, 2.8% 13.5%, 34% 13.5%, 36.2% 9.3%, 36.2% 0%, 100% 0%, 100% 99.6%, 1.6% 99.6%, 1.6% 67%, 0% 64%)",
                      }}
                    >
                      <div
                        className="relative z-10 flex aspect-[1.7] h-full w-[min(90vw,1200px)] flex-col gap-[6%]"
                        style={{
                          backgroundImage: "url(/card-bg.png)",
                          backgroundSize: "100% 100%",
                        }}
                      >
                        <div className="flex h-[10%] shrink-0 items-center justify-end">
                          <div className="w-[64%] text-center text-xs">
                            {item.title}
                          </div>
                        </div>
                        <div className="flex h-1 flex-1 items-center justify-center p-[min(1rem,3%)]">
                          {item.type === "image" && (
                            <img
                              className="h-full w-full object-contain"
                              src={item.url}
                              alt={item.title}
                            />
                          )}
                          {item.type === "video" && (
                            <video
                              autoPlay
                              className="aspect-video h-full w-full object-contain opacity-90"
                              controls
                              src={
                                `${env.VITE_LOCAL_VIDEOS === "true" ? "/ignore/" : "https://managem.digieye.io/statics/"}` +
                                item?.url
                              }
                            />
                          )}
                        </div>
                      </div>
                    </DialogContent> */}
                  </Dialog>
                )}
                {item.type === "link" && item.url && (
                  <Link to={item.url} className="absolute inset-0" />
                )}
              </div>
            );
          })}
        </div>
      )}
      {info && showInfo && (
        <div
          className={cn(
            "absolute grid w-[8rem] grid-cols-[min-content,1fr] gap-x-2 p-3 pr-6 text-[6px] md:w-[14rem] md:gap-1 md:text-xs xl:w-[15rem]",
            info.className,
          )}
          style={{
            background: "url(/vector.png)",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h5 className="col-span-2 font-bold text-yellow-400">{info.title}</h5>
          {Object.entries(info.data).map(([key, value], index) => (
            <React.Fragment key={index}>
              <div className="whitespace-nowrap">{key}:</div>
              <div>{value}</div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export function UpBar() {
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    function preventFullScreen(event: KeyboardEvent) {
      if (event.key === "F11") {
        event.preventDefault();
        toggleFullScreen().then((isFullScreen) => {
          if (isFullScreen !== undefined) setFullScreen(isFullScreen);
        });
      }
    }
    document.addEventListener("keydown", preventFullScreen);
    return () => {
      document.removeEventListener("keydown", preventFullScreen);
    };
  }, []);

  return (
    <div className="px- group sticky top-0 z-[100] flex h-up-bar w-full shrink-0 items-center justify-end gap-2 border-b px-2 backdrop-blur md:px-6">
      <div className="mr-auto flex gap-4">
        <img src="/logo.svg" alt="logo" className="max-w-[30%]" />
        <span className="h-3/4 text-balance border-l py-3 pl-4 text-[10px] font-bold lg:font-ethnocentric lg:text-lg">
          Tizert Project Digital Twin
        </span>
      </div>
      <Sheet>
        <SheetTrigger>
          <Button variant={"ghost"} size={"icon"} className="flex lg:hidden">
            <MenuIcon size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent className="dark z-[101] w-full max-w-none border-none bg-card/10 text-foreground backdrop-blur">
          <SheetHeader>
            <SheetTitle>
              <img src="/logo.svg" alt="logo" />
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 py-6">
            <OverviewButton
              variant={"ghost"}
              className="justify-start gap-2 lg:flex"
            >
              Project Overview
            </OverviewButton>
            <ProjectPlaningButton
              variant={"ghost"}
              className="justify-start gap-2 lg:flex"
            >
              <span>Project Planning</span>
            </ProjectPlaningButton>
            <EsgButton
              variant={"ghost"}
              className="justify-start gap-2 lg:flex"
            >
              <span>ESG</span>
            </EsgButton>
          </div>
        </SheetContent>
      </Sheet>
      <OverviewButton variant={"ghost"} className="hidden gap-2 2xl:flex">
        Project Overview
      </OverviewButton>
      <ProjectPlaningButton variant={"ghost"} className="hidden gap-2 2xl:flex">
        <span>Project Planning</span>
      </ProjectPlaningButton>
      <EsgButton variant={"ghost"} className="hidden gap-2 2xl:flex">
        <span>ESG</span>
      </EsgButton>

      <Button
        onClick={() => {
          toggleFullScreen().then((isFullScreen) => {
            if (isFullScreen !== undefined) setFullScreen(isFullScreen);
          });
        }}
        size={"icon"}
        variant={"ghost"}
      >
        {fullScreen ? <Shrink size={24} /> : <Minimize size={24} />}
      </Button>
    </div>
  );
}
