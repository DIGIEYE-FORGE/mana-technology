/* eslint-disable @typescript-eslint/no-explicit-any */
import UpBar from "./up-bar";
import UpCards from "./up-cards";
import LeftBar from "./left-bar";
import RightBar from "./right-bar";
import { useAppContext } from "@/Context";
import useSWR from "swr";
import { ModelCanvas } from "../omniverse/model-viewer";

const JawCrusher = () => {
  const { backendApi } = useAppContext();

  const { data } = useSWR("last-telemetry", async () => {
    const res = await backendApi.findMany("lastTelemetry", {
      where: {
        device: {
          serial: "0V7ZJGB503H9WGH3",
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

    return filteredResults;
  });

  const { data: history } = useSWR("dpc-history/api/history", async () => {
    const res = await backendApi.findMany("dpc-history/api/history", {
      where: {
        serial: "0V7ZJGB503H9WGH3",
        createdAt: {
          $gt: "2025-05-25T17:43:19.795Z",
        },
      },
      pagination: {
        page: 1,
        perPage: 10000,
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
  });

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
        <main className="relative flex !h-fit flex-col gap-5 px-6 pb-6">
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
          <div className="absolute inset-0 isolate z-0 flex flex-1 items-center justify-center p-0">
            <ModelCanvas
              url={"/model/jaw02.glb"}
              position={[-40, 15, -20]}
              fov={10}
            />
          </div>
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
      </main>
    </div>
  );
};

export default JawCrusher;
