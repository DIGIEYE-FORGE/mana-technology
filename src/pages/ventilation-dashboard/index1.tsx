/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/card";
import { MoteurCard } from "./components/moteurCard";
// import { BarChart } from "./components/bar-chart";
import { data, ventilation } from "./data";
// qualitédair
// import { QualitAir } from "./components/qualite-air";
import { VentilationCard } from "./components/ventilation-card";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { useAppContext } from "@/Context";
import Loader from "@/components/loader";
import { flatten } from "@/utils";

const VentilationDashboard1 = () => {
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
        perPage: dataRealTime ? 20 : 10_000,
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
    <div className="flex h-fit min-h-full w-full flex-wrap gap-8">
      <div className="flex w-1 min-w-[30rem] flex-1 flex-col gap-4">
        <h1 className="text-lg font-semibold text-orange-300">
          Qualité de l’air
        </h1>
        {data[0].children.map((child, index) => (
          <Card key={index} className="flex h-[11rem] w-full flex-col">
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
          </Card>
        ))}
        {data[2].children.map((child, index) => (
          <Card key={index} className="flex h-[11rem] w-full flex-col">
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
          </Card>
        ))}
      </div>
      <div className="flex w-1 min-w-[30rem] flex-1 flex-col gap-4">
        <h1 className="text-lg font-semibold text-orange-300">
          Marche Ventilateurs
        </h1>
        <div className="flex h-[11rem] justify-between gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-1 gap-4">
              <Card className="!rounded !px-2 !py-3">
                <VentilationCard {...ventilation[1]} interval={5000} />
              </Card>
              <Card className="!rounded !px-2 !py-3">
                <VentilationCard {...ventilation[2]} interval={5000} />
              </Card>
            </div>
            <Card className="flex-1 !rounded !px-2 !py-3">
              <VentilationCard {...ventilation[0]} interval={5000} />
            </Card>
          </div>

          <Card className="h-ful flex w-full flex-1 flex-col gap-2 p-6">
            <img
              src="/animation.gif"
              alt=""
              className="h-full w-full object-cover"
            />
          </Card>
        </div>
        {data[1].children.map((child, index) => (
          <Card key={index} className="flex h-[11rem] w-full flex-col">
            <h1 className="text-center text-lg font-semibold">{child.title}</h1>
            <div className="h-1 flex-1">
              <MoteurCard
                attributes={child.attributes}
                max={child?.max}
                min={child?.min}
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
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VentilationDashboard1;
