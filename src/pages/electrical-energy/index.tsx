/* eslint-disable @typescript-eslint/no-explicit-any */
import UpBar from "./up-bar";
import UpCards from "./up-cards";
import LeftBar from "./left-bar";
import RightBar from "./right-bar";
import { useAppContext } from "@/Context";
import useSWR from "swr";

import Loader from "@/components/loader";

import { useEffect, useState } from "react";
import {
  formatData,
  formatHistory,
  updateDataWithSocket,
} from "./utils/functions";
import { io } from "socket.io-client";
import { env } from "@/utils/env";
import MiddleBar from "./middle-bar";

const ElectricalEnergy = () => {
  const { backendApi } = useAppContext();
  const [upData, setUpData] = useState<any>(null);
  const [leftData, setLeftData] = useState<any>(null);
  const [rightData, setRightData] = useState<any>(null);
  const [middleData, setMiddleData] = useState<any>(null);

  const {
    // data: countData,
    error: countError,
    isLoading: isLoadingCount,
  } = useSWR("count-XN8EMW32H1T7CNI3", async () => {
    const res = await backendApi.getHistory(
      "/dpc-history/api/history/count/XN8EMW32H1T7CNI3",
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

  // const { data: RunningHoursData } = useSWR(
  //   "running-hours-jaw-crusher",
  //   async () => {
  //     const res = await backendApi.getHistory(
  //       "/dpc-history/api/history/firstLast/XN8EMW32H1T7CNI3",
  //       {
  //         telemetry: "s=6032-H-TOT-1130",
  //         startDate: new Date(new Date().setHours(0, 0, 0, 0)).toISOString(),
  //         endDate: new Date().toISOString(),
  //       },
  //     );
  //     return res;
  //   },
  //   {
  //     revalidateOnMount: true,
  //   },
  // );

  const { isLoading, error } = useSWR(
    "last-telemetry/jaw-crusher",
    async () => {
      const res = await backendApi.findMany("lastTelemetry", {
        where: {
          device: {
            serial: "XN8EMW32H1T7CNI3",
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
                ? Math.abs(item.value)?.toFixed(2)
                : item.value;
            return acc;
          },
          {} as Record<string, any>,
        );

        formatData(
          filteredResults,
          setUpData,
          setLeftData,
          setRightData,
          setMiddleData,
        );
      },
    },
  );

  const { isLoading: isLoadingHistory, error: errorHistory } = useSWR(
    `dpc-history/api/history/jaw-crusher/history`,
    async () => {
      const res = await backendApi.findMany("dpc-history/api/history", {
        where: {
          serial: "XN8EMW32H1T7CNI3",
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
                    y: Math.abs(value),
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
    socket.on("serial-XN8EMW32H1T7CNI3", (data) => {
      console.log("Received message:", data);
      const result: { [key: string]: any } = {};
      for (const [key, value] of Object.entries(data)) {
        if (typeof value === "number") {
          // Apply .toFixed(2) to number values
          result[key] = Math.abs(Number(value)).toFixed(2);
        } else {
          result[key] = value;
        }
      }

      console.log(result);
      updateDataWithSocket(
        result,
        setUpData,
        setLeftData,
        setRightData,
        setMiddleData,
      );
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
            {/* <div className="machine-highlight absolute bottom-[200px] left-1/2 aspect-square w-[300px] -translate-x-1/2 opacity-50">
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
            </div> */}
            <img
              src="/model/bg-pattern.png"
              className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full opacity-60"
            />
            {/* {JSON.stringify(countData["count"]["s=6210-WI-2217"])} */}
            <div className="z-1 absolute inset-0 isolate flex h-1 flex-1 items-center justify-center p-0">
              {/* {env.VITE_SHOW_MODEL && (
                <ModelCanvas
                  url={"/model/jaw02.glb"}
                  position={[10, 10, -40]}
                  fov={20}
                />
              )} */}
              {/* {JSON.stringify(leftData?.crushedFlow)} */}
            </div>
            <UpCards
              energy={upData?.energy || 0}
              powerDemand={upData?.powerDemand || 0}
              cosphi={upData?.cosphi || 0}
              reactivePower={upData?.reactivePower || 0}
              totalPower={upData?.totalPower || 0}
            />

            <div className="flex h-1 flex-1 justify-between gap-5">
              <LeftBar
                power={leftData?.power || []}
                energy={leftData?.energy || []}
                plantPower={leftData?.plantPower || []}
                minePower={leftData?.minePower || []}
                offsitePower={leftData?.offsitePower || []}
                powerValue={upData?.powerDemand || 0}
                energyValue={upData?.energy || 0}
                plantPowerValue={upData?.plantPower || 0}
                minePowerValue={upData?.minePower || 0}
                offsitePowerValue={upData?.offsitePower || 0}
              />
              <MiddleBar
                line1={middleData?.line1 || false}
                line2={middleData?.line2 || false}
                crushing={middleData?.crushing || false}
                plant1={middleData?.plant1 || false}
                plant2={middleData?.plant2 || false}
                mine={middleData?.mine || false}
                grinding={middleData?.grinding || false}
                reagents={middleData?.reagents || false}
                flotation={middleData?.flotation || false}
                concentrate={middleData?.concentrate || false}
                tailing={middleData?.tailing || false}
                sulfide={middleData?.sulfide || false}
                oxyde={middleData?.oxyde || false}
                regrinding={middleData?.regrinding || false}
                sag={middleData?.sag || false}
                ball={middleData?.ball || false}
                valueLeft={middleData?.valueLeft || "60 KV N° 691"}
                valueRight={middleData?.valueRight || "60 KV N° 691"}
                activePowerLeft={middleData?.activePowerLeft || 0}
                reactivePowerLeft={middleData?.reactivePowerLeft || 0}
                totalPowerLeft={middleData?.totalPowerLeft || 0}
                cosPhiLeft={middleData?.cosPhiLeft || 0}
                vaLeft={middleData?.vaLeft || 0}
                vbLeft={middleData?.vbLeft || 0}
                vcLeft={middleData?.vcLeft || 0}
                iaLeft={middleData?.iaLeft || 0}
                ibLeft={middleData?.ibLeft || 0}
                icLeft={middleData?.icLeft || 0}
                activePowerRight={middleData?.activePowerRight || 0}
                reactivePowerRight={middleData?.reactivePowerRight || 0}
                totalPowerRight={middleData?.totalPowerRight || 0}
                cosPhiRight={middleData?.cosPhiRight || 0}
                vaRight={middleData?.vaRight || 0}
                vbRight={middleData?.vbRight || 0}
                vcRight={middleData?.vcRight || 0}
                iaRight={middleData?.iaRight || 0}
                ibRight={middleData?.ibRight || 0}
                icRight={middleData?.icRight || 0}
                vaMiddle={middleData?.vaMiddle || 0}
                vbMiddle={middleData?.vbMiddle || 0}
                vcMiddle={middleData?.vcMiddle || 0}
                iCrushing={middleData?.iCrushing || 0}
                pCrushing={middleData?.pCrushing || 0}
                iProcess={middleData?.iProcess || 0}
                pProcess={middleData?.pProcess || 0}
                iMine={middleData?.iMine || 0}
                pMine={middleData?.pMine || 0}
                iArray={middleData?.iArray || []}
                pArray={middleData?.pArray || []}
              />
              <RightBar
                crushing={rightData?.crushing || []}
                crushingValue={upData?.crushingValue || 0}
                grinding={rightData?.grinding || []}
                grindingValue={upData?.grindingValue || 0}
                flotation={rightData?.flotation || []}
                flotationValue={upData?.flotationValue || 0}
                tailing={rightData?.tailing || []}
                tailingValue={upData?.tailingValue || 0}
                concentrate={rightData?.concentrate || []}
                concentrateValue={upData?.concentrateValue || 0}
                regeant={rightData?.regeant || []}
                regeantValue={upData?.regeantValue || 0}
              />
            </div>
          </main>
        )}
      </main>
    </div>
  );
};

export default ElectricalEnergy;
