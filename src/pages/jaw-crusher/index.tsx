/* eslint-disable @typescript-eslint/no-explicit-any */
import UpBar from "./up-bar";
import UpCards from "./up-cards";
import LeftBar from "./left-bar";
import RightBar from "./right-bar";
import { useAppContext } from "@/Context";
import useSWR from "swr";
// import { ModelCanvas } from "../omniverse/model-viewer";
import Circle1 from "@/assets/circle-1.svg?react";
import Circle2 from "@/assets/circle-2.svg?react";
import Circle3 from "@/assets/circle-3.svg?react";
import Light from "@/assets/light.svg?react";
import Loader from "@/components/loader";
import { Card } from "@/components/card";
import ReactApexChart from "react-apexcharts";
import { useEffect, useState } from "react";
import {
  formatData,
  formatHistory,
  updateDataWithSocket,
} from "./utils/functions";
import { io } from "socket.io-client";
import { env } from "@/utils/env";
import { ModelCanvas } from "../omniverse/model-viewer";

const JawCrusher = () => {
  const { backendApi } = useAppContext();
  const [upData, setUpData] = useState<any>(null);
  const [leftData, setLeftData] = useState<any>(null);
  const [rightData, setRightData] = useState<any>(null);

  const {
    data: countData,
    error: countError,
    isLoading: isLoadingCount,
  } = useSWR("count-0V7ZJGB503H9WGH3", async () => {
    const res = await backendApi.getHistory(
      "/dpc-history/api/history/count/0V7ZJGB503H9WGH3",
      {
        telemetries: [
          {
            name: "s=6210-WI-2217",
            value: [true, false],
          },
          {
            name: "s=6032-FD-1107",
            value: [true, false],
          },
          {
            name: "s=6028-FD-1021",
            value: [true, false],
          },
          {
            name: "s=6028-FD-1022",
            value: [true, false],
          },
          {
            name: "s=6028-CV-1037",
            value: [true, false],
          },
          {
            name: "s=6032-FD-1120",
            value: [true, false],
          },
          {
            name: "s=6026-ZA-1004",
            value: [true, false],
          },
          {
            name: "s=6120-FD-2021",
            value: [true, false],
          },
          {
            name: "s=6120-FD-2022",
            value: [true, false],
          },
          {
            name: "s=6120-FD-2023",
            value: [true, false],
          },
          {
            name: "s=6032-ZM-1142",
            value: [true, false],
          },
          {
            name: "s=6120-CV-2040",
            value: [true, false],
          },
          {
            name: "s=6032-CV-1140",
            value: [true, false],
          },
          {
            name: "s=6032-H-TOT-1130",
            value: [true, false],
          },
        ],
      },
    );
    return res;
  });

  const { data: RunningHoursData } = useSWR(
    "running-hours-jaw-crusher",
    async () => {
      const res = await backendApi.getHistory(
        "/dpc-history/api/history/firstLast/0V7ZJGB503H9WGH3",
        {
          telemetry: "s=6032-H-TOT-1130",
          startDate: new Date(new Date().setHours(0, 0, 0, 0)).toISOString(),
          endDate: new Date().toISOString(),
        },
      );
      return res;
    },
    {
      revalidateOnMount: true,
    },
  );

  const { isLoading, error } = useSWR(
    "last-telemetry/jaw-crusher",
    async () => {
      const res = await backendApi.findMany("lastTelemetry", {
        where: {
          device: {
            serial: "0V7ZJGB503H9WGH3",
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
      revalidateOnMount: true,
      onSuccess: (data) => {
        const filteredResults = data?.results?.reduce(
          (acc: Record<string, any>, item: any) => {
            acc[item.name] =
              typeof item.value === "number"
                ? item.value?.toFixed(2)
                : item.value;
            return acc;
          },
          {} as Record<string, any>,
        );

        formatData(filteredResults, setUpData, setLeftData, setRightData);
      },
    },
  );

  const { isLoading: isLoadingHistory, error: errorHistory } = useSWR(
    `dpc-history/api/history/jaw-crusher/history`,
    async () => {
      const res = await backendApi.findMany("dpc-history/api/history", {
        where: {
          serial: "0V7ZJGB503H9WGH3",
        },
        pagination: {
          page: 1,
          perPage: 10,
        },
      });

      return res;
    },
    {
      revalidateOnMount: true,
      onSuccess: (data) => {
        const filteredResults = data?.results?.reduce(
          (acc: Record<string, any>, item: any) => {
            Object.entries(item).forEach(([key, value]) => {
              if (typeof value === "number" && key !== "deviceId")
                acc[key] = [
                  {
                    x: new Date(item.createdAt),
                    y: value,
                  },
                  ...(acc[key] || []),
                ];
            });
            return acc;
          },
          {} as Record<string, any>,
        );

        formatHistory(filteredResults, setLeftData);
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
    socket.on("serial-0V7ZJGB503H9WGH3", (data) => {
      // console.log("Received message:", data);
      updateDataWithSocket(data, setUpData, setLeftData, setRightData);
    });
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div
      className="h-[100svh] overflow-auto"
      style={{
        backgroundImage:
          "linear-gradient(to left, #061991b1 75%, transparent 100%)",
      }}
    >
      <main className="mx-auto flex max-w-[1920px] flex-col gap-3">
        <UpBar />
        {isLoadingHistory || isLoading || isLoadingCount ? (
          <div className="flex h-[100svh] items-center justify-center">
            <Loader />
          </div>
        ) : countError || error || errorHistory ? (
          <div className="flex h-[100svh] items-center justify-center">
            <span className="text-white">
              Error loading data, please try again later.
            </span>
          </div>
        ) : (
          <main className="relative flex h-1 min-h-[44rem] flex-1 flex-col gap-5 px-6 pb-6">
            <div className="machine-highlight absolute bottom-[200px] left-1/2 aspect-square w-[300px] -translate-x-1/2 opacity-50">
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
            <img
              src="/model/bg-pattern.png"
              className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full opacity-60"
            />
            {/* {JSON.stringify(countData["count"]["s=6210-WI-2217"])} */}
            <div className="z-1 absolute inset-0 isolate flex h-1 flex-1 items-center justify-center p-0">
              {env.VITE_SHOW_MODEL && (
                <ModelCanvas
                  url={"/model/jaw02.glb"}
                  position={[10, 10, -40]}
                  fov={20}
                />
              )}
              {/* {JSON.stringify(leftData?.crushedFlow)} */}
            </div>
            <UpCards
              flowRateIn={upData?.flowRateIn || 0}
              flowRateOut={upData?.flowRateOut || 0}
              cadence={upData?.cadence || 0}
              stockpileLevelMin={upData?.stockpileLevelMin || 0}
              stockpileLevelMax={upData?.stockpileLevelMax || 0}
              crushedOreMin={upData?.crushedOreMin || 0}
              crushedOreMax={upData?.crushedOreMax || 0}
              energy={upData?.energy || 0}
              power={upData?.power || 0}
              crushed={upData?.crushed || 0}
              jawCrusher={upData?.jawCrusher}
              runingState={
                (countData as any)?.count?.["s=6032-H-TOT-1130"] || {}
              }
            />

            <div className="flex h-1 flex-1 gap-5">
              <LeftBar
                runningState={
                  (countData as any)?.count?.["s=6032-H-TOT-1130"] || []
                }
                runningHours={RunningHoursData as any}
                frameLeft={leftData?.frameLeft || []}
                frameRight={leftData?.frameRight || []}
                pitmanLeft={leftData?.pitmanLeft || []}
                pitmanRight={leftData?.pitmanRight || []}
                v1={leftData?.v1 || []}
                u1={leftData?.u1 || []}
                w1={leftData?.w1 || []}
              />
              <Card className="h-[200px] flex-1 self-end !rounded">
                <ReactApexChart
                  height={"100%"}
                  options={{
                    chart: {
                      height: 200,
                      type: "line",
                      zoom: {
                        enabled: false,
                      },
                      toolbar: {
                        show: false,
                      },
                    },
                    tooltip: {
                      theme: "dark",
                    },
                    title: {
                      text: "Crushed Ore Flow (t/h)",
                      align: "left",
                      style: {
                        fontSize: "14px",
                        color: "#ffffff",
                      },
                    },
                    stroke: {
                      curve: "smooth",
                      width: 3,
                    },
                    colors: ["#FFCA05"],
                    legend: {
                      labels: {
                        colors: "#A2B0B8",
                      },
                      markers: {
                        shape: "circle",
                      },
                    },
                    xaxis: {
                      labels: {
                        style: {
                          colors: "#A2B0B8",
                        },
                      },
                      type: "datetime",
                    },
                    yaxis: {
                      labels: {
                        style: {
                          colors: "#A2B0B8",
                        },
                      },
                      decimalsInFloat: 2,
                    },
                  }}
                  series={[
                    {
                      name: "Crushed Ore Flow",
                      data: [],
                    },
                  ]}
                />
              </Card>
              <RightBar
                runingState={countData as any}
                conveyorRom={rightData?.conveyorRom || 0}
                romBinWithdrawal={rightData?.romBinWithdrawal || 0}
                romStockpileAprf1={rightData?.romStockpileAprf1 || 0}
                romStockpileAprf2={rightData?.romStockpileAprf2 || 0}
                apronDischarge={rightData?.apronDischarge || 0}
                grizzlyFeeder={rightData?.grizzlyFeeder || 0}
                diverterChute={rightData?.diverterChute || 0}
                crushedOreApronFeeder1={rightData?.crushedOreApronFeeder1 || 0}
                crushedOreApronFeeder2={rightData?.crushedOreApronFeeder2 || 0}
                crushedOreApronFeeder3={rightData?.crushedOreApronFeeder3 || 0}
                crushedDischargeConveyor={
                  rightData?.crushedDischargeConveyor || 0
                }
                plantFeedConveyor={rightData?.plantFeedConveyor || 0}
              />
            </div>
          </main>
        )}
      </main>
    </div>
  );
};

export default JawCrusher;
