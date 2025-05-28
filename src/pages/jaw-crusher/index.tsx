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

const JawCrusher = () => {
  const { backendApi, dateRange } = useAppContext();

  const { data, isLoading } = useSWR("last-telemetry", async () => {
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

    const filteredResults = res?.results?.reduce(
      (acc: Record<string, any>, item: any) => {
        acc[item.name] =
          typeof item.value === "number" ? item.value?.toFixed(2) : item.value;
        return acc;
      },
      {} as Record<string, any>,
    );

    return filteredResults;
  });

  const { data: history, isLoading: isLoadingHistory } = useSWR(
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

      const filteredResults = res?.results?.reduce(
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

      return filteredResults;
    },
  );

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
        {isLoadingHistory || isLoading ? (
          <div className="flex h-[100svh] items-center justify-center">
            <Loader />
          </div>
        ) : (
          <main className="relative flex !h-fit flex-col gap-5 px-6 pb-6">
            <div className="machine-highlight absolute bottom-0 left-1/2 aspect-square w-[500px] -translate-x-1/2">
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
              <ModelCanvas
                url={"/model/jaw02.glb"}
                position={[-40, 15, -20]}
                fov={10}
              />
            </div>
            <UpCards
              flowRateIn={data?.["s=6028-WI-1042"] || 0}
              flowRateOut={data?.["s=6032-WI-1142"] || 0}
              cadence={data?.["s=6032-WI-1142"] || 0}
              stockpileLevelMin={data?.["s=6028-LI-1009A"] || 0}
              stockpileLevelMax={data?.["s=6028-LI-1009B"] || 0}
              crushedOreMin={data?.["s=6120-LI-2006A"] || 0}
              crushedOreMax={data?.["s=6120-LI-2006B"] || 0}
              energy={data?.["s=6100-TR-2001"] || 0}
              power={data?.["s=6210-WI-2217"] || 0}
              crushed={data?.["s=6210-WI-2217"] || 0}
            />

            <div className="flex justify-between">
              <LeftBar
                runningState={data?.["s=6210-WI-2217"] || 0}
                frameLeft={history?.["s=6032-TT-1130C"] || []}
                frameRight={history?.["s=6032-TT-1130D"] || []}
                pitmanLeft={history?.["s=6032-TT-1130E"] || []}
                pitmanRight={history?.["s=6032-TT-1130F"] || []}
                v1={history?.["s=6032-TE-1130V1"] || []}
                u1={history?.["s=6032-TE-1130U1"] || []}
                w1={history?.["s=6032-TE-1130W1"] || []}
              />
              <RightBar
                conveyorRom={data?.["s=6032-FD-1107"] || 0}
                romBinWithdrawal={data?.["s=6032-FD-1107"] || 0}
                romStockpileAprf1={data?.["s=6028-FD-1021"] || 0}
                romStockpileAprf2={data?.["s=6028-FD-1022"] || 0}
                apronDischarge={data?.["s=6028-CV-1037"] || 0}
                grizzlyFeeder={data?.["s=6032-FD-1120"] || 0}
                diverterChute={data?.["s=6026-ZA-1004"] || 0}
                crushedOreApronFeeder1={data?.["s=6120-FD-2021"] || 0}
                crushedOreApronFeeder2={data?.["s=6120-FD-2022"] || 0}
                crushedOreApronFeeder3={data?.["s=6120-FD-2023"] || 0}
                crushedDischargeConveyor={data?.["s=6032-ZM-1142"] || 0}
                plantFeedConveyor={data?.["s=6120-CV-2040s"] || 0}
              />
            </div>
          </main>
        )}
      </main>
    </div>
  );
};

export default JawCrusher;
