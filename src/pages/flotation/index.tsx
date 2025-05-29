/* eslint-disable @typescript-eslint/no-explicit-any */
import UpBar from "./up-bar";
import UpCards from "./up-cards";
import LeftBar from "./left-bar";
import RightBar from "./right-bar";

import Circle1 from "@/assets/circle-1.svg?react";
import Circle2 from "@/assets/circle-2.svg?react";
import Circle3 from "@/assets/circle-3.svg?react";
import Light from "@/assets/light.svg?react";
import { useEffect, useState } from "react";
import { useAppContext } from "@/Context";
import useSWR from "swr";
// import { ModelCanvas } from "../omniverse/model-viewer";
import {
  formatData,
  formatHistory,
  updateDataWithSocket,
} from "./utils/functions";
import Loader from "@/components/loader";
import { io } from "socket.io-client";
import { env } from "@/utils/env";
import { ModelCanvas } from "../omniverse/model-viewer";

const Flotation = () => {
  const { backendApi, dateRange } = useAppContext();
  const [upData, setUpData] = useState<any>({});
  const [leftData, setLeftData] = useState<any>({});
  const [rightData, setRightData] = useState<any>({});

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
          perPage: 1000,
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
    `dpc-history/api/history`,
    async () => {
      const res = await backendApi.findMany("dpc-history/api/history", {
        where: {
          serial: "0V7ZJGB503H9WGH3",
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
        {isLoading || isLoadingHistory ? (
          <div className="flex h-[calc(100svh-80px)] items-center justify-center">
            <Loader />
          </div>
        ) : error || historyError ? (
          <div className="flex h-[calc(100svh-80px)] items-center justify-center">
            <div className="text-red-500">
              Error loading data. Please try again later.
            </div>
          </div>
        ) : (
          <main className="relative flex !h-fit gap-5 px-6 pb-6 text-xs">
            <div className="machine-highlight absolute bottom-[100px] left-1/2 aspect-square w-[400px] -translate-x-1/2">
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
            <div className="z-1 absolute inset-0 isolate flex flex-1 items-center justify-center p-0">
              {env.VITE_SHOW_MODEL === "true" && (
                <ModelCanvas
                  url={"/ignore/flotation_01.glb"}
                  position={[-40, 15, -10]}
                  fov={100}
                />
              )}
              // {/* )} */}
            </div>
            <div className="flex w-full flex-col justify-between gap-1">
              <UpCards
                flotYield={upData?.flotYield || 0}
                sulfideYield={upData?.sulfideYield || 0}
                oxydeYield={upData?.oxydeYield || 0}
                concentrateProduction={upData?.concentrateProduction || 0}
                metalProduction={upData?.metalProduction || 0}
                energy={upData?.energy || 0}
                water={upData?.water || 0}
              />
              <LeftBar
                oThickner={leftData?.oThickner || []}
                iFilter={leftData?.iFilter || []}
                oFilterWet={leftData?.oFilterWet || []}
                oFilterDry={leftData?.oFilterDry || []}
                /******************************************** */
                oThicknerTonnage={leftData?.oThicknerTonnage || 0}
                iFilterTonnage={leftData?.iFilterTonnage || 0}
                oFilterWetTonnage={leftData?.oFilterWetTonnage || 0}
                oFilterDryTonnage={leftData?.oFilterDryTonnage || 0}
                /******************************************** */
                iSulfide={leftData?.iSulfide || []}
                cSulfide={leftData?.cSulfide || []}
                iOxyde={leftData?.iOxyde || []}
                cOxyde={leftData?.cOxyde || []}
                tOxyde={leftData?.tOxyde || []}
                /******************************************** */
                iSulfideCop={leftData?.iSulfideCop || 0}
                iSulfideSil={leftData?.iSulfideSil || 0}
                cSulfideCop={leftData?.cSulfideCop || 0}
                cSulfideSil={leftData?.cSulfideSil || 0}
                iOxydeCop={leftData?.iOxydeCop || 0}
                iOxydeSil={leftData?.iOxydeSil || 0}
                cOxydeCop={leftData?.cOxydeCop || 0}
                cOxydeSil={leftData?.cOxydeSil || 0}
                tOxydeCop={leftData?.tOxydeCop || 0}
                tOxydeSil={leftData?.tOxydeSil || 0}
                /******************************************** */
                iRegrind={leftData?.iRegrind || []}
                iCyclRegrind={leftData?.iCyclRegrind || []}
                iCyclDesl={leftData?.iCyclDesl || []}
                oThickner2={leftData?.oThickner2 || []}
                iThickner={leftData?.iThickner || []}
                /******************************************** */
                iRegrindVal={leftData?.iRegrindVal || 0}
                iCyclRegrindVal={leftData?.iCyclRegrindVal || 0}
                iCyclDeslVal={leftData?.iCyclDeslVal || 0}
                oThickner2Val={leftData?.oThickner2Val || 0}
                iThicknerVal={leftData?.iThicknerVal || 0}
                /******************************************** */
                pax1={leftData?.pax1 || []}
                pax2={leftData?.pax2 || []}
                pax1Val={leftData?.pax1Val || 0}
                pax2Val={leftData?.pax2Val || 0}
                /******************************************** */
                mibc1={leftData?.mibc1 || []}
                mibc2={leftData?.mibc2 || []}
                mibc1Val={leftData?.mibc1Val || 0}
                mibc2Val={leftData?.mibc2Val || 0}
                /******************************************** */
                nahs1={leftData?.nahs1 || []}
                nahs2={leftData?.nahs2 || []}
                nahs1Val={leftData?.nahs1Val || 0}
                nahs2Val={leftData?.nahs2Val || 0}
                /******************************************** */
                air1={leftData?.air1 || []}
                air2={leftData?.air2 || []}
                air1Val={leftData?.air1Val || 0}
                air2Val={leftData?.air2Val || 0}
              />
            </div>
            <RightBar
              sulfide={rightData?.sulfide || {}}
              oxyde={rightData?.oxyde || {}}
            />
          </main>
        )}
      </main>
    </div>
  );
};

export default Flotation;
