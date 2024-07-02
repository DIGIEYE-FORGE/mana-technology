/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveLeftIcon, MoveRightIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Circle1 from "@/assets/circle-1.svg?react";
import Circle2 from "@/assets/circle-2.svg?react";
import Circle3 from "@/assets/circle-3.svg?react";
import Light from "@/assets/light.svg?react";
import { Fragment, Suspense, useRef, useState } from "react";
import { Loader3D } from "../tree";
import Model from "@/components/models";
import { env } from "@/utils/env";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ProjectPlaningButton from "./components/project-planing-button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import FlipCountdown from "@rumess/react-flip-countdown";
import React from "react";
function MainProjectUpBar() {
  return (
    <div className="group sticky top-0 z-10 flex h-up-bar w-full shrink-0 items-center gap-4 border-b px-6 backdrop-blur">
      <Link
        to="/"
        className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        <Button variant="ghost">
          <MoveLeftIcon className="size-6" />
        </Button>
      </Link>
      <Link
        to="/underground"
        className="ml-auto opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        <Button variant="ghost">
          <MoveRightIcon className="size-6" />
        </Button>
      </Link>
      <div
        className="absolute right-1/2 h-full w-96"
        style={{
          perspective: "100px",
          transform: "translateX(50%) rotateX(20deg)",
        }}
      >
        <div
          className="grid place-content-center border-2 bg-[#182c5d] outline outline-4 outline-[#182c5d]"
          style={{
            borderTop: "none",
            borderRadius: "0 0 1rem 1rem",
            height: "150%",
            transform: "rotateX(-10deg)",
            transformOrigin: "0 0",
            perspective: "100px",
          }}
        >
          <h1 className="text-2xl font-bold">Tizert Mine Project Overvue</h1>
        </div>
      </div>
    </div>
  );
}

export function RotatingModel({ modelRef }: { modelRef: any }) {
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002; // Adjust rotation speed as needed
    }
  });

  return null; // This component doesn't render anything visible
}

export default function MainProjectPage() {
  const magazine = [
    {
      name: "EST",
      bottom: "50%",
      right: "27%",
      type: "image",
      image: "/screen1.png",
    },
    {
      name: "SUD",
      bottom: "18%",
      right: "13%",
      type: "image",
      image: "/screen2.png",
    },
    {
      name: "PLANT",
      bottom: "10%",
      left: "42%",
      type: "information",
    },
    {
      name: "ELECTRICAL LINE",
      bottom: "40%",
      left: "8%",
      type: "information",
    },
    {
      name: "PIPELINE",
      bottom: "20%",
      left: "14%",
      type: "information",
    },
  ];

  const data = [
    {
      type: "link",
      to: "/op-est",
      image: "/screen1.png",
      position: {
        top: "14%",
        right: "28%",
      },
      background: "url(/dashboard.svg)",
      positionModel: {
        side: "left",
        align: "end",
        sideOffset: 20,
      },
    },
    {
      title: "Underground Mine",
      type: "video",
      image: "/screen1.png",
      position: {
        bottom: "27%",
        left: "48%",
      },
      url: "Underground.mp4",
      background: "url(/video.svg)",
      positionModel: {
        side: "top",
        align: "center",
        sideOffset: -300,
      },
    },
    {
      type: "link",
      image: "/screen2.png",
      to: "/op-sud",
      position: {
        bottom: "35%",
        right: "19%",
      },
      positionModel: {
        side: "left",
        align: "end",
        sideOffset: 20,
      },
      background: "url(/dashboard.svg)",
    },
    {
      title: "Pit SUD",
      type: "video",
      image: "/screen1.png",
      position: {
        bottom: "35%",
        right: "23%",
      },
      url: "/sud_vd.mp4",
      positionModel: {
        side: "left",
        align: "end",
        sideOffset: 20,
      },
      background: "url(/video.svg)",
    },
    {
      title: " Pit EST",
      type: "video",
      image: "/screen1.png",
      position: {
        top: "14%",
        right: "32%",
      },
      url: "/est_vd.mp4",
      positionModel: {
        side: "left",
        align: "end",
        sideOffset: 20,
      },
      background: "url(/video.svg)",
    },
    {
      title: "plant",
      type: "video",
      image: "/video.png",
      position: {
        top: "40%",
        left: "2.5%",
      },
      url: "/est_video.mp4",
      positionModel: {
        side: "left",
        align: "end",
        sideOffset: 20,
      },
      background: "url(/video.svg)",
    },

    {
      type: "information",
      title: "Electrical power line",
      attribute: {
        ["60 kV line"]: "70 Km",
        ["22 kV line"]: "39 Km",
        ["Electrical substation"]: "60/22 kV",
      },
      background: "url(/shape1.png)",
      position: {
        top: "6%",
        left: "1%",
      },
    },

    {
      type: "information",
      title: "Process plant",
      attribute: {
        Capacity: "3,6 mtpa",
        ["Processing method"]: "Flotation",
        ["Product"]: "Copper Silver concentrate",
        ["Concentrate production capacity"]: "120 Ktonnes per year",
      },
      background: "url(/shape1.png)",
      position: {
        bottom: "40%",
        left: "40%",
      },
    },
    {
      title: "pipe line",
      type: "video",
      image: "/video.png",
      position: {
        bottom: "24%",
        left: "9.5%",
      },
      url: "/est_video.mp4",
      positionModel: {
        side: "left",
        align: "end",
        sideOffset: 20,
      },
      background: "url(/video.svg)",
    },
    {
      type: "information",
      title: "Pipeline",
      attribute: {
        ["Pipe length"]: "146 km ",
        ["Pipe diameter"]: "400 mm ",
        ["Pumping station's number"]: "8 PS /1350m",
        ["Origine"]: "Treated waste water",
      },
      background: "url(/shape1.png)",
      position: {
        bottom: "0%",
        left: "20%",
      },
    },
    {
      type: "identification",
      title: "Pit EST",
      attribute: {
        ["Mineral reserves"]: "4,5 Mt @0,8 % Cu et 27 g/t Ag ",
        ["Waste tonnage"]: "39 Mt ",
        ["Rock production capacity "]: "1,2 Mt rock per month",
        ["Life of mine "]: "4 years ",
      },
      background: "url(/vector.png)",
      position: {
        top: "10%",
        right: "3%",
      },
    },
    {
      type: "identification",
      title: "Pit SUD",
      attribute: {
        ["Mineral reserves"]: "3,1 Mt @ 0,9 % Cu et 16 g/t Ag",
        ["Waste tonnage"]: "23 Mt ",
        ["Rock production capacity "]: "0,9 Mt rock per month",
        ["Life of mine "]: "3 years ",
      },
      background: "url(/vector.png)",
      position: {
        bottom: "-18%",
        right: "2%",
      },
    },
  ];

  const tree = {
    titile: "Underground Mine",
    attribute: {
      ["Mineral reserves"]: "54 Mt @ 0,9 %Cu et 19 g/t Ag",
      ["Mining methods"]: "R&P /LHOS",
      ["Total development"]: "230 km lateral",
      ["Daily production capacity"]: "10800 tpd from 2028",
      ["Extraction method"]: "Belt conveyor",
      ["Backfilling"]: "Paste backfilling",
      ["Life of mine"]: "15 year",
    },
  };
  const modelRef = useRef();
  const [, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hovered] = useState("");
  return (
    <main
      className="relative flex flex-col gap-2 pb-6 2xl:overflow-hidden"
      style={{
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className="relative mx-auto max-h-[1200px] w-full max-w-[1920px]">
        <MainProjectUpBar />
        <div className="absolute bottom-4 right-4 z-10 flex w-[18.5rem] flex-col gap-2">
          <h4 className="text-center text-lg font-semibold">
            1 <sup>st</sup> copper concentrate
          </h4>
          <FlipCountdown
            size="small"
            hideYear
            // hideMonth
            theme="dark"
            endAt={"2025-05-14 00:00:00"}
          />
        </div>
        <div className="absolute top-[55%] z-[10] flex w-[18rem] flex-col gap-4 px-[4rem]">
          {/* <HseButton /> */}
          <ProjectPlaningButton />
        </div>
        <div className="flex h-full w-full flex-col gap-4">
          <div className="max-h-1/2 relative flex items-center justify-center">
            <img
              className="object-contain opacity-70"
              src="/magazine2.png"
              alt="Magazine"
            />
            {magazine.map((item, index) => (
              <div
                key={index}
                className={cn("absolute", "size-[6rem] cursor-pointer")}
                style={{
                  ...item,
                }}
              >
                <div
                  className="absolute bottom-20 right-1/2 z-10 translate-x-1/2 whitespace-nowrap px-2 py-0.5 text-xs font-bold 2xl:text-base"
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
            ))}
            {data.map((item, index) =>
              item.type !== "link" && item.type !== "video" ? (
                <div
                  key={index}
                  className={cn(`absolute`, {
                    "h-fit w-fit max-w-[18rem] 2xl:max-w-[22rem]":
                      item.type === "information",
                    "h-fit w-fit max-w-[17rem] 2xl:max-w-[22rem]":
                      item.type === "identification",
                  })}
                  style={{
                    ...item.position,
                    cursor: item.type === "video" ? "pointer" : "default",
                    background: `${item.background}`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {(item.type === "information" ||
                    item.type === "identification") && (
                    <div className="grid grid-cols-[fit-content,1fr] gap-1 p-3 pr-6">
                      <h1 className="col-span-2 text-lg font-bold text-[#FFE473]">
                        {item.title}
                      </h1>
                      {Object.entries(item?.attribute || {}).map(
                        ([key, value], index) => (
                          <React.Fragment key={index}>
                            <span className="text-xs font-medium 2xl:text-lg">
                              {key}
                            </span>
                            <span className="text-xs text-[#A4D3FF] 2xl:text-sm">
                              {value}
                            </span>
                          </React.Fragment>
                        ),
                      )}
                    </div>
                  )}
                </div>
              ) : item.type === "video" ? (
                <Popover key={index}>
                  <PopoverTrigger asChild>
                    <div
                      key={index}
                      className={cn(
                        `absolute h-[40px] w-[40px] xl:h-[45px] xl:w-[45px] 2xl:h-[64px] 2xl:w-[67px]`,
                      )}
                      style={{
                        ...item.position,
                        cursor: "pointer",
                        background: `${item.background}`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </PopoverTrigger>
                  <PopoverContent
                    side={(item?.positionModel?.side as any) || "right"}
                    align={item?.positionModel?.align as any}
                    sideOffset={item?.positionModel?.sideOffset || 0}
                    className="dark w-fit border-none bg-transparent p-0 backdrop-blur"
                    style={{
                      clipPath:
                        "polygon(0% 18.5%, 2.8% 13.5%, 34% 13.5%, 36.2% 9.3%, 36.2% 0%, 100% 0%, 100% 99.6%, 1.6% 99.6%, 1.6% 67%, 0% 64%)",
                    }}
                  >
                    <div
                      className="relative z-10 aspect-[1.7] h-[35rem] w-[50rem] lg:h-[40rem] lg:w-[60rem] 2xl:h-[46rem] 2xl:w-[70rem]"
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
                      <div className="flex h-full flex-col gap-[3.5rem] pb-7 pl-11 pr-6 pt-2">
                        <div className="ml-auto flex h-14 w-[64%] shrink-0 items-center px-6 text-2xl font-semibold">
                          {item?.title}
                        </div>
                        {item?.type === "video" && item?.url && (
                          <video
                            className="aspect-video w-full object-contain opacity-90"
                            controls
                            src={item.url}
                          />
                        )}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              ) : (
                item.type === "link" &&
                item.to && (
                  <Link key={index} to={item?.to}>
                    <div
                      key={index}
                      className="absolute h-[40px] w-[40px] xl:h-[45px] xl:w-[45px] 2xl:h-[64px] 2xl:w-[67px]"
                      style={{
                        ...item.position,
                        cursor: "pointer",
                        background: `${item.background}`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </Link>
                )
              ),
            )}
          </div>
          <div
            className="relative flex-1"
            style={{
              backgroundImage: "url('/llustration.png')",
              backgroundSize: "50% 80%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Canvas
              style={{
                position: "absolute",
                bottom: "0",
              }}
              shadows
              camera={{
                position: [30, 30, 30],
                fov: 20,
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
                  hovered={hovered}
                  url={
                    `${env.VITE_LOCAL_MODELS === "true" ? "/public/ignore/" : "https://storage.googleapis.com/nextronic/"}` +
                    "mine021.glb"
                  }
                  ref={modelRef}
                  onLoad={() => setLoading(false)}
                />
              </Suspense>
              <RotatingModel modelRef={modelRef} />
              <OrbitControls enableRotate rotateSpeed={1} zoomToCursor />
            </Canvas>
            <div
              className="absolute bottom-[18%] left-[1%] w-[22rem] backdrop-blur"
              style={{
                backgroundImage: "url(/vector.png)",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="grid grid-cols-[min-content,1fr] gap-1 p-3 pr-4">
                <h1 className="col-span-2 text-lg font-bold text-[#FFE473]">
                  {tree?.titile}
                </h1>
                {Object.entries(tree?.attribute || {}).map(
                  ([key, value], index) => (
                    <React.Fragment key={index}>
                      <span className="whitespace-nowrap text-xs font-medium">
                        {key}
                      </span>
                      <span className="text-xs text-[#A4D3FF]">{value}</span>
                    </React.Fragment>
                  ),
                )}
              </div>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <div
                  className={cn(
                    `absolute h-[40px] w-[40px] xl:h-[45px] xl:w-[45px] 2xl:h-[64px] 2xl:w-[67px]`,
                  )}
                  style={{
                    cursor: "pointer",
                    // background: `${item.background}`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </PopoverTrigger>
              <PopoverContent
                side={"right"}
                sideOffset={0}
                className="dark w-fit border-none bg-transparent p-0 backdrop-blur"
                style={{
                  clipPath:
                    "polygon(0% 18.5%, 2.8% 13.5%, 34% 13.5%, 36.2% 9.3%, 36.2% 0%, 100% 0%, 100% 99.6%, 1.6% 99.6%, 1.6% 67%, 0% 64%)",
                }}
              >
                <div
                  className="relative z-10 aspect-[1.7] h-[35rem] w-[50rem] lg:h-[40rem] lg:w-[60rem] 2xl:h-[46rem] 2xl:w-[70rem]"
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
                  <div className="flex h-full flex-col gap-[3.5rem] pb-7 pl-11 pr-6 pt-2">
                    {/* <div className="ml-auto flex h-14 w-[64%] shrink-0 items-center px-6 text-2xl font-semibold">
                      {item?.title}
                    </div>
                    {item?.type === "video" && item?.url && (
                      <video
                        className="aspect-video w-full object-contain opacity-90"
                        controls
                        src={item.url}
                      />
                    )} */}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </main>
    </main>
  );
}
