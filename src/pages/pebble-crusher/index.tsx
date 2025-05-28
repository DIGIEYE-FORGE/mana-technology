/* eslint-disable @typescript-eslint/no-explicit-any */
import UpBar from "./up-bar";
import UpCards from "./up-cards";
import LeftBar from "./left-bar";
import RightBar from "./right-bar";
import { useAppContext } from "@/Context";
import useSWR from "swr";
import { ModelCanvas } from "../omniverse/model-viewer";
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

const PebbleCrusher = () => {
  const { backendApi, dateRange } = useAppContext();
  const [upData, setUpData] = useState<any>(null);
  const [leftData, setLeftData] = useState<any>(null);
  const [rightData, setRightData] = useState<any>(null);

  const { error: countError, isLoading: isLoadingCount } = useSWR(
    "count",
    async () => {
      const res = await backendApi.getHistory(
        "/dpc-history/api/history/count/0V7ZJGB503H9WGH3",
        {
          startDate: new Date(
            dateRange?.from ||
              /// last hour
              new Date(Date.now() - 60 * 60 * 1000),
          ).toISOString(),
          endDate: new Date(dateRange?.to || new Date()).toISOString(),
          telemetries: [
            {
              name: "s=6140-CR-2426",
              value: true,
            },
            {
              name: "s=6140-CR-2426",
              value: false,
            },
          ],
        },
      );
      return res;
    },
  );

  const { isLoading, error } = useSWR(
    "last-telemetry",
    async () => {
      const res = await backendApi.findMany("lastTelemetry", {
        where: {
          device: {
            serial: "0V7ZJGB503H9WGH3",
          },
        },
        pagination: {
          page: 1,
          perPage: 400,
        },
      });

      return res;
    },
    {
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

  const { isLoading: isLoadingHistory, error: historyError } = useSWR(
    `dpc-history/api/history/${dateRange?.from}/${dateRange?.to}`,
    async () => {
      const res = await backendApi.findMany("dpc-history/api/history", {
        where: {
          serial: "0V7ZJGB503H9WGH3",
          createdAt: {
            $gt: dateRange?.from,
            $lte: dateRange?.to,
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

        formatHistory(filteredResults, setLeftData, setRightData);
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
        {isLoading || isLoadingHistory || isLoadingCount ? (
          <div className="flex h-[calc(100svh-80px)] items-center justify-center">
            <Loader />
          </div>
        ) : error || historyError || countError ? (
          <div className="flex h-[calc(100svh-80px)] items-center justify-center">
            <div className="text-red-500">
              Error loading data. Please try again later.
            </div>
          </div>
        ) : (
          <main className="relative flex !h-fit flex-col gap-5 px-6 pb-6">
            <div className="machine-highlight absolute bottom-[150px] left-1/2 aspect-square w-[500px] -translate-x-1/2">
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
            <div className="absolute inset-0 isolate z-0 flex flex-1 items-center justify-center p-0">
              <ModelCanvas
                url={"/model/pebble.glb"}
                position={[10, 10, -40]}
                fov={20}
              />
            </div>
            <UpCards
              flowRate={upData?.flowRate || 0}
              energy={upData?.energy || 0}
              utilization={upData?.utilization || 0}
              bounce1={upData?.bounce1 || 0}
              bounce2={upData?.bounce2 || 0}
              bounce3={upData?.bounce3 || 0}
            />
            <div className="flex gap-5">
              <LeftBar
                runningState={leftData?.runningState || 0}
                nde={leftData?.nde || []}
                de={leftData?.de || []}
                u1={leftData?.u1 || []}
                v1={leftData?.v1 || []}
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
                      text: "Crushed Ore Flow",
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
                      data: leftData?.crushedFlow || [],
                    },
                  ]}
                />
              </Card>
              <RightBar
                pressure={rightData?.pressure || 0}
                hydraulic={rightData?.hydraulic || 0}
                clamping={rightData?.clamping || 0}
                tramp={rightData?.tramp || 0}
                lub={rightData?.lub || 0}
                tank={rightData?.tank || []}
                return={rightData?.return || []}
              />
            </div>
          </main>
        )}
      </main>
    </div>
  );
};

export default PebbleCrusher;
