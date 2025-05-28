/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { PipeLineUpBar } from "./components/up-bar";
import PipeLineSvg from "@/assets/pipeline.svg?react";
import CustomCardComponent from "./components/card";
import { cn } from "@/lib/utils";
import Circle1 from "@/assets/circle-1.svg?react";
import Circle2 from "@/assets/circle-2.svg?react";
import Circle3 from "@/assets/circle-3.svg?react";
import Light from "@/assets/light.svg?react";
import LiquidProgress from "./components/progress";
import { ArrowRight, Loader, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DashboardSP01 } from "./components/dashboards/dashboard-sp01";
import { DashboardSPU } from "./components/dashboards/dashboard-spu";
import { DashboardSP02 } from "./components/dashboards/dashboard-sp02";
import { useAppContext } from "@/Context";
import useSWR from "swr";
import { env } from "@/utils/env";
import { io } from "socket.io-client";

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

const ATTRIBUTE_UNITS: Record<string, string> = {
  "Chlore input": "(mg/L)",
  "Chlore output": "(mg/L)",
  "Flow input": "(L/s)",
  "Flow output": "(L/s)",
  "delta flow": "(L/s)",
  "pression output": "(bar)",
  "Pression": "(bar)",
};

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
}) => {
  return (
    <div
      className="absolute isolate size-[6rem] cursor-pointer"
      style={createPositionStyle(point.position)}
      onClick={() => onPointClick(point.id)}
    >
      {showCard && (
        <div
          className={cn(
            "absolute z-10 min-h-[10rem] min-w-[21rem] max-w-fit scale-[0.8] p-4 pr-6",
            getCardPositionClass(point.card.position),
            point.id === "SP6" ? "scale-[0.70] bg-red-500" : "scale[0.8]",
          )}
          style={{
            ...(point.card.optionsPosition || {}),
            background: "url(/vector.png)",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex min-h-[10rem] flex-col gap-2">
            <div className="flex justify-between">
              <h3 className="text-md text-bold flex items-center justify-center px-3 text-xl text-[#FFE473]">
                {point.title}
              </h3>
              <Dialog
                onOpenChange={(open) => {
                  void open;
                }}
              >
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
                  className="z-[999999] flex h-[min(95vh,67rem)] min-w-[70rem] max-w-[min(95vw,90rem)] flex-col gap-20 border-none bg-transparent p-0 pb-6 pt-4 text-foreground backdrop-blur"
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
                  {point.model?.dashboard?.component}
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex h-full w-full gap-2">
              <div className="w-[7rem]">
                <LiquidProgress
                  className={cn("h-[9rem] w-[7rem]", {
                    "w-[3rem]": point.id === "SP6",
                  })}
                  style={{}}
                  stops={[
                    {
                      color: "red",
                      value: 5,
                    },
                    {
                      color: "blue",
                      value: 18,
                    },
                    {
                      color: "yellow",
                      value: 89,
                    },
                    {
                      color: "green",
                      value: 94,
                    },
                  ]}
                  percentage={
                    point?.card?.progress && Array.isArray(point.card.progress)
                      ? point.card.progress.map((p) => ({
                          value: Number(p)?.toFixed(2) as unknown as number,
                          title: "",
                        }))
                      : [
                          {
                            value: Number(point.card.progress)?.toFixed(
                              2,
                            ) as unknown as number,
                            title: "",
                          },
                        ]
                  }
                />
              </div>

              <div className="flex flex-1 flex-col gap-1">
                {Object.entries(point.card.attributes)?.map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-xs text-gray-400">
                      {key} {ATTRIBUTE_UNITS[key] ? ATTRIBUTE_UNITS[key] : ""}
                    </span>
                    <span className="text-xs text-white">
                      {key == "Running state" ? (
                        <div className="flex flex-wrap gap-1">
                          {value?.map((state: string, index: number) => (
                            <div
                              key={index}
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
                          {value?.map((v, idx) => (
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
          </div>
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
            "absolute bottom-[calc(100%+1em)] size-[5.5rem] object-contain",
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
};
// PipeLine Component
const PipeLine: React.FC = () => {
  const { backendApi } = useAppContext();
  const handlePointClick = (id: string) => {
    setVisibleCardIds((prev) =>
      prev.includes(id)
        ? prev.filter((cardId) => cardId !== id)
        : [...prev, id],
    );
  };

  const [widgetData, setWidgetData] = useState<any>([]);
  const [attributes, setAttributes] = useState<any>({
    SP01: {},
    SP02: {},
    SP03: {},
    SP1: {},
    SP2: {},
    SP3: {},
    SP4: {},
    SP5: {},
    SP6: {},
  });
  const [dataHistory, setDataHistory] = useState<any>({
    SP01: {},
    SP02: {},
    SP03: {},
    SP1: {},
    SP2: {},
    SP3: {},
    SP4: {},
    SP5: {},
    SP6: {},
  });
  const [visibleCardIds, setVisibleCardIds] = useState<string[]>([
    "SP01",
    "SP02",
    "SP03",
    "SP1",
    "SP2",
    "SP3",
    "SP4",
    "SP5",
    "SP6",
  ]);
  const PipeLineAttributes = [
    {
      id: "SP01",
      title: "SP01",
      position: { top: "60%", left: "0%" },
      card: {
        position: "right",
        optionsPosition: { top: "54%", left: "50%" },
        progress: 0,
        attributes: {},
      },
      image: "/lines-images/sp01.png",
      model: {
        side: "right",
        align: "start",
        sideOffset: -250,
        dashboard: {
          title: "SP01 Dashboard",
          component: <DashboardSP01 data={dataHistory?.SP01} />,
        },
      },
    },
    {
      id: "SP02",
      title: "SP02",
      position: { top: "41%", left: "30%" },
      card: {
        position: "center",
        optionsPosition: { top: "-100%", left: "-135%" },
        progress: 0,
        attributes: {},
      },
      image: "/lines-images/sp02.png",
      model: {
        side: "left",
        align: "start",
        sideOffset: -400,
        dashboard: {
          title: "SP02 Dashboard",
          component: <DashboardSP02 data={dataHistory?.SP02} />,
        },
      },
    },
    {
      id: "SP03",
      title: "SP03",
      position: { top: "25%", right: "33%" },
      card: {
        position: "left",
        optionsPosition: { top: "-30%", right: "52%" },
        progress: 0,
        attributes: {},
      },
      image: "/lines-images/sp03.png",
      model: {
        side: "right",
        align: "start",
        sideOffset: -320,
        dashboard: {
          title: "SP03 Dashboard",
          component: <DashboardSP02 data={dataHistory?.SP03} />,
        },
      },
    },
    {
      id: "SP1",
      title: "SP1",
      position: { top: "25%", right: "13%" },
      card: {
        position: "top",
        optionsPosition: { bottom: "170%" },
        progress: 0,
        attributes: {},
      },
      image: "/lines-images/sp1.png",
      model: {
        side: "right",
        align: "start",
        sideOffset: 0,
        dashboard: {
          title: "SP1 Dashboard",
          component: <DashboardSP02 data={dataHistory?.SP1} />,
        },
      },
    },
    {
      id: "SP2",
      title: "SP2",
      position: { top: "48%", right: "21%" },
      card: {
        position: "left",
        optionsPosition: { top: "8%", right: "50%" },
        progress: 0,
        attributes: {},
      },
      image: "/lines-images/sp03.png",
      model: {
        side: "left",
        align: "center",
        sideOffset: -300,
        dashboard: {
          title: "SP2 Dashboard",
          component: <DashboardSP02 data={dataHistory?.SP2} />,
        },
      },
    },
    {
      id: "SP3",
      title: "SP3",
      position: { top: "45%", right: "4%" },
      card: {
        position: "left",
        optionsPosition: { top: "-180%", left: "-8%" },
        progress: 0,
        attributes: {},
      },
      image: "/lines-images/sp3.png",
      model: {
        side: "right",
        align: "start",
        sideOffset: 0,
        dashboard: {
          title: "SP3 Dashboard",
          component: <DashboardSP02 data={dataHistory?.SP3} />,
        },
      },
    },
    {
      id: "SP4",
      title: "SP4",
      position: { top: "70%", right: "16%" },
      card: {
        position: "left",
        optionsPosition: { top: "-3%" },
        progress: 0,
        attributes: {},
      },
      image: "/lines-images/sp4.png",
      model: {
        side: "right",
        align: "center",
        sideOffset: 0,
        dashboard: {
          title: "SP4 Dashboard",
          component: <DashboardSP02 data={dataHistory?.SP4} />,
        },
      },
    },
    {
      id: "SP5",
      title: "SP5",
      position: { bottom: "0%", right: "9%" },
      card: {
        position: "left",
        optionsPosition: { top: "10%" },
        progress: 0,
        attributes: {},
      },
      image: "/lines-images/sp5.png",
      model: {
        side: "left",
        align: "center",
        sideOffset: 0,
        dashboard: {
          title: "SP5 Dashboard",
          component: <DashboardSP02 data={dataHistory?.SP5} />,
        },
      },
    },
    {
      id: "SP6",
      title: "SPU",
      position: { top: "86%", right: "-3%" },
      card: {
        position: "left",
        optionsPosition: { top: "-210%", left: "-90%" },
        progress: 0,
        attributes: {},
      },
      image: "/lines-images/sp5.png",
      model: {
        dashboard: {
          title: "Basin",
          component: <DashboardSPU data={dataHistory?.SP6} />,
        },
      },
    },
  ];

  const { isLoading } = useSWR(
    `dpc-history/api/history`,
    async () => {
      const res = await backendApi.findMany("dpc-history/api/history", {
        where: {
          serial: "JHF455XKPCH6DBLH",
          createdAt: {
            $gt: new Date(Date.now() - 1 * 60 * 60 * 1000),
            // Last 24 hours
          },
        },
        pagination: {
          page: 1,
          perPage: 1000,
        },
      });
      return res;
    },
    {
      onSuccess: (data) => {
        const length = data?.results?.length;

        const filteredResults = data?.results?.reduce(
          (acc: Record<string, any>, item: any) => {
            Object.entries(item).forEach(([key, value]) => {
              if (
                [
                  "deviceId",
                  "createdAt",
                  "serial",
                  "updatedAt",
                  "_id",
                  "__v",
                ].includes(key)
              )
                return;
              acc[key] = [
                {
                  x: new Date(item.createdAt),
                  y: typeof value === "number" ? value?.toFixed(2) : value,
                },
                ...(acc[key] || []),
              ];
            });
            return acc;
          },
          {} as Record<string, any>,
        );

        setAttributes({
          SP01: {
            progress: filteredResults?.["s=SP1_LIT_01_MAE_TM"]?.[length - 1]?.y,
            attributes: {
              "Chlore input":
                filteredResults?.["s=SP01CHL_CHL_01_MAE_TM"]?.[length - 1]?.y,
              "Chlore output":
                filteredResults?.["s=SP1_CHL_02_MAE_TM"]?.[length - 1]?.y,
              "Flow input":
                filteredResults?.["s=SP1_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "Flow output":
                filteredResults?.["s=SP1_FIT_02_MAE_TM"]?.[length - 1]?.y,
              "delta flow":
                +filteredResults?.["s=SP1_FIT_02_MAE_TM"]?.[length - 1]?.y -
                +filteredResults?.["s=SP1_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "pression output":
                filteredResults?.["s=SP1_PIT_04_MAE_TM"]?.[length - 1]?.y,
              pumps: ["P01", "P02", "P03"],
              "Running state": [
                filteredResults?.["s=SP1_M01_RM_TS"]?.[length - 1]?.y,
                filteredResults?.["s=SP1_M02_RM_TS"]?.[length - 1]?.y,
                filteredResults?.["s=SP1_M03_RM_TS"]?.[length - 1]?.y,
              ],
              Pression: [
                filteredResults?.["s=SP1_PIT_01_MAE_TM"]?.[length - 1]?.y,
                filteredResults?.["s=SP1_PIT_02_MAE_TM"]?.[length - 1]?.y,
                filteredResults?.["s=SP1_PIT_03_MAE_TM"]?.[length - 1]?.y,
              ],
            },
          },
          SP02: {
            progress: filteredResults?.["s=SP2_LIT_01_MAE_TM"]?.[length - 1]?.y,
            attributes: {
              // "Chlore input":
              //   filteredResults?.["s=SP02CHL_CHL_01_MAE_TM"]?.[length - 1]?.y,
              // "Chlore output":
              //   filteredResults?.["s=SP2_CHL_02_MAE_TM"]?.[length - 1]?.y,
              "Flow input":
                filteredResults?.["s=SP2_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "Flow output":
                filteredResults?.["s=SP2_FIT_02_MAE_TM"]?.[length - 1]?.y,
              "delta flow":
                +filteredResults?.["s=SP2_FIT_02_MAE_TM"]?.[length - 1]?.y -
                +filteredResults?.["s=SP2_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "pression output":
                filteredResults?.["s=SP2_PIT_04_MAE_TM"]?.[length - 1]?.y,
              pumps: ["P01", "P02", "P03"],
              "Running state": [
                filteredResults?.["s=SP2_M01_TM_TLC"]?.[length - 1]?.y,
                filteredResults?.["s=SP2_M02_TM_TLC"]?.[length - 1]?.y,
                filteredResults?.["s=SP2_M03_TM_TLC"]?.[length - 1]?.y,
              ],
              Pression: [
                filteredResults?.["s=SP2_PIT_01_MAE_TM"]?.[length - 1]?.y,
                filteredResults?.["s=SP2_PIT_02_MAE_TM"]?.[length - 1]?.y,
                filteredResults?.["s=SP2_PIT_03_MAE_TM"]?.[length - 1]?.y,
              ],
            },
          },
          SP03: {
            progress: filteredResults?.["s=SP3_LIT_01_MAE_TM"]?.[length - 1]?.y,
            attributes: {
              "Flow input":
                filteredResults?.["s=SP3_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "Flow output":
                filteredResults?.["s=SP3_FIT_02_MAE_TM"]?.[length - 1]?.y,
              "delta flow":
                +filteredResults?.["s=SP3_FIT_02_MAE_TM"]?.[length - 1]?.y -
                +filteredResults?.["s=SP3_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "pression output":
                filteredResults?.["s=SP3_PIT_04_MAE_TM"]?.[length - 1]?.y,
              pumps: ["P01", "P02", "P03"],
              "Running state": [
                filteredResults?.["s=SP3_M01_TM_TLC"]?.[length - 1]?.y,
                filteredResults?.["s=SP3_M02_TM_TLC"]?.[length - 1]?.y,
                filteredResults?.["s=SP3_M03_TM_TLC"]?.[length - 1]?.y,
              ],
              Pression: [
                filteredResults?.["s=SP3_PIT_01_MAE_TM"]?.[length - 1]?.y,
                filteredResults?.["s=SP3_PIT_02_MAE_TM"]?.[length - 1]?.y,
                filteredResults?.["s=SP3_PIT_03_MAE_TM"]?.[length - 1]?.y,
              ],
            },
          },
          SP1: {
            progress: filteredResults?.["s=SP4_LIT_01_MAE_TM"]?.[length - 1]?.y,
            attributes: {
              "Flow input":
                filteredResults?.["s=SP4_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "Flow output":
                filteredResults?.["s=SP4_FIT_02_MAE_TM"]?.[length - 1]?.y,
              "delta flow":
                +filteredResults?.["s=SP4_FIT_02_MAE_TM"]?.[length - 1]?.y -
                +filteredResults?.["s=SP4_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "pression output":
                filteredResults?.["s=SP4_PIT_04_MAE_TM"]?.[length - 1]?.y,
              pumps: ["P01", "P02", "P03"],
              "Running state": [
                filteredResults?.["s=SP4_M01_TM_TLC"]?.[length - 1]?.y,
                filteredResults?.["s=SP4_M02_TM_TLC"]?.[length - 1]?.y,
                filteredResults?.["s=SP4_M03_TM_TLC"]?.[length - 1]?.y,
              ],
              Pression: [
                filteredResults?.["s=SP4_PIT_01_MAE_TM"]?.[length - 1]?.y,
                filteredResults?.["s=SP4_PIT_02_MAE_TM"]?.[length - 1]?.y,
                filteredResults?.["s=SP4_PIT_03_MAE_TM"]?.[length - 1]?.y,
              ],
            },
          },
          SP2: {
            progress: filteredResults?.["s=SP5_LIT_01_MAE_TM"]?.[length - 1]?.y,
            attributes: {
              "Flow input":
                filteredResults?.["s=SP5_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "Flow output":
                filteredResults?.["s=SP5_FIT_02_MAE_TM"]?.[length - 1]?.y,
              "delta flow":
                +filteredResults?.["s=SP5_FIT_02_MAE_TM"]?.[length - 1]?.y -
                +filteredResults?.["s=SP5_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "pression output":
                filteredResults?.["s=SP5_PIT_04_MAE_TM"]?.[length - 1]?.y,
              pumps: ["P01", "P02", "P03"],
              "Running state": [
                filteredResults?.["s=SP5_M01_TM_TLC"]?.[length - 1]?.y,
                filteredResults?.["s=SP5_M02_TM_TLC"]?.[length - 1]?.y,
                filteredResults?.["s=SP5_M03_TM_TLC"]?.[length - 1]?.y,
              ],
              Pression: [
                filteredResults?.["s=SP5_PIT_01_MAE_TM"]?.[length - 1]?.y,
                filteredResults?.["s=SP5_PIT_02_MAE_TM"]?.[length - 1]?.y,
                filteredResults?.["s=SP5_PIT_03_MAE_TM"]?.[length - 1]?.y,
              ],
            },
          },
          SP3: {
            progress: filteredResults?.["s=SP6_LIT_01_MAE_TM"]?.[length - 1]?.y,
            attributes: {
              "Flow input":
                filteredResults?.["s=SP6_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "Flow output":
                filteredResults?.["s=SP6_FIT_02_MAE_TM"]?.[length - 1]?.y,
              "delta flow":
                +filteredResults?.["s=SP6_FIT_02_MAE_TM"]?.[length - 1]?.y -
                +filteredResults?.["s=SP6_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "pression output":
                filteredResults?.["s=SP6_PIT_04_MAE_TM"]?.[length - 1]?.y,
              pumps: ["P01", "P02", "P03"],
              "Running state": [
                filteredResults?.["s=SP6_M01_TM_TLC"]?.[length - 1]?.y,
                filteredResults?.["s=SP6_M02_TM_TLC"]?.[length - 1]?.y,
                filteredResults?.["s=SP6_M03_TM_TLC"]?.[length - 1]?.y,
              ],
              Pression: [
                filteredResults?.["s=SP6_PIT_01_MAE_TM"]?.[length - 1]?.y,
                filteredResults?.["s=SP6_PIT_02_MAE_TM"]?.[length - 1]?.y,
                filteredResults?.["s=SP6_PIT_03_MAE_TM"]?.[length - 1]?.y,
              ],
            },
          },
          SP4: {
            progress: filteredResults?.["s=SP7_LIT_01_MAE_TM"]?.[length - 1]?.y,
            attributes: {
              "Flow input":
                filteredResults?.["s=SP7_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "Flow output":
                filteredResults?.["s=SP7_FIT_02_MAE_TM"]?.[length - 1]?.y,
              "delta flow":
                +filteredResults?.["s=SP7_FIT_02_MAE_TM"]?.[length - 1]?.y -
                +filteredResults?.["s=SP7_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "pression output":
                filteredResults?.["s=SP7_PIT_04_MAE_TM"]?.[length - 1]?.y,
              pumps: ["P01", "P02", "P03"],
              "Running state": [
                filteredResults?.["s=SP7_M01_TM_TLC"]?.[length - 1]?.y,
                filteredResults?.["s=SP7_M02_TM_TLC"]?.[length - 1]?.y,
                filteredResults?.["s=SP7_M03_TM_TLC"]?.[length - 1]?.y,
              ],
              Pression: [
                filteredResults?.["s=SP7_PIT_01_MAE_TM"]?.[length - 1]?.y,
                filteredResults?.["s=SP7_PIT_02_MAE_TM"]?.[length - 1]?.y,
                filteredResults?.["s=SP7_PIT_03_MAE_TM"]?.[length - 1]?.y,
              ],
            },
          },
          SP5: {
            progress: filteredResults?.["s=SP8_LIT_01_MAE_TM"]?.[length - 1]?.y,
            attributes: {
              "Flow input":
                filteredResults?.["s=SP8_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "Flow output":
                filteredResults?.["s=SP8_FIT_02_MAE_TM"]?.[length - 1]?.y,
              "delta flow":
                +filteredResults?.["s=SP8_FIT_02_MAE_TM"]?.[length - 1]?.y -
                +filteredResults?.["s=SP8_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "pression output":
                filteredResults?.["s=SP8_PIT_04_MAE_TM"]?.[length - 1]?.y,
              pumps: ["P01", "P02", "P03"],
              "Running state": [
                filteredResults?.["s=SP8_M01_TM_TLC"]?.[length - 1]?.y,
                filteredResults?.["s=SP8_M02_TM_TLC"]?.[length - 1]?.y,
                filteredResults?.["s=SP8_M03_TM_TLC"]?.[length - 1]?.y,
              ],
              Pression: [
                filteredResults?.["s=SP8_PIT_01_MAE_TM"]?.[length - 1]?.y,
                filteredResults?.["s=SP8_PIT_02_MAE_TM"]?.[length - 1]?.y,
                filteredResults?.["s=SP8_PIT_03_MAE_TM"]?.[length - 1]?.y,
              ],
            },
          },
          SP6: {
            progress: [
              filteredResults?.["s=B_LIT_01_MAE_TM"]?.[length - 1]?.y,
              filteredResults?.["s=B_LIT_02_MAE_TM"]?.[length - 1]?.y,
            ],
            attributes: {
              "Chlore input":
                filteredResults?.["s=B_CHL_01_MAE_TM"]?.[length - 1]?.y,
              "Chlore output":
                filteredResults?.["s=B_CHL_02_MAE_TM"]?.[length - 1]?.y,
              "Flow input":
                filteredResults?.["s=B_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "Flow output":
                filteredResults?.["s=B_FIT_02_MAE_TM"]?.[length - 1]?.y,
              "delta flow":
                +filteredResults?.["s=B_FIT_02_MAE_TM"]?.[length - 1]?.y -
                +filteredResults?.["s=B_FIT_01_MAE_TM"]?.[length - 1]?.y,
              "pression output":
                filteredResults?.["s=B_PIT_04_MAE_TM"]?.[length - 1]?.y,
            },
          },
        });

        setWidgetData([
          {
            title: "Pumped Volume",
            value: filteredResults?.["s=B_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
          },
          {
            title: "Flow Rate",
            value: filteredResults?.["s=B_FIT_02_MAE_TM"]?.[length - 1]?.y,
          },
          {
            title: "Average Daily flow rate",
            value: "XX",
          },
        ]);

        setDataHistory({
          SP01: {
            flowRate: filteredResults?.["s=SP1_FIT_02_MAE_TM"]?.[length - 1]?.y,
            pumpedVolume:
              filteredResults?.["s=SP1_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
            deltaFlow:
              +filteredResults?.["s=SP1_FIT_02_MAE_TM"]?.[length - 1]?.y -
              +filteredResults?.["s=SP1_FIT_01_MAE_TM"]?.[length - 1]?.y,

            flowsInput: filteredResults?.["s=SP1_FIT_01_MAE_TM"] || [],
            flowsOutput: filteredResults?.["s=SP1_FIT_02_MAE_TM"] || [],

            pressuresOutput: filteredResults?.["s=SP1_PIT_04_MAE_TM"] || [],
            pressuresP1: filteredResults?.["s=SP1_PIT_01_MAE_TM"] || [],
            pressuresP2: filteredResults?.["s=SP1_PIT_02_MAE_TM"] || [],
            pressuresP3: filteredResults?.["s=SP1_PIT_03_MAE_TM"] || [],

            level: filteredResults?.["s=SP1_LIT_01_MAE_TM"] || [],

            chloreInput: filteredResults?.["s=SP01CHL_CHL_01_MAE_TM"] || [],
            chloreOutput: filteredResults?.["s=SP1_CHL_02_MAE_TM"] || [],

            suctionTankLL:
              filteredResults?.["s=SP1_LSLL_01_TA"]?.[length - 1]?.y,
            suctionTankL: filteredResults?.["s=SP1_LSL_01_TS"]?.[length - 1]?.y,
            suctionTankH: filteredResults?.["s=SP1_LSH_01_TS"]?.[length - 1]?.y,
            suctionTankHH:
              filteredResults?.["s=SP1_LSHH_01_TA"]?.[length - 1]?.y,

            hammerArrestorL:
              filteredResults?.["s=SP1_ANTIB_LSL_TA"]?.[length - 1]?.y,
            hammerArrestorH:
              filteredResults?.["s=SP1_ANTIB_LSH_TA"]?.[length - 1]?.y,

            runningStateP1:
              filteredResults?.["s=SP1_M01_RM_TS"]?.[length - 1]?.y,
            runningStateP2:
              filteredResults?.["s=SP1_M02_TM_TLC"]?.[length - 1]?.y,
            runningStateP3:
              filteredResults?.["s=SP1_M03_TM_TLC"]?.[length - 1]?.y,

            chloreStationvalue1:
              filteredResults?.["s=SP01CHL_M01_RM_TS"]?.[length - 1]?.y,
            chloreStationL1:
              filteredResults?.["s=SP01CHL_LSLL_BAC1_TA"]?.[length - 1]?.y,
            chloreStationM1:
              filteredResults?.["s=SP01CHL_M03_RM_TS"]?.[length - 1]?.y,
            chloreStationvalue2:
              filteredResults?.["s=SP01CHL_M02_RM_TS"]?.[length - 1]?.y,
            chloreStationL2:
              filteredResults?.["s=SP01CHL_LSLL_BAC2_TA"]?.[length - 1]?.y,
            chloreStationM2:
              filteredResults?.["s=SP01CHL_M04_RM_TS"]?.[length - 1]?.y,
          },
          SP02: {
            flowRate: filteredResults?.["s=SP2_FIT_02_MAE_TM"]?.[length - 1]?.y,
            pumpedVolume:
              filteredResults?.["s=SP2_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
            deltaFlow:
              filteredResults?.["s=SP2_FIT_02_MAE_TM"]?.[length - 1]?.y -
              filteredResults?.["s=SP2_FIT_01_MAE_TM"]?.[length - 1]?.y,

            flowsInput: filteredResults?.["s=SP2_FIT_01_MAE_TM"] || [],
            flowsOutput: filteredResults?.["s=SP2_FIT_02_MAE_TM"] || [],

            pressuresOutput: filteredResults?.["s=SP2_PIT_04_MAE_TM"] || [],
            pressuresP1: filteredResults?.["s=SP2_PIT_01_MAE_TM"] || [],
            pressuresP2: filteredResults?.["s=SP2_PIT_02_MAE_TM"] || [],
            pressuresP3: filteredResults?.["s=SP2_PIT_03_MAE_TM"] || [],

            level: filteredResults?.["s=SP2_LIT_01_MAE_TM"] || [],

            suctionTankLL:
              filteredResults?.["s=SP2_LSLL_01_TA"]?.[length - 1]?.y,
            suctionTankL: filteredResults?.["s=SP2_LSL_01_TS"]?.[length - 1]?.y,
            suctionTankH: filteredResults?.["s=SP2_LSH_01_TS"]?.[length - 1]?.y,
            suctionTankHH:
              filteredResults?.["s=SP2_LSHH_01_TA"]?.[length - 1]?.y,

            hammerArrestorL:
              filteredResults?.["s=SP2_ANTIB_LSL_TA"]?.[length - 1]?.y,
            hammerArrestorH:
              filteredResults?.["s=SP2_ANTIB_LSH_TA"]?.[length - 1]?.y,

            runningStateP1:
              filteredResults?.["s=SP2_M01_TM_TLC"]?.[length - 1]?.y,
            runningStateP2:
              filteredResults?.["s=SP2_M02_TM_TLC"]?.[length - 1]?.y,
            runningStateP3:
              filteredResults?.["s=SP2_M03_TM_TLC"]?.[length - 1]?.y,
          },
          SP03: {
            flowRate: filteredResults?.["s=SP3_FIT_02_MAE_TM"]?.[length - 1]?.y,
            pumpedVolume:
              filteredResults?.["s=SP3_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
            deltaFlow:
              filteredResults?.["s=SP3_FIT_02_MAE_TM"]?.[length - 1]?.y -
              filteredResults?.["s=SP3_FIT_01_MAE_TM"]?.[length - 1]?.y,

            flowsInput: filteredResults?.["s=SP3_FIT_01_MAE_TM"] || [],
            flowsOutput: filteredResults?.["s=SP3_FIT_02_MAE_TM"] || [],

            pressuresOutput: filteredResults?.["s=SP3_PIT_04_MAE_TM"] || [],
            pressuresP1: filteredResults?.["s=SP3_PIT_01_MAE_TM"] || [],
            pressuresP2: filteredResults?.["s=SP3_PIT_02_MAE_TM"] || [],
            pressuresP3: filteredResults?.["s=SP3_PIT_03_MAE_TM"] || [],

            level: filteredResults?.["s=SP3_LIT_01_MAE_TM"] || [],

            suctionTankLL:
              filteredResults?.["s=SP3_LSLL_01_TA"]?.[length - 1]?.y,
            suctionTankL: filteredResults?.["s=SP3_LSL_01_TS"]?.[length - 1]?.y,
            suctionTankH: filteredResults?.["s=SP3_LSH_01_TS"]?.[length - 1]?.y,
            suctionTankHH:
              filteredResults?.["s=SP3_LSHH_01_TA"]?.[length - 1]?.y,

            hammerArrestorL:
              filteredResults?.["s=SP3_ANTIB_LSL_TA"]?.[length - 1]?.y,
            hammerArrestorH:
              filteredResults?.["s=SP3_ANTIB_LSH_TA"]?.[length - 1]?.y,

            runningStateP1:
              filteredResults?.["s=SP3_M01_TM_TLC"]?.[length - 1]?.y,
            runningStateP2:
              filteredResults?.["s=SP3_M02_TM_TLC"]?.[length - 1]?.y,
            runningStateP3:
              filteredResults?.["s=SP3_M03_TM_TLC"]?.[length - 1]?.y,
          },
          SP1: {
            flowRate: filteredResults?.["s=SP4_FIT_02_MAE_TM"]?.[length - 1]?.y,
            pumpedVolume:
              filteredResults?.["s=SP4_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
            deltaFlow:
              filteredResults?.["s=SP4_FIT_02_MAE_TM"]?.[length - 1]?.y -
              filteredResults?.["s=SP4_FIT_01_MAE_TM"]?.[length - 1]?.y,

            flowsInput: filteredResults?.["s=SP4_FIT_01_MAE_TM"] || [],
            flowsOutput: filteredResults?.["s=SP4_FIT_02_MAE_TM"] || [],

            pressuresOutput: filteredResults?.["s=SP4_PIT_04_MAE_TM"] || [],
            pressuresP1: filteredResults?.["s=SP4_PIT_01_MAE_TM"] || [],
            pressuresP2: filteredResults?.["s=SP4_PIT_02_MAE_TM"] || [],
            pressuresP3: filteredResults?.["s=SP4_PIT_03_MAE_TM"] || [],

            level: filteredResults?.["s=SP4_LIT_01_MAE_TM"] || [],

            suctionTankLL:
              filteredResults?.["s=SP4_LSLL_01_TA"]?.[length - 1]?.y,
            suctionTankL: filteredResults?.["s=SP4_LSL_01_TS"]?.[length - 1]?.y,
            suctionTankH: filteredResults?.["s=SP4_LSH_01_TS"]?.[length - 1]?.y,
            suctionTankHH: filteredResults?.["s=SP4_LSHH_01_TA"]?.[length - 1]?.y,

            hammerArrestorL:
              filteredResults?.["s=SP4_ANTIB_LSL_TA"]?.[length - 1]?.y,
            hammerArrestorH:
              filteredResults?.["s=SP4_ANTIB_LSH_TA"]?.[length - 1]?.y,

            runningStateP1: filteredResults?.["s=SP4_M01_TM_TLC"]?.[length - 1]?.y,
            runningStateP2:
              filteredResults?.["s=SP4_M02_TM_TLC"]?.[length - 1]?.y,
            runningStateP3:
              filteredResults?.["s=SP4_M03_TM_TLC"]?.[length - 1]?.y,
          },
          SP2: {
            flowRate: filteredResults?.["s=SP5_FIT_02_MAE_TM"]?.[length - 1]?.y,
            pumpedVolume:
              filteredResults?.["s=SP5_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
            deltaFlow:
              filteredResults?.["s=SP5_FIT_02_MAE_TM"]?.[length - 1]?.y -
              filteredResults?.["s=SP5_FIT_01_MAE_TM"]?.[length - 1]?.y,

            flowsInput: filteredResults?.["s=SP5_FIT_01_MAE_TM"] || [],
            flowsOutput: filteredResults?.["s=SP5_FIT_02_MAE_TM"] || [],

            pressuresOutput: filteredResults?.["s=SP5_PIT_04_MAE_TM"] || [],
            pressuresP1: filteredResults?.["s=SP5_PIT_01_MAE_TM"] || [],
            pressuresP2: filteredResults?.["s=SP5_PIT_02_MAE_TM"] || [],
            pressuresP3: filteredResults?.["s=SP5_PIT_03_MAE_TM"] || [],

            level: filteredResults?.["s=SP5_LIT_01_MAE_TM"] || [],

            suctionTankLL:
              filteredResults?.["s=SP5_LSLL_01_TA"]?.[length - 1]?.y,
            suctionTankL: filteredResults?.["s=SP5_LSL_01_TS"]?.[length - 1]?.y,
            suctionTankH: filteredResults?.["s=SP5_LSH_01_TS"]?.[length - 1]?.y,
            suctionTankHH: filteredResults?.["s=SP5_LSHH_01_TA"]?.[length - 1]?.y,

            hammerArrestorL:
              filteredResults?.["s=SP5_ANTIB_LSL_TA"]?.[length - 1]?.y,
            hammerArrestorH:
              filteredResults?.["s=SP5_ANTIB_LSH_TA"]?.[length - 1]?.y,

            runningStateP1: filteredResults?.["s=SP5_M01_TM_TLC"]?.[length - 1]?.y,
            runningStateP2:
              filteredResults?.["s=SP5_M02_TM_TLC"]?.[length - 1]?.y,
            runningStateP3:
              filteredResults?.["s=SP5_M03_TM_TLC"]?.[length - 1]?.y,
          },
          SP3: {
            flowRate: filteredResults?.["s=SP6_FIT_02_MAE_TM"]?.[length - 1]?.y,
            pumpedVolume:
              filteredResults?.["s=SP6_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
            deltaFlow:
              filteredResults?.["s=SP6_FIT_02_MAE_TM"]?.[length - 1]?.y -
              filteredResults?.["s=SP6_FIT_01_MAE_TM"]?.[length - 1]?.y,

            flowsInput: filteredResults?.["s=SP6_FIT_01_MAE_TM"] || [],
            flowsOutput: filteredResults?.["s=SP6_FIT_02_MAE_TM"] || [],

            pressuresOutput: filteredResults?.["s=SP6_PIT_04_MAE_TM"] || [],
            pressuresP1: filteredResults?.["s=SP6_PIT_01_MAE_TM"] || [],
            pressuresP2: filteredResults?.["s=SP6_PIT_02_MAE_TM"] || [],
            pressuresP3: filteredResults?.["s=SP6_PIT_03_MAE_TM"] || [],

            level: filteredResults?.["s=SP6_LIT_01_MAE_TM"] || [],

            suctionTankLL:
              filteredResults?.["s=SP6_LSLL_01_TA"]?.[length - 1]?.y,
            suctionTankL: filteredResults?.["s=SP6_LSL_01_TS"]?.[length - 1]?.y,
            suctionTankH: filteredResults?.["s=SP6_LSH_01_TS"]?.[length - 1]?.y,
            suctionTankHH: filteredResults?.["s=SP6_LSHH_01_TA"]?.[length - 1]?.y,

            hammerArrestorL:
              filteredResults?.["s=SP6_ANTIB_LSL_TA"]?.[length - 1]?.y,
            hammerArrestorH:
              filteredResults?.["s=SP6_ANTIB_LSH_TA"]?.[length - 1]?.y,

            runningStateP1: filteredResults?.["s=SP6_M01_TM_TLC"]?.[length - 1]?.y,
            runningStateP2:
              filteredResults?.["s=SP6_M02_TM_TLC"]?.[length - 1]?.y,
            runningStateP3:
              filteredResults?.["s=SP6_M03_TM_TLC"]?.[length - 1]?.y,
          },
          SP4: {
            flowRate: filteredResults?.["s=SP7_FIT_02_MAE_TM"]?.[length - 1]?.y,
            pumpedVolume:
              filteredResults?.["s=SP7_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
            deltaFlow:
              filteredResults?.["s=SP7_FIT_02_MAE_TM"]?.[length - 1]?.y -
              filteredResults?.["s=SP7_FIT_01_MAE_TM"]?.[length - 1]?.y,

            flowsInput: filteredResults?.["s=SP7_FIT_01_MAE_TM"] || [],
            flowsOutput: filteredResults?.["s=SP7_FIT_02_MAE_TM"] || [],

            pressuresOutput: filteredResults?.["s=SP7_PIT_04_MAE_TM"] || [],
            pressuresP1: filteredResults?.["s=SP7_PIT_01_MAE_TM"] || [],
            pressuresP2: filteredResults?.["s=SP7_PIT_02_MAE_TM"] || [],
            pressuresP3: filteredResults?.["s=SP7_PIT_03_MAE_TM"] || [],

            level: filteredResults?.["s=SP7_LIT_01_MAE_TM"] || [],

            suctionTankLL:
              filteredResults?.["s=SP7_LSLL_01_TA"]?.[length - 1]?.y,
            suctionTankL: filteredResults?.["s=SP7_LSL_01_TS"]?.[length - 1]?.y,
            suctionTankH: filteredResults?.["s=SP7_LSH_01_TS"]?.[length - 1]?.y,
            suctionTankHH: filteredResults?.["s=SP7_LSHH_01_TA"]?.[length - 1]?.y,

            hammerArrestorL:
              filteredResults?.["s=SP7_ANTIB_LSL_TA"]?.[length - 1]?.y,
            hammerArrestorH:
              filteredResults?.["s=SP7_ANTIB_LSH_TA"]?.[length - 1]?.y,

            runningStateP1: filteredResults?.["s=SP7_M01_TM_TLC"]?.[length - 1]?.y,
            runningStateP2:
              filteredResults?.["s=SP7_M02_TM_TLC"]?.[length - 1]?.y,
            runningStateP3:
              filteredResults?.["s=SP7_M03_TM_TLC"]?.[length - 1]?.y,
          },
          SP5: {
            flowRate: filteredResults?.["s=SP8_FIT_02_MAE_TM"]?.[length - 1]?.y,
            pumpedVolume:
              filteredResults?.["s=SP8_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
            deltaFlow:
              filteredResults?.["s=SP8_FIT_02_MAE_TM"]?.[length - 1]?.y -
              filteredResults?.["s=SP8_FIT_01_MAE_TM"]?.[length - 1]?.y,

            flowsInput: filteredResults?.["s=SP8_FIT_01_MAE_TM"] || [],
            flowsOutput: filteredResults?.["s=SP8_FIT_02_MAE_TM"] || [],

            pressuresOutput: filteredResults?.["s=SP8_PIT_04_MAE_TM"] || [],
            pressuresP1: filteredResults?.["s=SP8_PIT_01_MAE_TM"] || [],
            pressuresP2: filteredResults?.["s=SP8_PIT_02_MAE_TM"] || [],
            pressuresP3: filteredResults?.["s=SP8_PIT_03_MAE_TM"] || [],

            level: filteredResults?.["s=SP8_LIT_01_MAE_TM"] || [],

            suctionTankLL:
              filteredResults?.["s=SP8_LSLL_01_TA"]?.[length - 1]?.y,
            suctionTankL: filteredResults?.["s=SP8_LSL_01_TS"]?.[length - 1]?.y,
            suctionTankH: filteredResults?.["s=SP8_LSH_01_TS"]?.[length - 1]?.y,
            suctionTankHH: filteredResults?.["s=SP8_LSHH_01_TA"]?.[length - 1]?.y,

            hammerArrestorL:
              filteredResults?.["s=SP8_ANTIB_LSL_TA"]?.[length - 1]?.y,
            hammerArrestorH:
              filteredResults?.["s=SP8_ANTIB_LSH_TA"]?.[length - 1]?.y,

            runningStateP1: filteredResults?.["s=SP8_M01_TM_TLC"]?.[length - 1]?.y,
            runningStateP2:
              filteredResults?.["s=SP8_M02_TM_TLC"]?.[length - 1]?.y,
            runningStateP3:
              filteredResults?.["s=SP8_M03_TM_TLC"]?.[length - 1]?.y,
          },
          SP6: {
            flowRateInput:
              filteredResults?.["s=B_FIT_01_MAE_TM"]?.[length - 1]?.y,
            flowRatePlant:
              filteredResults?.["s=B_FIT_02_MAE_TM"]?.[length - 1]?.y,

            volumeInput:
              filteredResults?.["s=B_FIT_01_TOT_MES_TM"]?.[length - 1]?.y,
            volumePlant:
              filteredResults?.["s=B_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
            stock:
              +filteredResults?.["s=B_FIT_02_TOT_MES_TM"]?.[length - 1]?.y -
              +filteredResults?.["s=B_FIT_01_TOT_MES_TM"]?.[length - 1]?.y,

            flowInput: filteredResults?.["s=B_FIT_01_MAE_TM"] || [],
            flowPlant: filteredResults?.["s=B_FIT_02_MAE_TM"] || [],

            levelB1: filteredResults?.["s=B_LIT_01_MAE_TM"] || [],
            levelB2: filteredResults?.["s=B_LIT_02_MAE_TM"] || [],

            chloreInput: filteredResults?.["s=B_CHL_01_MAE_TM"] || [],
            chlorePlant: filteredResults?.["s=B_CHL_02_MAE_TM"] || [],

            basinsValue1: filteredResults?.["s=B_LIT_01_MAE_TM"] || [],
            basinLL1: filteredResults?.["s=B_LSLL_01_TA"]?.[length - 1]?.y,
            basinL1: filteredResults?.["s=B_LSL_01_TS"]?.[length - 1]?.y,
            basinH1: filteredResults?.["s=B_LSH_01_TS"]?.[length - 1]?.y,
            basinHH1: filteredResults?.["s=B_LSHH_01_TA"]?.[length - 1]?.y,

            basinsValue2: filteredResults?.["s=B_LIT_02_MAE_TM"] || [],
            basinLL2: filteredResults?.["s=B_LSLL_02_TA"]?.[length - 1]?.y,
            basinL2: filteredResults?.["s=B_LSL_02_TS"]?.[length - 1]?.y,
            basinH2: filteredResults?.["s=B_LSH_02_TS"]?.[length - 1]?.y,
            basinHH2: filteredResults?.["s=B_LSHH_02_TA"]?.[length - 1]?.y,

            station1: filteredResults?.["s=B_M01_RM_TS"]?.[length - 1]?.y,
            stationM1: filteredResults?.["s=B_M03_RM_TS"]?.[length - 1]?.y,
            station2: filteredResults?.["s=B_M02_RM_TS"]?.[length - 1]?.y,
            stationM2: filteredResults?.["s=B_M04_RM_TS"]?.[length - 1]?.y,
          },
        });
      },
    },
  );

  useEffect(() => {
    const socket = io(env.VITE_URL_SOCKET);
    socket.on("connect", () => {
      console.log("Connected to WebSocket server Pipeline");
    });
    socket.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
    });
    socket.on("error", (error) => {
      console.error("WebSocket error:", error);
    });
    socket.on("serial-JHF455XKPCH6DBLH", (data) => {
      console.log("Received message:", data);
    });
    return () => {
      socket.close();
    };
  }, []);

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
        <div className="flex flex-1 flex-col overflow-y-visible px-[4rem]">
          <div className="flex gap-4 [&>*]:min-w-[12rem]">
            {widgetData?.map((item: any, idx: number) => (
              <CustomCardComponent
                key={idx}
                className={cn(
                  "",
                  { hidden: item.hidden },
                  item.value === "XX" && "opacity-50",
                )}
              >
                <h3 className="text-lg text-white">{item.title}</h3>
                <span className="text-xl text-[#FFC829]">{item.value}</span>
              </CustomCardComponent>
            ))}
          </div>
          <div className="relative h-1 flex-1 pr-[6rem]">
            <div className="relative h-full px-8 pb-6 pt-[3rem]">
              <PipeLineSvg className="h-full w-full" />
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader className="size-[4rem] animate-spin text-white" />
                </div>
              ) : (
                PipeLineAttributes?.map((item) => ({
                  ...item,
                  card: {
                    ...item.card,
                    ...attributes[item.id],
                  },
                }))?.map((point, index) => {
                  return (
                    <div key={index}>
                      <PipelinePoint
                        point={point as any}
                        onPointClick={handlePointClick}
                        showCard={visibleCardIds.includes(point.id)}
                      />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </main>
    </main>
  );
};

export default PipeLine;
