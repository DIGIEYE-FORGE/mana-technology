/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { PipeLineUpBar } from "./components/up-bar";
import PipeLineSvg from "@/assets/pipeline.svg?react";
import CustomCardComponent from "./components/card";
import { cn } from "@/lib/utils";
import Circle1 from "@/assets/circle-1.svg?react";
import Circle2 from "@/assets/circle-2.svg?react";
import Circle3 from "@/assets/circle-3.svg?react";
import Light from "@/assets/light.svg?react";

import LiquidProgress from "./components/progress";
import { ArrowRight, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Dashboard1 from "./components/dashboards/dashboard1";
import Dashboard2 from "./components/dashboards/dashboard2";
import Dashboard3 from "./components/dashboards/dashboard3";
import { useAppContext } from "@/Context";
import useSWR from "swr";

// Type Definitions
interface Position {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

interface PumpAttributes {
  "Chlore input": string;
  "Chlore output": string;
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
  "Chlore input": "XX",
  "Chlore output": "XX",
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
    position: { top: "62%", left: "0%" },
    card: {
      position: "right",
      optionsPosition: { top: "30%", left: "90%" },
      progress: 30,
      attributes: DEFAULT_PUMP_ATTRIBUTES,
    },
    image: "/lines-images/sp01.png",
    model: {
      dashboard: {
        title: "SP01 Dashboard",
        component: <Dashboard3 />,
      },
    },
  },
  {
    id: "SP02",
    title: "SP02",
    position: { top: "40%", left: "31%" },
    card: {
      position: "center",
      optionsPosition: { top: "-110%", left: "-170%" },
      progress: 80,
      attributes: DEFAULT_PUMP_ATTRIBUTES,
    },
    image: "/lines-images/sp02.png",
    model: {
      dashboard: {
        title: "SP02 Dashboard",
        component: <Dashboard1 />,
      },
    },
  },
  {
    id: "SP03",
    title: "SP03",
    position: { top: "25%", left: "65%" },
    card: {
      position: "left",
      optionsPosition: { top: "-30%" },
      progress: 70,
      attributes: DEFAULT_PUMP_ATTRIBUTES,
    },
    image: "/lines-images/sp03.png",
    model: {
      dashboard: {
        title: "SP03 Dashboard",
        component: <Dashboard2 />,
      },
    },
  },
  {
    id: "SP1",
    title: "SP1",
    position: { top: "28%", right: "14%" },
    card: {
      position: "top",
      optionsPosition: { bottom: "100%", left: "260%" },
      progress: 60,
      attributes: DEFAULT_PUMP_ATTRIBUTES,
    },
    image: "/lines-images/sp1.png",
    model: {
      dashboard: {
        title: "SP1 Dashboard",
        component: <Dashboard2 />,
      },
    },
  },
  {
    id: "SP2",
    title: "SP2",
    position: { top: "48%", right: "22%" },
    card: {
      position: "left",
      progress: 50,
      optionsPosition: { top: "30%", right: "80%" },
      attributes: DEFAULT_PUMP_ATTRIBUTES,
    },
    image: "/lines-images/sp03.png",
    model: {
      dashboard: {
        title: "SP05 Dashboard",
        component: <Dashboard2 />,
      },
    },
  },
  {
    id: "SP06",
    title: "SP06",
    position: { top: "50%", right: "11%" },
    card: {
      position: "left",
      progress: 40,
      optionsPosition: { top: "0%", left: "90%" },
      attributes: DEFAULT_PUMP_ATTRIBUTES,
    },
    image: "/lines-images/img1.png",
    model: {
      dashboard: {
        title: "SP06 Dashboard",
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
          "absolute z-10 min-h-[10rem] min-w-[20rem] scale-[0.80]",
          getCardPositionClass(point.card.position),
        )}
        style={point.card.optionsPosition}
      >
        <CustomCardComponent className="flex min-h-[10rem] flex-col gap-2 !px-4 !pb-4">
          <div className="flex justify-between">
            <h3 className="text-md flex items-center justify-center px-3 text-white">
              {point.title}
            </h3>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="text-md group flex items-center gap-2 text-[#78F6EA]"
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >
                  Voir plus
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </DialogTrigger>
              <DialogContent
                className="flex h-[min(95vh,67rem)] min-w-[70rem] max-w-[min(95vw,90rem)] flex-col gap-0 gap-20 border-none bg-transparent p-0 pb-6 pt-4 text-foreground backdrop-blur"
                style={{
                  clipPath:
                    "polygon(0% 18.5%, 2.8% 13.5%, 34% 13.5%, 36.2% 9.3%, 36.2% 0%, 100% 0%, 100% 99.6%, 1.6% 99.6%, 1.6% 67%, 0% 64%)",
                  backgroundImage: "url(/card-bg.png)",
                  backgroundSize: "100% 100%",
                }}
                hideCloseButton
              >
                <div className="flex h-[8%] shrink-0 items-center pl-[calc(36%+1rem)]">
                  <span className="shrink-0 pl-6 font-ethnocentric text-sm font-extralight text-foreground first-letter:uppercase">
                    {point.model?.dashboard?.title || "Dashboard"}
                  </span>
                  <DialogClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-6 size-5 text-white"
                    >
                      <XIcon size={20} />
                    </Button>
                  </DialogClose>
                </div>
                <div className="h-1 flex-1 overflow-auto pl-10 pr-8">
                  {point.model?.dashboard?.component}
                </div>
              </DialogContent>
            </Dialog>
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
                            className="aspect-video h-5 w-6 rounded-sm border-0 border-white"
                            style={{
                              backgroundColor:
                                state === "True" ? "#26E2B3" : "#FF0000",
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

    <div className="relative left-0 top-0 h-full w-full scale-[0.9]">
      <img
        src={point.image}
        alt={point.title}
        className={cn(
          "absolute bottom-[calc(100%+1em)] size-28 object-contain",
        )}
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
  const { backendApi } = useAppContext();
  const [visibleCardIds, setVisibleCardIds] = useState<string[]>([]);
  const handlePointClick = (id: string) => {
    setVisibleCardIds((prev) =>
      prev.includes(id)
        ? prev.filter((cardId) => cardId !== id)
        : [...prev, id],
    );
  };

  const { data } = useSWR("last-telemetry", async () => {
    const res = await backendApi.findMany("lastTelemetry", {
      where: {
        device: {
          serial: "JHF455XKPCH6DBLH",
        },
      },
      pagination: {
        page: 1,
        perPage: 10000,
      },
    });

    const filteredResults = res?.results?.reduce(
      (acc: Record<string, any>, item: any) => {
        acc[item.name] =
          typeof item.value === "number" ? item.value?.toFixed(2) : item.value;
        return acc;
      },
      {} as Record<string, any>,
    );

    return [
      {
        id: "SP01",
        title: "SP01",
        position: { top: "38%", left: "1%" },
        card: {
          position: "right",
          optionsPosition: { top: "-60%" },
          progress: filteredResults?.["s=SP1_LIT_01_MAE_TM"],
          attributes: {
            "Chlore input": filteredResults?.["s=SP01CHL_CHL_01_MAE_TM"],
            "Chlore output": filteredResults?.["s=SP1_CHL_02_MAE_TM"],
            "Flow input": filteredResults?.["s=SP1_FIT_01_MAE_TM"],
            "Flow output": filteredResults?.["s=SP1_FIT_02_MAE_TM"],
            "delta flow":
              +filteredResults?.["s=SP1_FIT_02_MAE_TM"] -
              +filteredResults?.["s=SP1_FIT_02_MAE_TM"],
            "pression output": filteredResults?.["s=SP1_PIT_04_MAE_TM"],
            pumps: ["P01", "P02", "P03"],
            "Running state": [
              filteredResults?.["s=SP1_M01_RM_TS"],
              filteredResults?.["s=SP1_M02_RM_TS"],
              filteredResults?.["s=SP1_M03_RM_TS"],
            ],
            Pression: [
              filteredResults?.["s=SP1_PIT_01_MAE_TM"],
              filteredResults?.["s=SP1_PIT_02_MAE_TM"],
              filteredResults?.["s=SP1_PIT_03_MAE_TM"],
            ],
          },
        },
        image: "/lines-images/sp01.png",
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
          progress: filteredResults?.["s=SP2_LIT_01_MAE_TM"],
          attributes: {
            "Flow input": filteredResults?.["s=SP2_FIT_01_MAE_TM"],
            "Flow output": filteredResults?.["s=SP2_FIT_02_MAE_TM"],
            "delta flow":
              +filteredResults?.["s=SP2_FIT_02_MAE_TM"] -
              +filteredResults?.["s=SP2_FIT_01_MAE_TM"],
            "pression output": filteredResults?.["s=SP2_PIT_04_MAE_TM"],
            pumps: ["P01", "P02", "P03"],
            "Running state": [
              filteredResults?.["s=SP2_M01_RM_TS"],
              filteredResults?.["s=SP2_M02_RM_TS"],
              filteredResults?.["s=SP2_M03_RM_TS"],
            ],
            Pression: [
              filteredResults?.["s=SP2_PIT_01_MAE_TM"],
              filteredResults?.["s=SP2_PIT_02_MAE_TM"],
              filteredResults?.["s=SP2_PIT_03_MAE_TM"],
            ],
          },
        },
        image: "/lines-images/sp02.png",
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
        position: { top: "20%", right: "33%" },
        card: {
          position: "left",
          optionsPosition: { top: "-30%" },
          progress: filteredResults?.["s=SP3_LIT_01_MAE_TM"],
          attributes: {
            "Flow input": filteredResults?.["s=SP3_FIT_01_MAE_TM"],
            "Flow output": filteredResults?.["s=SP3_FIT_02_MAE_TM"],
            "delta flow":
              +filteredResults?.["s=SP3_FIT_02_MAE_TM"] -
              +filteredResults?.["s=SP3_FIT_02_MAE_TM"],
            "pression output": filteredResults?.["s=SP3_PIT_04_MAE_TM"],
            pumps: ["P01", "P02", "P03"],
            "Running state": [
              filteredResults?.["s=SP3_M01_RM_TS"],
              filteredResults?.["s=SP3_M02_RM_TS"],
              filteredResults?.["s=SP3_M03_RM_TS"],
            ],
            Pression: [
              filteredResults?.["s=SP3_PIT_01_MAE_TM"],
              filteredResults?.["s=SP3_PIT_02_MAE_TM"],
              filteredResults?.["s=SP3_PIT_03_MAE_TM"],
            ],
          },
        },
        image: "/lines-images/sp03.png",
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
        id: "SP1",
        title: "SP1",
        position: { top: "23%", right: "17%" },
        card: {
          position: "top",
          optionsPosition: { bottom: "210%" },
          progress: filteredResults?.["s=SP4_LIT_01_MAE_TM"],
          attributes: {
            "Flow input": filteredResults?.["s=SP4_FIT_01_MAE_TM"],
            "Flow output": filteredResults?.["s=SP4_FIT_02_MAE_TM"],
            "delta flow":
              +filteredResults?.["s=SP4_FIT_02_MAE_TM"] -
              +filteredResults?.["s=SP4_FIT_02_MAE_TM"],
            "pression output": filteredResults?.["s=SP4_PIT_04_MAE_TM"],
            pumps: ["P01", "P02", "P03"],
            "Running state": [
              filteredResults?.["s=SP4_M01_RM_TS"],
              filteredResults?.["s=SP4_M02_RM_TS"],
              filteredResults?.["s=SP4_M03_RM_TS"],
            ],
            Pression: [
              filteredResults?.["s=SP4_PIT_01_MAE_TM"],
              filteredResults?.["s=SP4_PIT_02_MAE_TM"],
              filteredResults?.["s=SP4_PIT_03_MAE_TM"],
            ],
          },
        },
        image: "/lines-images/sp1.png",
        model: {
          side: "right",
          align: "start",
          sideOffset: 0,
          dashboard: {
            title: "SP1 Dashboard",
            component: <Dashboard2 />,
          },
        },
      },
      {
        id: "SP2",
        title: "SP2",
        position: { top: "43%", right: "24%" },
        card: {
          position: "left",
          optionsPosition: { top: "40%" },
          progress: filteredResults?.["s=SP5_LIT_01_MAE_TM"],
          attributes: {
            "Flow input": filteredResults?.["s=SP5_FIT_01_MAE_TM"],
            "Flow output": filteredResults?.["s=SP5_FIT_02_MAE_TM"],
            "delta flow":
              +filteredResults?.["s=SP5_FIT_02_MAE_TM"] -
              +filteredResults?.["s=SP5_FIT_02_MAE_TM"],
            "pression output": filteredResults?.["s=SP5_PIT_04_MAE_TM"],
            pumps: ["P01", "P02", "P03"],
            "Running state": [
              filteredResults?.["s=SP5_M01_RM_TS"],
              filteredResults?.["s=SP5_M02_RM_TS"],
              filteredResults?.["s=SP5_M03_RM_TS"],
            ],
            Pression: [
              filteredResults?.["s=SP5_PIT_01_MAE_TM"],
              filteredResults?.["s=SP5_PIT_02_MAE_TM"],
              filteredResults?.["s=SP5_PIT_03_MAE_TM"],
            ],
          },
        },
        image: "/lines-images/sp03.png",
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
        id: "SP4",
        title: "SP4",
        position: { top: "59%", right: "17%" },
        card: {
          position: "left",
          optionsPosition: { top: "85%" },
          progress: filteredResults?.["s=SP7_LIT_01_MAE_TM"],
          attributes: {
            "Flow input": filteredResults?.["s=SP7_FIT_01_MAE_TM"],
            "Flow output": filteredResults?.["s=SP7_FIT_02_MAE_TM"],
            "delta flow":
              +filteredResults?.["s=SP7_FIT_02_MAE_TM"] -
              +filteredResults?.["s=SP7_FIT_02_MAE_TM"],
            "pression output": filteredResults?.["s=SP7_PIT_04_MAE_TM"],
            pumps: ["P01", "P02", "P03"],
            "Running state": [
              filteredResults?.["s=SP7_M01_RM_TS"],
              filteredResults?.["s=SP7_M02_RM_TS"],
              filteredResults?.["s=SP7_M03_RM_TS"],
            ],
            Pression: [
              filteredResults?.["s=SP7_PIT_01_MAE_TM"],
              filteredResults?.["s=SP7_PIT_02_MAE_TM"],
              filteredResults?.["s=SP7_PIT_03_MAE_TM"],
            ],
          },
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
        id: "SP5",
        title: "SP5",
        position: { bottom: "6%", right: "14%" },
        card: {
          position: "left",
          optionsPosition: { top: "45%" },
          progress: filteredResults?.["s=SP8_LIT_01_MAE_TM"],
          attributes: {
            "Flow input": filteredResults?.["s=SP8_FIT_01_MAE_TM"],
            "Flow output": filteredResults?.["s=SP8_FIT_02_MAE_TM"],
            "delta flow":
              +filteredResults?.["s=SP8_FIT_02_MAE_TM"] -
              +filteredResults?.["s=SP8_FIT_02_MAE_TM"],
            "pression output": filteredResults?.["s=SP8_PIT_04_MAE_TM"],
            pumps: ["P01", "P02", "P03"],
            "Running state": [
              filteredResults?.["s=SP8_M01_RM_TS"],
              filteredResults?.["s=SP8_M02_RM_TS"],
              filteredResults?.["s=SP8_M03_RM_TS"],
            ],
            Pression: [
              filteredResults?.["s=SP8_PIT_01_MAE_TM"],
              filteredResults?.["s=SP8_PIT_02_MAE_TM"],
              filteredResults?.["s=SP8_PIT_03_MAE_TM"],
            ],
          },
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
        id: "SP3",
        title: "SP3",
        position: { top: "50%", right: "0%" },
        card: {
          position: "left",
          optionsPosition: { top: "-230%", right: "-70%" },
          progress: filteredResults?.["s=SP6_LIT_01_MAE_TM"],
          attributes: {
            "Flow input": filteredResults?.["s=SP6_FIT_01_MAE_TM"],
            "Flow output": filteredResults?.["s=SP6_FIT_02_MAE_TM"],
            "delta flow":
              +filteredResults?.["s=SP6_FIT_02_MAE_TM"] -
              +filteredResults?.["s=SP6_FIT_02_MAE_TM"],
            "pression output": filteredResults?.["s=SP6_PIT_04_MAE_TM"],
            pumps: ["P01", "P02", "P03"],
            "Running state": [
              filteredResults?.["s=SP6_M01_RM_TS"],
              filteredResults?.["s=SP6_M02_RM_TS"],
              filteredResults?.["s=SP6_M03_RM_TS"],
            ],
            Pression: [
              filteredResults?.["s=SP6_PIT_01_MAE_TM"],
              filteredResults?.["s=SP6_PIT_02_MAE_TM"],
              filteredResults?.["s=SP6_PIT_03_MAE_TM"],
            ],
          },
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
  });

  console.log({ data });

  return (
    <main
      className="relative flex flex-col text-foreground"
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
      <main className="relative z-10 mx-auto flex max-h-[1200px] w-full max-w-[1920px] flex-col gap-4 overflow-visible">
        <PipeLineUpBar />
        <div className="flex flex-1 flex-col overflow-y-visible px-6">
          <div className="flex gap-4 [&>*]:min-w-[12rem]">
            {DATA_CARDS.map((item, idx) => (
              <CustomCardComponent key={idx}>
                <h3 className="text-lg text-white">{item.title}</h3>
                <span className="text-xl text-[#FFC829]">{item.value}</span>
              </CustomCardComponent>
            ))}
          </div>
          <div className="relative h-1 flex-1 pr-[6rem]">
            <div className="relative h-full px-8 pb-6 pt-[5rem]">
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
        </div>
      </main>
    </main>
  );
};

export default PipeLine;
