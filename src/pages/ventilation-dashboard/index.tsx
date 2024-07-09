/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/card";
import { MoteurCard } from "./components/moteurCard";
// import { BarChart } from "./components/bar-chart";
import { data, ventilation } from "./data";
// import { QualitAir } from "./components/qualite-air";
import { VentilationCard } from "./components/ventilation-card";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import { useAppContext } from "@/Context";
import { flatten } from "@/utils";
// import { cn } from "@/lib/utils";

const VentilationDashboard = () => {
  const { dateRange, backendApi } = useAppContext();
  const [dataRealTime] = useState(true);
  const [ChartData, setChartData] = useState<{
    name: string;
    color: string;
    data: {
      x: Date;
      y: number;
    }[];
  } | null>(null);

  const fetcher = async () => {
    const res = await backendApi.findMany("/dpc-history/api/history", {
      pagination: {
        page: 1,
        perPage: 20,
      },
      where: {
        serial: data.serial,
        createdAt: !dataRealTime
          ? {
              $gte: dateRange?.from,
              $lte: dateRange?.to,
            }
          : undefined,
      },
    });
    return res.results || [];
  };

  const fetchInterval = 5000;
  const {
    data: res,
    isLoading,
    error,
  } = useSWR(
    `dataHistory${!dataRealTime ? `from=${dateRange?.from}&to=${dateRange?.to}` : ""}`,
    fetcher,
    { refreshInterval: dataRealTime ? fetchInterval : undefined },
  );

  useEffect(() => {
    if (res && !dataRealTime) {
      setChartData(res as any);
    }
  }, [dataRealTime, res]);

  useEffect(() => {
    if ((!isLoading && !error) || !dataRealTime) return;
    const intervalId = setInterval(async () => {
      const newData = await fetcher();
      setChartData(newData as any);
    }, fetchInterval);

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [fetchInterval]);

  if (isLoading)
    return (
      <div className="flex h-[calc(100svh-6rem)] w-full flex-1 items-center justify-center">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="flex h-[calc(100svh-6rem)] w-full items-center justify-center text-xl">
        <h3>Something went wrong.</h3>
      </div>
    );

  return (
    <main className="grid h-full w-full grid-flow-dense auto-rows-[6.5rem] grid-cols-[repeat(9,minmax(0,1fr))] gap-4 [&>*]:p-4">
      <Card className="col-span-3 row-span-7 flex flex-col justify-evenly gap-2">
        {data[0].children.map((child, index) => (
          <div
            key={index}
            className="flex h-[12rem] w-full flex-col rounded-xl bg-card/20 shadow-xl shadow-black/10"
          >
            <h1 className="text-center text-lg font-semibold">{child.title}</h1>
            <div className="h-1 flex-1">
              <MoteurCard
                attributes={child.attributes}
                val={child.attributes.telemetries.map((telemetry) => {
                  return {
                    name: telemetry.label || telemetry.name,
                    color: telemetry.color,
                    data:
                      ((ChartData || []) as any)?.map(
                        (item: Record<string, unknown>) => ({
                          x: new Date(item.createdAt as any),
                          y: Number(flatten(item)[telemetry.name]),
                        }),
                      ) || [],
                  };
                })}
              />
            </div>
          </div>
        ))}
      </Card>
      <Card>
        <VentilationCard
          {...ventilation[0]}
          interval={5000}
          data={ventilation[0].telemetry.map((t) => {
            return {
              label: t.label,
              value: ChartData
                ? Number(flatten((ChartData as any)?.[0][t.name]))
                : 0,
            };
          })}
        />
      </Card>
      <Card>
        <VentilationCard
          {...ventilation[1]}
          interval={5000}
          data={ventilation[1].telemetry.map((t) => {
            return {
              label: "",
              value: ChartData
                ? Number(flatten((ChartData as any)?.[0][t.name]))
                : 0,
            };
          })}
        />
      </Card>
      <Card>
        <VentilationCard
          {...ventilation[2]}
          interval={5000}
          data={ventilation[2].telemetry.map((t) => {
            return {
              label: "",
              value: ChartData
                ? Number(flatten((ChartData as any)?.[0][t.name]))
                : 0,
            };
          })}
        />
      </Card>
      <Card className="col-span-3 row-span-7 flex flex-col justify-between gap-2">
        {data[1].children.map((child, index) => (
          <div
            key={index}
            className="flex h-[12rem] w-full flex-col rounded-xl bg-card/20 shadow-xl shadow-black/10"
          >
            <h1 className="text-center text-lg font-semibold">{child.title}</h1>
            <div className="h-1 flex-1">
              <MoteurCard
                attributes={child.attributes}
                val={child.attributes.telemetries.map((telemetry) => {
                  return {
                    name: telemetry.label || telemetry.name,
                    color: telemetry.color,
                    data:
                      ((ChartData || []) as any)?.map(
                        (item: Record<string, unknown>) => ({
                          x: new Date(item.createdAt as any),
                          y: Number(flatten(item)[telemetry.name]),
                        }),
                      ) || [],
                  };
                })}
              />
            </div>
          </div>
        ))}
      </Card>
      <Card className="col-span-3 row-span-3">
        <img
          src="/animation.gif"
          alt=""
          className="h-full w-full object-cover"
        />
      </Card>
      <Card className="col-span-3 row-span-3">
        {data[2].children.map((child, index) => (
          <div
            key={index}
            className="flex h-full w-full flex-col rounded-xl bg-card/20 shadow-xl shadow-black/10"
          >
            <h1 className="text-center text-lg font-semibold">{child.title}</h1>
            <div className="flex-1">
              <MoteurCard
                attributes={child.attributes}
                val={child.attributes.telemetries.map((telemetry) => {
                  return {
                    name: telemetry.label || telemetry.name,
                    color: telemetry.color,
                    data:
                      ((ChartData || []) as any)?.map(
                        (item: Record<string, unknown>) => ({
                          x: new Date(item.createdAt as any),
                          y: Number(flatten(item)[telemetry.name]),
                        }),
                      ) || [],
                  };
                })}
              />
            </div>
          </div>
        ))}
      </Card>
    </main>
  );
};

export default VentilationDashboard;
