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

const PebbleCrusher = () => {
  const { backendApi, dateRange } = useAppContext();

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

  const { data: history } = useSWR(
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
          <div className="absolute inset-0 isolate z-0 flex flex-1 items-center justify-center p-0">
            <ModelCanvas
              url={"/model/pebble.glb"}
              position={[-40, 15, -20]}
              fov={10}
            />
          </div>
          <UpCards
            flowRate={data?.["s=6210-WI-2215"] || 0}
            energy={data?.["s=6100-TR-2001"] || 0}
            utilization={data?.["s=6210-WI-2217"] || 0}
            bounce1={data?.["s=6140-VT-2426A"] || 0}
            bounce2={data?.["s=6140-VT-2426B"] || 0}
            bounce3={data?.["s=6140-VT-2426C"] || 0}
          />
          <div className="flex justify-between">
            <LeftBar
              runningState={data?.["s=6210-WI-2217"] || 0}
              nde={history?.["s=6140-TE-2426NDE"] || []}
              de={history?.["s=6140-TE-2426DE"] || []}
              u1={history?.["s=6140-TE-2426U1"] || []}
              v1={history?.["s=6140-TE-2426V1"] || []}
              w1={history?.["s=6140-TE-2426W1"] || []}
            />
            <RightBar
              pressure={data?.["s=6210-WI-2215"] || 0}
              hydraulic={data?.["s=6140-PDSH-2426C"] || 0}
              clamping={data?.["s=6140-PIT-2426D"] || 0}
              tramp={data?.["s=6140-PIT-2426E"] || 0}
              lub={data?.["s=6140-PDSH-2426F"] || 0}
              tank={history?.["s=6140-TE-2426E"] || 0}
              return={history?.["s=6140-TE-2426F"] || 0}
            />
          </div>
        </main>
      </main>
    </div>
  );
};

export default PebbleCrusher;
