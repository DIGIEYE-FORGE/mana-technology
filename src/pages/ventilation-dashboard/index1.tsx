/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/card";
import { MoteurCard } from "./components/moteurCard";
import { data, ventilation } from "./data";
import { VentilationCard } from "./components/ventilation-card";
import useSWR from "swr";
import { useEffect, useMemo, useState } from "react";
import { useAppContext } from "@/Context";
import Loader from "@/components/loader";
import { flatten } from "@/utils";
import io from "socket.io-client";
import { Button } from "@/components/ui/button";
import { Timer, TimerOff } from "lucide-react";

const VentilationDashboard1 = () => {
  const { dateRange, backendApi } = useAppContext();
  const [dataRealTime, setDataRealTime] = useState<boolean>(true);
  const [socketData, setSocketData] = useState<any[]>([]);
  const [relaod, setReload] = useState<undefined | number>(undefined);
  const fetcher = async () => {
    const res = await backendApi.findMany("/dpc-history/api/history", {
      pagination: {
        page: 1,
        perPage: dataRealTime ? 20 : 1500,
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

  const {
    data: res,
    isLoading,
    error,
  } = useSWR(
    `dataHistory${!dataRealTime ? `from=${dateRange?.from}&to=${dateRange?.to}` : `realTime=${dataRealTime} ${relaod}`}`,
    fetcher,
  );

  const chartData = useMemo(() => {
    if (!dataRealTime) {
      return res;
    }
    if (res) {
      return [...socketData, ...res].splice(0, 30);
    }
    return null;
  }, [res, socketData, dataRealTime]);

  useEffect(() => {
    if (!dataRealTime) return;
    const socket = io("https://ws.managem.digieye.io");
    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    setReload(new Date().getTime());
    socket.on(`telemetry`, (newData: any) => {
      setSocketData((prev: any) => {
        return [
          {
            ...newData,
            date: new Date(),
            createdAt: new Date(),
          },
          ...prev,
        ];
      });
      console.log("New data received from WebSocket server", newData);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
    });

    return () => {
      socket.disconnect();
    };
  }, [dataRealTime]);

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
        {data[0].children?.map((child, index) => (
          <Card key={index} className="flex h-[11rem] w-full flex-col">
            <h1 className="text-center text-lg font-semibold">{child.title}</h1>
            <div className="h-1 flex-1">
              <MoteurCard
                attributes={child.attributes}
                val={child?.attributes?.telemetries?.map((telemetry) => {
                  return {
                    name: telemetry?.label || telemetry?.name,
                    color: telemetry?.color,
                    data:
                      ((chartData || []) as any)?.map(
                        (item: Record<string, unknown>) => ({
                          x: new Date(item?.createdAt as any),
                          y: Number(flatten(item)?.[telemetry.name] || 0),
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
                attributes={child?.attributes}
                val={child?.attributes?.telemetries?.map((telemetry) => {
                  return {
                    name: telemetry?.label || telemetry?.name,
                    color: telemetry?.color,
                    data:
                      ((chartData || []) as any)?.map(
                        (item: Record<string, unknown>) => ({
                          x: new Date(item?.createdAt as any),
                          y: Number(flatten(item)?.[telemetry.name] || 0),
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
        <div className="flex justify-between gap-4">
          <h1 className="text-lg font-semibold text-orange-300">
            Marche Ventilateurs
          </h1>
          <Button
            className="h-[2rem]"
            variant={"outline"}
            onClick={() => {
              setDataRealTime(!dataRealTime);
            }}
          >
            {dataRealTime ? (
              <div className="flex gap-2">
                <span>Real Time</span>
                <Timer className="text-green-500" />
              </div>
            ) : (
              <div className="flex gap-2">
                <span>History</span>
                <TimerOff className="text-red-500" />
              </div>
            )}
          </Button>
        </div>
        <div className="flex h-[11rem] justify-between gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-1 gap-4">
              <Card className="!rounded !px-2 !py-3">
                <VentilationCard
                  {...ventilation[1]}
                  interval={5000}
                  data={ventilation?.[1]?.telemetry?.map((t) => {
                    return {
                      label: "",
                      value: chartData
                        ? Number((chartData as any)?.[0]?.[t.name])
                        : 0,
                    };
                  })}
                />
              </Card>
              <Card className="!rounded !px-2 !py-3">
                <VentilationCard
                  {...ventilation[2]}
                  interval={5000}
                  data={ventilation[2].telemetry?.map((t) => {
                    return {
                      label: "",
                      value: chartData
                        ? Number((chartData as any)?.[0]?.[t.name])
                        : 0,
                    };
                  })}
                />
              </Card>
            </div>
            <Card className="flex-1 !rounded !px-2 !py-3">
              <VentilationCard
                {...ventilation[0]}
                interval={5000}
                data={ventilation[0]?.telemetry?.map((t) => {
                  return {
                    label: t.label,
                    value: chartData
                      ? Number((chartData as any)?.[0]?.[t.name])
                      : 0,
                  };
                })}
              />
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
        {data[1].children?.map((child, index) => (
          <Card key={index} className="flex h-[11rem] w-full flex-col">
            <h1 className="text-center text-lg font-semibold">{child.title}</h1>
            <div className="h-1 flex-1">
              <MoteurCard
                attributes={child.attributes}
                max={child?.max}
                min={child?.min}
                val={child.attributes.telemetries?.map((telemetry) => {
                  return {
                    name: telemetry.label || telemetry.name,
                    color: telemetry.color,
                    data:
                      ((chartData || []) as any)?.map(
                        (item: Record<string, unknown>) => ({
                          x: new Date(item.createdAt as any),
                          y: Number(flatten(item)?.[telemetry.name]),
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
