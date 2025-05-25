import React, { useState } from "react";
import { PipeLineUpBar } from "./components/up-bar";
import PipeLineSvg from "@/assets/pipeline.svg?react";
import CustomCardComponent from "./components/card";
import { cn } from "@/lib/utils";
import Circle1 from "@/assets/circle-1.svg?react";
import Circle2 from "@/assets/circle-2.svg?react";
import Circle3 from "@/assets/circle-3.svg?react";
import Light from "@/assets/light.svg?react";
import HexagonImage from "./components/Hexagon-Image";
import LiquidProgress from "./components/progress";
import { ArrowBigRight, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Dashboard1 from "./components/dashboards/dashboard1";
import Dashboard2 from "./components/dashboards/dashboard2";
import Dashboard3 from "./components/dashboards/dashboard3";

// Type Definitions
interface Position {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

interface PumpAttributes {
  "Flow input": string;
  "Flow output": string;
  "delta flow": string;
  "pression output": string;
  pumps: string[];
  "Running state": string[];
  Pression: string[];
}

interface CardConfig {
  position:
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "center"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  optionsPosition?: Position;
  progress: number;
  attributes: PumpAttributes;
}

interface PointData {
  id: string;
  title: string;
  position: Position;
  card: CardConfig;
  image: string;
  model?: {
    side: "left" | "right";
    align: "center" | "end" | "start" | undefined;
    sideOffset?: number;
    dashboard?: {
      title: string;
      component?: React.ReactNode;
    };
  };
}

interface PipelinePointProps {
  point: PointData;
  showCard: boolean;
  onPointClick: (id: string) => void;
}

// Constants
const DATA_CARDS = [
  { title: "Pumped Volume", value: "XX" },
  { title: "Flow Rate", value: "XX" },
  { title: "Average Daily flow rate", value: "XX" },
];

const DEFAULT_PUMP_ATTRIBUTES: PumpAttributes = {
  "Flow input": "XX",
  "Flow output": "XX",
  "delta flow": "XX",
  "pression output": "XX",
  pumps: ["P01", "P02", "P03"],
  "Running state": ["Running", "Running", "Running"],
  Pression: ["XX", "XX", "XX"],
};

const POINTS_DATA: PointData[] = [
  {
    id: "SP01",
    title: "SP01",
    position: { top: "38%", left: "1%" },
    card: {
      position: "right",
      optionsPosition: { top: "-60%" },
      progress: 30,
      attributes: DEFAULT_PUMP_ATTRIBUTES,
    },
    image: "/lines-images/img1.png",
    model: {
      side: "right",
      align: "start",
      sideOffset: -250,
      dashboard: {
        title: "SP01 Dashboard",
        component: <Dashboard3 />,
      },
    },
  },
  {
    id: "SP02",
    title: "SP02",
    position: { top: "40%", left: "30%" },
    card: {
      position: "center",
      optionsPosition: { top: "250%" },
      progress: 80,
      attributes: DEFAULT_PUMP_ATTRIBUTES,
    },
    image: "/lines-images/img1.png",
    model: {
      side: "left",
      align: "start",
      sideOffset: -400,
      dashboard: {
        title: "SP02 Dashboard",
        component: <Dashboard1 />,
      },
    },
  },
  {
    id: "SP03",
    title: "SP03",
    position: { top: "24%", right: "33%" },
    card: {
      position: "left",
      optionsPosition: { top: "-30%" },
      progress: 70,
      attributes: DEFAULT_PUMP_ATTRIBUTES,
    },
    image: "/lines-images/img1.png",
    model: {
      side: "right",
      align: "start",
      sideOffset: -320,
      dashboard: {
        title: "SP03 Dashboard",
        component: <Dashboard2 />,
      },
    },
  },
  {
    id: "SP04",
    title: "SP04",
    position: { top: "23%", right: "17%" },
    card: {
      position: "top",
      optionsPosition: { bottom: "210%" },
      progress: 60,
      attributes: DEFAULT_PUMP_ATTRIBUTES,
    },
    image: "/lines-images/img1.png",
    model: {
      side: "right",
      align: "start",
      sideOffset: 0,
      dashboard: {
        title: "SP04 Dashboard",
        component: <Dashboard2 />,
      },
    },
  },
  {
    id: "SP05",
    title: "SP05",
    position: { top: "43%", right: "24%" },
    card: {
      position: "left",
      progress: 50,
      optionsPosition: { top: "40%" },
      attributes: DEFAULT_PUMP_ATTRIBUTES,
    },
    image: "/lines-images/img1.png",
    model: {
      side: "left",
      align: "center",
      sideOffset: -300,
      dashboard: {
        title: "SP05 Dashboard",
        component: <Dashboard2 />,
      },
    },
  },
  {
    id: "SP06",
    title: "SP06",
    position: { top: "59%", right: "17%" },
    card: {
      position: "left",
      progress: 40,
      optionsPosition: { top: "85%" },
      attributes: DEFAULT_PUMP_ATTRIBUTES,
    },
    image: "/lines-images/img1.png",
    model: {
      side: "right",
      align: "center",
      sideOffset: 0,
      dashboard: {
        title: "SP06 Dashboard",
        component: <Dashboard2 />,
      },
    },
  },
  {
    id: "SP07",
    title: "SP07",
    position: { bottom: "6%", right: "14%" },
    card: {
      position: "left",
      progress: 30,
      optionsPosition: { top: "40%" },
      attributes: DEFAULT_PUMP_ATTRIBUTES,
    },
    image: "/lines-images/img1.png",
    model: {
      side: "left",
      align: "center",
      sideOffset: 0,
      dashboard: {
        title: "SP07 Dashboard",
        component: <Dashboard2 />,
      },
    },
  },
  {
    id: "SP08",
    title: "SP08",
    position: { top: "50%", right: "0%" },
    card: {
      position: "left",
      progress: 20,
      optionsPosition: { top: "-230%", right: "-70%" },
      attributes: DEFAULT_PUMP_ATTRIBUTES,
    },
    image: "/lines-images/img1.png",
    model: {
      side: "right",
      align: "start",
      sideOffset: 0,
      dashboard: {
        title: "SP08 Dashboard",
        component: <Dashboard2 />,
      },
    },
  },
];

// Utility functions
const createPositionStyle = (position: Position): React.CSSProperties => {
  return { ...position };
};

const getCardPositionClass = (position: CardConfig["position"]): string => {
  const map = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
    center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    "top-left": "bottom-full mb-2 left-0",
    "top-right": "bottom-full mb-2 right-0",
    "bottom-left": "top-full mt-2 left-0",
    "bottom-right": "top-full mt-2 right-0",
  };
  return map[position] || "";
};

// PipelinePoint Component
const PipelinePoint: React.FC<PipelinePointProps> = ({
  point,
  onPointClick,
  showCard,
}) => (
  <div
    className="absolute size-[6rem] cursor-pointer"
    style={createPositionStyle(point.position)}
    onClick={() => onPointClick(point.id)}
  >
    {showCard && (
      <div
        className={cn(
          "absolute z-10 min-h-[10rem] min-w-[20rem]",
          getCardPositionClass(point.card.position),
        )}
        style={point.card.optionsPosition}
      >
        <CustomCardComponent className="flex min-h-[10rem] flex-col gap-2 p-4 !px-2 !py-1">
          <div className="flex justify-between">
            <h3 className="text-md flex items-center justify-center px-3 text-white">
              {point.title}
            </h3>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="text-md flex items-center gap-3 text-[#78F6EA]"
                  variant={"ghost"}
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >
                  Voir plus
                  <ArrowBigRight />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                side={point.model?.side}
                align={point.model?.align}
                sideOffset={point.model?.sideOffset}
                className="dark w-fit border-none bg-transparent p-0 backdrop-blur"
                style={{
                  clipPath:
                    "polygon(0% 18.5%, 2.8% 13.5%, 34% 13.5%, 36.2% 9.3%, 36.2% 0%, 100% 0%, 100% 99.6%, 1.6% 99.6%, 1.6% 67%, 0% 64%)",
                }}
              >
                <div
                  className="relative z-10 aspect-[1.7] min-h-[90vh] w-[80rem]"
                  style={{
                    backgroundImage: "url(/card-bg.png)",
                    backgroundSize: "100% 100%",
                  }}
                >
                  <PopoverClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-6 top-[2rem] text-white"
                    >
                      <XIcon size={24} />
                    </Button>
                  </PopoverClose>
                  <div className="flex h-full flex-col gap-[3.5rem] pb-7 pl-11 pr-6 pt-4">
                    <div className="ml-auto flex h-14 w-[64%] shrink-0 items-end px-6 text-2xl font-semibold">
                      {point.model?.dashboard?.title || point.title}
                    </div>
                    <div className="mt-[2rem] h-full">
                      {point.model?.dashboard?.component}
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex h-full w-full gap-2">
            <div className="w-[6rem]">
              <LiquidProgress percentage={point.card.progress} />
            </div>

            <div className="flex flex-1 flex-col gap-1">
              {Object.entries(point.card.attributes).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-xs text-gray-400">{key}</span>
                  <span className="text-xs text-white">
                    {key == "Running state" ? (
                      <div className="flex flex-wrap gap-1">
                        {value.map((state: string) => (
                          <div
                            key={state}
                            className="size-6 border-2 border-white"
                            style={{
                              backgroundColor:
                                state === "Running" ? "#00FF00" : "#FF0000",
                            }}
                          ></div>
                        ))}
                      </div>
                    ) : value instanceof Array ? (
                      <div className="flex flex-wrap gap-1">
                        {value.map((v, idx) => (
                          <span key={idx} className="text-xs text-white">
                            {v}
                          </span>
                        ))}
                      </div>
                    ) : (
                      value
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CustomCardComponent>
      </div>
    )}
    <div
      className="absolute left-1/2 top-1/2 z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#002FBE]"
      style={{
        backgroundImage: "radial-gradient(circle, #002FBE 0%, #000000 100%)",
      }}
    ></div>

    <div className="relative left-0 top-0 h-full w-full">
      <HexagonImage
        className="absolute -top-[65%] left-1/2 z-20 size-[6rem] -translate-x-1/2 -translate-y-1/2"
        src={point.image}
        alt={point.title}
      />
      <div
        className="absolute bottom-20 right-1/2 z-10 translate-x-1/2 whitespace-nowrap px-2 py-0.5 text-xs font-bold 2xl:text-base"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent, #002FBE, transparent)",
          border: "1px solid",
          borderImageSlice: 1,
          borderImageSource:
            "linear-gradient(to right, transparent, white, transparent)",
        }}
      >
        {point.title}
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
  </div>
);

// PipeLine Component
const PipeLine: React.FC = () => {
  const [visibleCardIds, setVisibleCardIds] = useState<string[]>([]);
  const handlePointClick = (id: string) => {
    setVisibleCardIds((prev) =>
      prev.includes(id)
        ? prev.filter((cardId) => cardId !== id)
        : [...prev, id],
    );
  };
  return (
    <main
      className="relative flex flex-col overflow-y-auto text-foreground"
      style={{
        backgroundImage:
          "linear-gradient(to right,#061991 6%, #17306D 48%, #061991 95% ), url(/sky-bg.png)",
      }}
    >
      <div
        className="absolute left-0 top-0 z-0 h-full w-full"
        style={{
          backgroundImage: "url(/net.png)",
          backgroundSize: "100% 80%",
          backgroundPosition: "0% 100%",
          backgroundRepeat: "no-repeat",
          maskSize: "100% 100%",
          maskImage: "radial-gradient(#0101016E, transparent 80%)",
        }}
      />
      <main className="relative z-10 mx-auto flex max-h-[1200px] w-full max-w-[1920px] flex-col gap-4">
        <PipeLineUpBar />
        <div className="flex flex-1 flex-col overflow-y-auto px-[4rem]">
          <div className="flex h-[6rem] w-full gap-4">
            {DATA_CARDS.map((item, idx) => (
              <CustomCardComponent key={idx} className="!px-2 !py-1">
                <h3 className="text-lg text-white">{item.title}</h3>
                <span className="text-2xl text-[#FFC829]">{item.value}</span>
              </CustomCardComponent>
            ))}
          </div>
          <div className="relative h-1 flex-1 px-8 pb-6 pt-[5rem]">
            <PipeLineSvg className="h-full w-full" />
            {POINTS_DATA.map((point) => (
              <PipelinePoint
                key={point.id}
                point={point}
                onPointClick={handlePointClick}
                showCard={visibleCardIds.includes(point.id)}
              />
            ))}
          </div>
        </div>
      </main>
    </main>
  );
};

export default PipeLine;
