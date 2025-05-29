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
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { DashboardSP01 } from "./components/dashboards/dashboard-sp01";
import { DashboardSPU } from "./components/dashboards/dashboard-spu";
import { DashboardSP02 } from "./components/dashboards/dashboard-sp02";
import { useAppContext } from "@/Context";
import useSWR from "swr";
import { env } from "@/utils/env";
import { io } from "socket.io-client";
import {
  formatAttributesData,
  formatHistoryData,
  formatRunningTime,
  updateAttributesData,
  updateHistoryData,
} from "./utils/functions";
import { twMerge } from "tailwind-merge";
import ReactApexChart from "react-apexcharts";

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
  breakPoints: string[];
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
  setActivePoint: any;
}

const ATTRIBUTE_UNITS: Record<string, string> = {
  "Chlore input": "(mg/L)",
  "Chlore output": "(mg/L)",
  "Flow input": "(L/s)",
  "Flow output": "(L/s)",
  "delta flow": "(L/s)",
  "pression output": "(bar)",
  Pression: "(bar)",
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
  setActivePoint,
}) => {
  return (
    <div
      className="absolute isolate size-[6rem] cursor-pointer"
      style={createPositionStyle(point.position)}
      onClick={() => onPointClick(point.id)}
    >
      {showCard && Object?.values(point?.card?.attributes || {}).length > 3 && (
        <div
          className={cn(
            "absolute z-10 min-h-[10rem] min-w-[21rem] max-w-fit scale-[0.8] p-4 pr-6",
            getCardPositionClass(point.card.position),
            point.id === "SP6" ? "scale-[0.80] bg-red-500" : "scale[0.8]",
            {
              "min-w-[16rem]": point.id === "SP6",
            },
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
              <button
                className="text-md group flex items-center gap-2 text-[#78F6EA]"
                onClick={(event) => {
                  event.stopPropagation();
                  setActivePoint(point.id);
                }}
              >
                Voir plus
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
            <div
              className={cn("flex h-full w-full gap-2", {
                "flex-col": point.id === "SP6",
              })}
            >
              <LiquidProgress
                className={cn("h-[9rem] w-[7rem]", {
                  "w-[6.5rem]": point.id === "SP6",
                })}
                indictors={[
                  point?.card?.attributes?.breakPoints?.[0] == "True",
                  point?.card?.attributes?.breakPoints?.[1] == "True",
                  point?.card?.attributes?.breakPoints?.[2] == "True",
                  point?.card?.attributes?.breakPoints?.[3] == "True",
                ]}
                percentage={
                  point?.card?.progress && Array.isArray(point.card.progress)
                    ? point.card.progress.map((p) => ({
                        value:
                          (p &&
                            Number(p / (point.id === "SP6" ? 2.72 : 5)) *
                              100) ||
                          0,
                        title: "",
                      }))
                    : [
                        {
                          value:
                            (
                              (point.card.progress as number) &&
                              Number(
                                point.card.progress /
                                  (point.id === "SP6" ? 2.72 : 5),
                              ) * 100
                            )?.toFixed(2) || 0,

                          title: "",
                        },
                      ]
                }
                colorLL={
                  point?.card?.attributes?.breakPoints?.[0] === "True"
                    ? "#FF0000"
                    : "#009670"
                }
                colorL={
                  point?.card?.attributes?.breakPoints?.[1] === "True"
                    ? "#FF0000"
                    : "#009670"
                }
                colorH={
                  point?.card?.attributes?.breakPoints?.[2] === "True"
                    ? "#FF0000"
                    : "#009670"
                }
                colorHH={
                  point?.card?.attributes?.breakPoints?.[3] === "True"
                    ? "#FF0000"
                    : "#009670"
                }
              />

              <div className="flex flex-1 flex-col gap-1">
                {Object?.entries(point.card.attributes)
                  .filter((ele) => !["breakPoints"].includes(ele[0]))
                  ?.map(([key, value]) => (
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
                                {typeof v === "number"
                                  ? v.toFixed(2)
                                  : v == "True" || v == "False"
                                    ? v === "True"
                                      ? "On"
                                      : "Off"
                                    : // If it's a string or undefined/null, display it directly
                                      typeof v === "string"
                                      ? v
                                      : v || "0"}
                              </span>
                            ))}
                          </div>
                        ) : typeof value === "number" ? (
                          (value || 0)?.toFixed(2)
                        ) : typeof value === "string" ? (
                          value
                        ) : (
                          value || "0"
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

  const [runningTime, setRunningTime] = useState<any>({
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

  const updateStatesWithSocketData = (data: any) => {
    // Update widgetData with new data
    setWidgetData([
      {
        title: "Pumped Volume (m3/h)",
        value: data?.["s=B_FIT_02_TOT_MES_TM"] * 3.6,
      },
      {
        title: "Flow Rate",
        value: data?.["s=B_FIT_02_MAE_TM"],
      },
    ]);

    updateAttributesData(data, setAttributes);

    updateHistoryData(data, setDataHistory);
  };

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
          component: (
            <DashboardSP01
              data={{ ...dataHistory?.SP01, ...runningTime?.SP01 }}
            />
          ),
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
          component: (
            <DashboardSP02
              data={{ ...dataHistory?.SP02, ...runningTime?.SP02 }}
            />
          ),
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
          component: (
            <DashboardSP02
              data={{ ...dataHistory?.SP03, ...runningTime?.SP03 }}
            />
          ),
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
          component: (
            <DashboardSP02
              data={{ ...dataHistory?.SP1, ...runningTime?.SP1 }}
            />
          ),
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
          component: (
            <DashboardSP02
              data={{ ...dataHistory?.SP2, ...runningTime?.SP2 }}
            />
          ),
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
          component: (
            <DashboardSP02
              data={{ ...dataHistory?.SP3, ...runningTime?.SP3 }}
            />
          ),
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
          component: (
            <DashboardSP02
              data={{ ...dataHistory?.SP4, ...runningTime?.SP4 }}
            />
          ),
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
          component: (
            <DashboardSP02
              data={{ ...dataHistory?.SP5, ...runningTime?.SP5 }}
            />
          ),
        },
      },
    },
    {
      id: "SP6",
      title: "SPU",
      position: { top: "86%", right: "-3%" },
      card: {
        position: "left",
        optionsPosition: { top: "-270%", left: "-70%" },
        progress: 0,
        attributes: {},
      },
      image: "/lines-images/sp5.png",
      model: {
        dashboard: {
          title: "Basin",
          component: (
            <DashboardSPU data={{ ...dataHistory?.SP6, ...runningTime?.SP6 }} />
          ),
        },
      },
    },
  ];

  const { isLoading, isValidating } = useSWR(
    `dpc-history/api/historyz`,
    async () => {
      const res = await backendApi.findMany("dpc-history/api/history", {
        where: {
          serial: "JHF455XKPCH6DBLH",
        },
        pagination: {
          page: 1,
          perPage: 100,
        },
      });
      return res;
    },
    {
      revalidateOnMount: true,
      onSuccess: (data) => {
        const length = data?.results?.length;

        const filteredResults = data?.results?.reduce(
          (acc: Record<string, any>, item: any) => {
            Object?.entries(item).forEach(([key, value]) => {
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
        console.log("Filtered Results:", { data, filteredResults });
        setWidgetData([
          {
            title: "Pumped Volume (m3/h)",
            value:
              filteredResults?.["s=B_FIT_02_TOT_MES_TM"]?.[length - 1]?.y *
                3.6 || 0,
          },
          {
            title: "Flow Rate",
            value: filteredResults?.["s=B_FIT_02_MAE_TM"]?.[length - 1]?.y,
          },
        ]);

        formatAttributesData(filteredResults, setAttributes);
        formatHistoryData(filteredResults, setDataHistory);
      },
    },
  );

  const { isLoading: isLoadingCount, error: countError } = useSWR(
    "count-pipe-line",
    async () => {
      const res = await backendApi.getHistory(
        "/dpc-history/api/history/count/JHF455XKPCH6DBLH",
        {
          telemetries: [
            {
              name: "s=SP1_M01_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP1_M02_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP1_M03_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP2_M01_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP2_M02_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP2_M03_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP3_M01_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP3_M02_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP3_M03_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP4_M01_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP4_M02_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP4_M03_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP5_M01_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP5_M02_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP5_M03_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP6_M01_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP6_M02_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP6_M03_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP7_M01_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP7_M02_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP7_M03_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP8_M01_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP8_M02_RM_TS",
              value: [true, false],
            },
            {
              name: "s=SP8_M03_RM_TS",
              value: [true, false],
            },
            {
              name: "s=B_M01_RM_TS",
              value: [true, false],
            },
            {
              name: "s=B_M02_RM_TS",
              value: [true, false],
            },
            {
              name: "s=B_M03_RM_TS",
              value: [true, false],
            },
          ],
        },
      );

      return res;
    },
    {
      revalidateOnMount: true,
      onSuccess: (data) => {
        formatRunningTime(data, setRunningTime);
      },
    },
  );

  console.log({ runningTime });

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
      updateStatesWithSocketData(data);
    });
    return () => {
      socket.close();
    };
  }, []);

  const [activePoint, setActivePoint] = useState<string | null>(null);

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
                  item.value === "0" && "opacity-50",
                )}
              >
                <h3 className="text-lg text-white">{item.title}</h3>
                <span className="text-xl text-[#FFC829]">
                  {(typeof item.value == "number" && item.value.toFixed(2)) ||
                    (typeof item.value == "string" && item.value) ||
                    item.value ||
                    "0"}
                </span>
              </CustomCardComponent>
            ))}
          </div>
          <div className="relative h-1 flex-1 pr-[6rem]">
            <div className="relative h-full px-8 pb-6 pt-[3rem]">
              <PipeLineSvg className="h-full w-full" />
              {isLoading || isLoadingCount || isValidating ? (
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
                        setActivePoint={setActivePoint}
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
        <Dialog
          open={!!activePoint}
          onOpenChange={(open) => {
            if (!open) {
              setActivePoint(null);
            }
          }}
        >
          <DialogContent
            className="z-[999999] flex h-[min(125vh,70rem)] min-w-[70rem] max-w-[min(95vw,90rem)] scale-75 flex-col gap-20 border-none bg-transparent p-0 pb-6 pt-4 text-foreground backdrop-blur"
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
                {PipeLineAttributes?.find((item) => item.id === activePoint)
                  ?.title || "Pipeline Dashboard"}
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
            {
              PipeLineAttributes?.find((item) => item.id === activePoint)?.model
                .dashboard.component
            }
          </DialogContent>
        </Dialog>
        <LineChart />
      </main>
    </main>
  );
};

export default PipeLine;

interface LineChartProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  series?: ApexAxisChartSeries;
}

function LineChart({
  className,
  series = [
    {
      name: "Production",
      data: [
        {
          x: new Date("2024-06-01"),
          y: 10,
        },
        {
          x: new Date("2024-06-02"),
          y: 20,
        },
      ],
      type: "area",
    },
  ],
  ...props
}: LineChartProps) {
  return (
    <div
      className={twMerge(
        "absolute bottom-6 left-[25%] -z-10 aspect-[2] w-[24em]",
        className,
      )}
      {...props}
    >
      <div className="flex h-full w-full flex-col rounded-lg bg-card/10 p-3 backdrop-blur-sm">
        <div className="font-semibold first-letter:uppercase">chart title</div>
        <div className="h-1 flex-1">
          <ReactApexChart
            options={{
              theme: {
                mode: "dark",
              },
              tooltip: { cssClass: "text-black" },
              colors: ["#26E2B3", "#4D09E8"],
              grid: {
                borderColor: "#373737",
                xaxis: { lines: { show: true } },
                yaxis: { lines: { show: false } },
              },
              chart: {
                background: "transparent",
                toolbar: { show: false },
                animations: { enabled: true },
                zoom: { enabled: false },
                selection: { enabled: false },
                dropShadow: { enabled: false },
              },
              stroke: { width: 1, curve: "smooth" },
              dataLabels: { enabled: false },
              fill: { type: "solid", opacity: [0.1, 0.5] },
              legend: {
                position: "bottom",
                // markers: {
                //   width: 26,
                //   height: 12,
                // },
                fontWeight: 600,
                fontSize: "12px",
              },
              xaxis: {
                type: "datetime",
                // max: dateRange.to ? new Date(dateRange.to).getTime() : undefined,
                axisBorder: { show: false },
                axisTicks: { show: false },

                labels: {
                  show: true,
                  style: {
                    fontSize: "12px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: 400,
                    cssClass: "apexcharts",
                  },
                },
              },
              yaxis: {
                min: 0,
                tickAmount: 4,
                labels: {
                  show: true,
                  formatter: function (value) {
                    return value.toFixed(2);
                  },
                  style: {
                    fontSize: "12px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: 400,
                    cssClass: "apexcharts-xaxis-label",
                  },
                },
              },
            }}
            series={series}
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </div>
  );
}
