/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveLeftIcon, MoveRightIcon, XIcon } from "lucide-react";
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
import ProjectPlaningButton from "./components/project-planing-button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import HseButton from "./components/hse-button";
import FlipCountdown from "@rumess/react-flip-countdown";
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
          <h1 className="text-2xl font-bold">hello world</h1>
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
      bottom: "45%",
      right: "25%",
      type: "image",
      image: "/screen1.png",
    },
    {
      name: "SUD",
      bottom: "15%",
      right: "15%",
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
      name: "LINE ELECTRIC",
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
      type: "image",
      image: "/screen1.png",
      position: {
        top: "22%",
        right: "25%",
      },
      background: "url(/shape2.png),url(/screen1.png)",
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
      background: "url(/video.png)",
      positionModel: {
        side: "top",
        align: "center",
        sideOffset: -300,
      },
    },
    {
      type: "image",
      image: "/screen2.png",
      position: {
        bottom: "35%",
        right: "15%",
      },
      positionModel: {
        side: "left",
        align: "end",
        sideOffset: 20,
      },
      background: "url(/shape2.png),url(/screen2.png)",
    },
    {
      title: "SUD",
      type: "video",
      image: "/screen1.png",
      position: {
        bottom: "35%",
        right: "19%",
      },
      url: "/sud_vd.mp4",
      positionModel: {
        side: "left",
        align: "end",
        sideOffset: 20,
      },
      background: "url(/video.png)",
    },
    {
      title: "EST",
      type: "video",
      image: "/screen1.png",
      position: {
        top: "22%",
        right: "29%",
      },
      url: "/est_vd.mp4",
      positionModel: {
        side: "left",
        align: "end",
        sideOffset: 20,
      },
      background: "url(/video.png)",
    },
    {
      title: "plant",
      type: "video",
      image: "/video.png",
      position: {
        top: "40%",
        left: "4%",
      },
      url: "/est_video.mp4",
      positionModel: {
        side: "left",
        align: "end",
        sideOffset: 20,
      },
      background: "url(/video.png)",
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
      type: "information",
      title: "Pipeline",
      attribute: {
        ["Pipe length"]: "146 km ",
        ["Pipe diameter"]: "400 mm ",
        ["Pumping station's number"]: "8 PS /1350m",
        ["Origine"]: "Treated waste water (STEP Agadir)",
      },
      background: "url(/shape1.png)",
      position: {
        bottom: "0%",
        left: "22%",
      },
    },
    {
      type: "identification",
      title: "EST",
      attribute: {
        ["Mineral reserves"]: "4,5 Mtonnes @0,8 % Cu et 27 g/t Ag ",
        ["Waste tonnage"]: "39 Mtonnes ",
        ["Rock production capacity "]: "1,2 Mtonnes rock per month",
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
      title: "SUD",
      attribute: {
        ["Mineral reserves"]: "3,1 Mtonnes @ 0,9 % Cu et 16 g/t Ag",
        ["Waste tonnage"]: "23 Mtonnes ",
        ["Rock production capacity "]: "0,9 Mtonnes rock per month",
        ["Life of mine "]: "3 years ",
      },
      background: "url(/vector.png)",
      position: {
        bottom: "-10%",
        right: "9%",
      },
    },
  ];

  const tree = {
    titile: "Underground Mine",
    attribute: {
      ["Mineral reserves"]: "54 Mtonnes @ 0,9 %Cu et 19 g/t Ag",
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

  // if (loading) {
  //   return (
  //     <div className="flex h-full w-full items-center justify-center">
  //       <Loader />
  //     </div>
  //   );
  // }
  return (
    <main
      className="relative flex flex-col gap-2 pb-6 2xl:overflow-hidden"
      style={{
        // backgroundImage: "url('/sceen24.png')",
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
        <div className="absolute top-[55%] z-[10] flex w-[25rem] flex-col gap-4 px-[4rem]">
          <HseButton />
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
                className={cn("absolute", "h-[4rem] w-[8rem] cursor-pointer")}
                style={{
                  ...item,
                }}
              >
                <div
                  className="absolute bottom-20 right-1/2 z-10 translate-x-1/2 whitespace-nowrap px-2 py-0.5 font-bold"
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
                <div className="machine-highlight absolute bottom-0 aspect-square size-[8rem] w-full">
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
              item.type !== "image" && item.type !== "video" ? (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    ...item.position,
                    width:
                      item.type === "image" || item.type === "video"
                        ? "67px"
                        : item.type === "information"
                          ? "17rem"
                          : "22rem",
                    height:
                      item.type === "image" || item.type === "video"
                        ? "64px"
                        : item.type === "information"
                          ? "10rem"
                          : "10rem",
                    cursor: item.type === "video" ? "pointer" : "default",
                    background: `${item.background}`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {(item.type === "information" ||
                    item.type === "identification") && (
                    <div className="flex flex-col p-4">
                      <h1 className="text-lg font-bold text-[#FFE473]">
                        {item.title}
                      </h1>
                      {Object.entries(item?.attribute || {}).map(
                        ([key, value], index) => (
                          <div key={index} className="flex items-center gap-4">
                            <span className="w-[7rem] truncate text-xs font-medium">
                              {key}
                            </span>
                            <span className="text-xs text-[#A4D3FF]">
                              {value}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Popover key={index}>
                  <PopoverTrigger asChild>
                    <div
                      key={index}
                      className="absolute"
                      style={{
                        ...item.position,
                        width: "67px",
                        height: "64px",
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
                  color2="#96CFFE"
                  color1="#96CFFE"
                  url={
                    `${env.VITE_LOCAL_MODELS === "true" ? "/public/ignore/" : "https://storage.googleapis.com/nextronic/"}` +
                    "mine00000017.glb"
                  }
                  ref={modelRef}
                  onLoad={() => setLoading(false)}
                />
              </Suspense>
              <RotatingModel modelRef={modelRef} />
              <OrbitControls enableRotate rotateSpeed={1} zoomToCursor />
            </Canvas>
            <div
              className="absolute bottom-[18%] left-[1%] h-[15rem] w-[24rem]"
              style={{
                backgroundImage: "url(/vector.png)",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col p-4">
                <h1 className="text-lg font-bold text-[#FFE473]">
                  {tree?.titile}
                </h1>
                {Object.entries(tree?.attribute || {}).map(
                  ([key, value], index) => (
                    <div key={index} className="flex gap-2 text-sm">
                      <span className="w-[13rem] truncate font-medium">
                        {key}
                      </span>
                      <span className="text-[#A4D3FF]">{value}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
