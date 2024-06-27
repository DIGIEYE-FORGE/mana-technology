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
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Line from "@/assets/line.svg?react";
import ProjectPlaningButton from "./components/project-planing-button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
function MainProjectUpBar() {
  return (
    <div className="group sticky top-0 z-10 flex h-up-bar w-full shrink-0 items-center gap-4 border-b px-6 backdrop-blur">
      <Link to="/">
        <Button variant="ghost">
          <MoveLeftIcon className="size-6" />
        </Button>
      </Link>
      <Link to="/underground" className="ml-auto">
        <Button variant="ghost">
          <MoveRightIcon className="size-6" />
        </Button>
      </Link>
    </div>
  );
}

export default function MainProjectPage() {
  const [dashboadSelected, setDashboardSelected] = useState<string | undefined>(
    undefined,
  );
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
      name: "LINE ELECTRIC",
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
      type: "video",
      image: "/screen1.png",
      position: {
        top: "22%",
        right: "29%",
      },
      background: "url(/video.png)",
      positionModel: {
        side: "left",
        align: "end",
        sideOffset: -10,
      },
    },
    {
      type: "video",
      image: "/screen1.png",
      position: {
        bottom: "27%",
        left: "48%",
      },
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
      type: "video",
      image: "/screen1.png",
      position: {
        bottom: "35%",
        right: "19%",
      },
      positionModel: {
        side: "left",
        align: "end",
        sideOffset: 20,
      },
      background: "url(/video.png)",
    },
    {
      type: "video",
      image: "/screen1.png",
      position: {
        bottom: "32%",
        left: "22%",
      },
      positionModel: {
        side: "left",
        align: "end",
        sideOffset: 20,
      },
      background: "url(/video.png)",
    },
    {
      type: "video",
      image: "/video.png",
      position: {
        top: "40%",
        left: "4%",
      },
      positionModel: {
        side: "left",
        align: "end",
        sideOffset: 20,
      },
      background: "url(/video.png)",
    },

    {
      type: "information",
      title: "Plant1",
      attribute: {
        Type: "Plant",
        Location: "Underground",
        Status: "Active",
        Capacity: "1000",
      },
      background: "url(/shape1.png)",
      position: {
        top: "6%",
        left: "1%",
      },
    },

    {
      type: "information",
      title: "Plant2",
      attribute: {
        Type: "Plant",
        Location: "Underground",
        Status: "Active",
        Capacity: "1000",
      },
      background: "url(/shape1.png)",
      position: {
        bottom: "40%",
        left: "40%",
      },
    },
    {
      type: "information",
      title: "Plant2",
      attribute: {
        Type: "Plant",
        Location: "Underground",
        Status: "Active",
        Capacity: "1000",
      },
      background: "url(/shape1.png)",
      position: {
        bottom: "0%",
        left: "22%",
      },
    },
    {
      type: "identification",
      title: "Plan1",
      attribute: {
        Type: "Plant",
        Location: "Underground",
        Status: "Active",
        Capacity: "1000",
      },
      background: "url(/vector.png)",
      position: {
        top: "10%",
        right: "3%",
      },
    },
    {
      type: "identification",
      title: "Plant",
      attribute: {
        Type: "Plant",
        Location: "Underground",
        Status: "Active",
        Capacity: "1000",
      },
      background: "url(/vector.png)",
      position: {
        bottom: "-10%",
        right: "9%",
      },
    },
  ];

  const tree = {
    titile: "Tree",
    attribute: {
      Type: "Tree",
      Location: "Underground",
      Status: "Active",
      Capacity: "1000",
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
        backgroundImage: "url('/sceen24.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className="relative mx-auto max-h-[1200px] w-full max-w-[1920px]">
        <MainProjectUpBar />
        <div className="absolute right-4 top-[70%] flex h-[0.5rem] items-center gap-2">
          <span>100m</span>
          <Line />
        </div>

        <div className="absolute top-[55%] z-[10] flex w-[25rem] flex-col gap-4 px-[4rem]">
          <button className="btn-3d w-fit">HSE</button>
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
                onClick={() => setDashboardSelected(item.name)}
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
                    <Circle3
                      className="rotate h-full w-full duration-1000"
                      style={{
                        stroke: dashboadSelected === item.name ? "#FFE473" : "",
                        filter:
                          dashboadSelected === item.name
                            ? "drop-shadow(0px 0px 10px #96CFFE)"
                            : "none",
                      }}
                    />
                  </div>
                  <div className="circle circle-2 relative h-full w-full">
                    <Circle2
                      className="rotate h-full w-full duration-1000"
                      style={{
                        stroke: dashboadSelected === item.name ? "#FFE473" : "",
                        filter:
                          dashboadSelected === item.name
                            ? "drop-shadow(0px 0px 10px #96CFFE)"
                            : "none",
                      }}
                    />
                  </div>
                  <div className="circle circle-1 relative h-full w-full">
                    <Circle1
                      className="rotate h-full w-full duration-1000"
                      style={{
                        stroke: dashboadSelected === item.name ? "#FFE473" : "",
                        filter:
                          dashboadSelected === item.name
                            ? "drop-shadow(0px 0px 10px #96CFFE)"
                            : "none",
                      }}
                    />
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
                          ? "15rem"
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
                          <div key={index} className="flex gap-2">
                            <span className="w-[5rem] truncate font-medium">
                              {key}
                            </span>
                            <span className="text-[#A4D3FF]">{value}</span>
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
                      <div className="flex h-full flex-col gap-[3.5rem] pb-7 pl-11 pr-6 pt-4">
                        <div className="ml-auto flex h-14 w-[64%] shrink-0 items-center px-6 text-2xl font-semibold">
                          {dashboadSelected}
                        </div>
                        {/* {item.dashboard.component} */}
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
              <OrbitControls enableRotate rotateSpeed={1} zoomToCursor />
            </Canvas>
            <div
              className="absolute bottom-[25%] left-[5%] h-[11rem] w-[16rem]"
              style={{
                backgroundImage: "url(/vector.png)",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col p-4">
                <h1 className="text-lg font-bold text-[#FFE473]">Plant</h1>
                {Object.entries(tree?.attribute || {}).map(
                  ([key, value], index) => (
                    <div key={index} className="flex gap-2">
                      <span className="w-[5rem] truncate font-medium">
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
