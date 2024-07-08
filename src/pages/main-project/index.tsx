/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Circle1 from "@/assets/circle-1.svg?react";
import Circle2 from "@/assets/circle-2.svg?react";
import Circle3 from "@/assets/circle-3.svg?react";
import Light from "@/assets/light.svg?react";
import { Suspense, useRef, useState } from "react";
import { Loader3D } from "../tree";
import Model from "@/components/models";
import { env } from "@/utils/env";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import FlipCountdown from "@rumess/react-flip-countdown";
import React from "react";
import { MainProjectUpBar } from "./components/up-bar";
import VideoDialog from "./video-dialog";

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

const magazine = [
  {
    name: "EST",
    bottom: "50%",
    right: "27%",
    type: "image",
    image: "/screen1.png",
    click: "Pit EST",
  },
  {
    name: "SUD",
    bottom: "18%",
    right: "20%",
    type: "image",
    image: "/screen2.png",
    click: "Pit SUD",
  },
  {
    name: "OPEN PIT",
    top: "32%",
    right: "17%",
    type: "image",
    image: "/screen2.png",
    click: "Open Pit",
  },
  {
    name: "PLANT",
    top: "35%",
    left: "45%",
    type: "information",
    click: "Process plant",
  },
  {
    name: "ELECTRICAL LINE",
    bottom: "40%",
    left: "7%",
    type: "information",
    click: "Electrical power line",
  },
  {
    name: "PIPELINE",
    bottom: "20%",
    left: "14%",
    type: "information",
    click: "Pipeline",
  },
];

const data = [
  {
    type: "link",
    to: "/op-est",
    image: "/screen1.svg",
    position: {
      top: "14%",
      right: "26%",
    },
    background: "url(/screen1.svg)",
    positionModel: {
      side: "left",
      align: "end",
      sideOffset: 20,
    },
  },
  {
    type: "link",
    image: "/screen1.svg",
    to: "/",
    position: {
      top: "45%",
      right: "13%",
    },
    positionModel: {
      side: "left",
      align: "end",
      sideOffset: 20,
    },
    background: "url(/screen2.svg)",
  },
  //// video1
  {
    title: "Plant",
    type: "video",
    image: "/usins1.png",
    position: {
      top: "17%",
      left: "46%",
    },
    url: "/statics/3dvideo.mp4",
    background: "url(/video.svg)",
    positionModel: {
      side: "top",
      align: "center",
      sideOffset: -100,
    },
  },
  {
    type: "link",
    image: "screen1.svg",
    to: "/op-sud",
    position: {
      bottom: "20%",
      right: "12%",
    },
    positionModel: {
      side: "left",
      align: "end",
      sideOffset: 20,
    },
    background: "url(/screen1.svg)",
  },

  {
    title: "Pit SUD",
    type: "video",
    image: "/screen1.png",
    position: {
      bottom: "20%",
      right: "16%",
    },
    url: "/sud_vd.mp4",
    positionModel: {
      side: "left",
      align: "start",
      sideOffset: -100,
    },
    background: "url(/video.svg)",
  },
  {
    title: " Pit EST",
    type: "video",
    image: "/screen1.png",
    position: {
      top: "14%",
      right: "30%",
    },
    url: "/est_vd.mp4",
    positionModel: {
      side: "left",
      align: "start",
      sideOffset: -200,
    },
    background: "url(/video.svg)",
  },
  //// update url video open pit
  {
    title: " Open Pit",
    type: "video",
    image: "/screen1.png",
    position: {
      top: "45%",
      right: "9%",
    },
    url: "/statics/op.mp4",
    positionModel: {
      side: "left",
      align: "start",
      sideOffset: -200,
    },
    background: "url(/video.svg)",
  },
  {
    title: "Electrical power line",
    type: "image",
    image: "/ElectricalPowerLine.png",
    position: {
      top: "40%",
      left: "2%",
    },
    url: "/ElectricalPowerLine.png",
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
      ["60 kV line"]: "72 Km",
      ["22 kV line"]: "52 Km",
      ["Electrical substation"]: "60/22 kV",
    },
    background: "url(/vector.png)",
    position: {
      top: "6%",
      left: "1%",
    },
  },
  ///////// open pit
  {
    type: "information",
    title: "Open Pit",
    attribute: {
      ["Mineral reserves"]: "7,6 Mt @0,85% Cu & 23 ",
      ["Waste tonnage"]: "61.8 Mt ",
      ["Rock production "]: "69.5 Mt",
      ["Life of mine "]: "4 years ",
    },
    background: "url(/vector.png)",
    position: {
      top: "8%",
      right: "0.5%",
    },
  },
  //////////
  {
    type: "information",
    title: "Process plant",
    attribute: {
      Capacity: "3,6 mtpa",
      ["Processing method"]: "Flotation",
      ["Product"]: "Copper Silver concentrate",
      ["Production capacity"]: "120 Ktonnes per year",
    },
    background: "url(/vector.png)",
    position: {
      top: "1%",
      left: "26%",
    },
  },
  {
    title: "Pipeline",
    type: "image",
    image: "/PIPELINE.png",
    position: {
      bottom: "24%",
      left: "9.5%",
    },
    url: "/PIPELINE.png",
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
      ["Pumping station's"]: "8 PS /1350m",
      ["Origine"]: "Treated waste water",
    },
    background: "url(/vector.png)",
    position: {
      bottom: "-15%",
      left: "10%",
    },
  },
  {
    type: "identification",
    title: "Pit EST",
    attribute: {
      ["Mineral reserves"]: "4,5 Mt @0,8 % Cu et 27 g/t Ag ",
      ["Waste tonnage"]: "39 Mt ",
      ["Rock production "]: "1,2 Mt rock per month",
      ["Life of mine "]: "4 years ",
    },
    background: "url(/vector.png)",
    position: {
      top: "30%",
      right: "32%",
    },
  },
  {
    type: "identification",
    title: "Pit SUD",
    attribute: {
      ["Mineral reserves"]: "3,1 Mt @ 0,9 % Cu et 16 g/t Ag",
      ["Waste tonnage"]: "23 Mt ",
      ["Rock production "]: "0,9 Mt rock per month",
      ["Life of mine "]: "3 years ",
    },
    background: "url(/vector.png)",
    position: {
      bottom: "-15%",
      right: "14%",
    },
  },
];

const tree = {
  titile: "Underground Mine",
  attribute: {
    "Mineral reserves": "54 Mt @ 0,9 %Cu et 19 g/t Ag",
    ["Mining methods"]: "R&P /LHOS",
    ["Total development"]: "230 km lateral",
    ["Daily production capacity"]: "10800 tpd from 2028",
    ["Extraction method"]: "Belt conveyor",
    ["Backfilling"]: "Paste backfilling",
    ["Life of mine"]: "15 years",
  },
};

export default function MainProjectPage() {
  const [isRotating, setIsRotating] = useState(true);
  const modelRef = useRef();
  const [, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hovered] = useState("");

  const [showInfo, setShowInfo] = useState<string[]>([
    "Electrical power line",
    "Process plant",
    "Pipeline",
    "Process plant",
    "Underground Mine",
    "Open Pit",
  ]);
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
        <div className="absolute bottom-36 right-4 z-10 flex w-[19rem] -translate-x-1/4 -translate-y-1/2 scale-150 flex-col gap-2">
          <h4 className="text-center text-lg font-semibold text-orange-300">
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
                <div
                  className="machine-highlight absolute bottom-0 aspect-square w-full"
                  onClick={() => {
                    if (item.click) {
                      if (showInfo.includes(item?.click)) {
                        setShowInfo(showInfo.filter((i) => i !== item.click));
                      } else {
                        setShowInfo([...showInfo, item.click]);
                      }
                    }
                  }}
                >
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
              item.type !== "link" &&
              item.type !== "video" &&
              item.type != "image" ? (
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
                    <div
                      className={cn(
                        "grid grid-cols-[fit-content,1fr] gap-1 p-3 pr-6",
                        {
                          hidden:
                            item?.title &&
                            !showInfo.includes(item?.title as never),
                        },
                      )}
                    >
                      <h1 className="col-span-2 text-lg font-bold text-[#FFE473]">
                        {item.title}
                      </h1>
                      {Object.entries(item?.attribute || {}).map(
                        ([key, value], index) => (
                          <React.Fragment key={index}>
                            <span className="text-xs font-medium 3xl:text-base">
                              {key}
                            </span>
                            <span className="text-xs text-[#A4D3FF] 3xl:text-sm">
                              {value}
                            </span>
                          </React.Fragment>
                        ),
                      )}
                    </div>
                  )}
                </div>
              ) : item.type === "video" || item.type === "image" ? (
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
                        backgroundSize: "100% 100%",
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
                          className="absolute right-4 top-4 text-white"
                        >
                          <XIcon size={24} />
                        </Button>
                      </PopoverClose>
                      <div className="flex h-full flex-col gap-[3.5rem] pb-7 pl-11 pr-6 pt-2">
                        <div className="ml-auto flex h-14 w-[64%] shrink-0 items-center px-6 text-2xl font-semibold">
                          {item?.title}
                        </div>
                        {item?.type === "video" && item?.url ? (
                          <div>
                            <video
                              autoPlay
                              className="aspect-video w-full object-contain opacity-90"
                              controls
                              src={item.url}
                            />
                            {item.title == "Plant" && (
                              <div className="absolute left-[38%] top-[12%] w-fit">
                                <VideoDialog />
                              </div>
                            )}
                          </div>
                        ) : item?.type === "image" && item?.url ? (
                          // <div className="relative aspect-video h-full w-full">
                          <img
                            className="h-full w-full object-contain"
                            src={item.url}
                            alt={item.title}
                          />
                        ) : // </div>
                        null}
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
                  hovered={hovered}
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
            <div
              className={cn(
                "absolute bottom-[18%] left-[1%] w-[22rem] backdrop-blur",
                {
                  hidden: !showInfo.includes("Underground Mine"),
                },
              )}
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
            <div
              className={cn(
                "absolute left-[55%] top-[15%]",
                "size-[6rem] cursor-pointer",
              )}
            >
              <div
                className="absolute bottom-20 right-1/2 z-10 translate-x-1/2 whitespace-nowrap px-1 py-0.5 text-xs font-bold 2xl:text-base"
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
                UNDERGROUND MINE
              </div>
              <div
                className="machine-highlight absolute bottom-0 aspect-square w-full"
                onClick={() => {
                  if (showInfo.includes(`Underground Mine`)) {
                    setShowInfo(
                      showInfo.filter((i) => i !== "Underground Mine"),
                    );
                  } else {
                    setShowInfo([...showInfo, "Underground Mine"]);
                  }
                }}
              >
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
            <Link to={`/underground`}>
              <div
                className="absolute h-[40px] w-[40px] xl:h-[45px] xl:w-[45px] 2xl:h-[64px] 2xl:w-[67px]"
                style={{
                  top: "-8%",
                  left: "60%",
                  cursor: "pointer",
                  background: "url(/screen4.svg)",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </Link>
            <Link to={`/underground/tree`}>
              <div
                className="absolute h-[40px] w-[40px] xl:h-[45px] xl:w-[45px] 2xl:h-[64px] 2xl:w-[67px]"
                style={{
                  top: "-8%",
                  left: "56%",
                  cursor: "pointer",
                  background: "url(/dashboard_tree.svg)",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </Link>
            <Popover>
              <PopoverTrigger asChild>
                <div
                  className={cn(
                    `absolute h-[40px] w-[40px] xl:h-[45px] xl:w-[45px] 2xl:h-[64px] 2xl:w-[67px]`,
                  )}
                  style={{
                    cursor: "pointer",
                    top: "-8%",
                    left: "52%",
                    background: `url(/video.svg)`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </PopoverTrigger>
              <PopoverContent
                side={"right"}
                align={"center"}
                sideOffset={-450}
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
                      className="absolute right-4 top-4 text-white"
                    >
                      <XIcon size={24} />
                    </Button>
                  </PopoverClose>
                  <div className="flex h-full flex-col gap-[3.5rem] pb-7 pl-11 pr-6 pt-2">
                    <div className="ml-auto flex h-14 w-[64%] shrink-0 items-center px-6 text-2xl font-semibold">
                      Underground Mine
                    </div>

                    <video
                      className="aspect-video w-full object-contain opacity-90"
                      controls
                      src={"Underground.mp4"}
                    />
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
