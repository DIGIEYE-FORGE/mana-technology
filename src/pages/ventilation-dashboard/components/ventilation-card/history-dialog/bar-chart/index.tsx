/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from "swr";

import { HistoryType, flatten } from "@/utils";
import Loader from "@/components/loader";

import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useAppContext } from "@/Context";

interface BarChartProps {
  title: string;
  telemetries: {
    name: string;
    serial: string;
    label?: string;
    color?: string;
  }[];
  interval?: number;
}

export const BarChart = ({ title, telemetries, interval }: BarChartProps) => {
  const { backendApi, dateRange } = useAppContext();
  const [chartData, setChartData] = useState<any[]>([]);
  const fetchInterval = interval || 10000;

  const fetcher = async () => {
    if (!dateRange?.from || telemetries.length === 0) return [];
    const res = await Promise.all(
      telemetries.map(async ({ serial, name }) => {
        const { results } = await backendApi.findMany<HistoryType>(
          "/dpc-history/api/history",
          {
            pagination: {
              page: 1,
              perPage: 100,
            },
            select: [name],
            where: {
              serial,
            },
            orderBy: "createdAt:desc",
          },
        );
        return results;
      }),
    );
    return res.map((item, index) => {
      const name = telemetries[index].name;
      const max = item?.reduce((acc, item) => {
        const value = Number(flatten(item)[name]);
        return value > acc ? value : acc;
      }, 0);
      return {
        name: telemetries[index].label
          ? title + " " + telemetries[index].label
          : title,
        data: item.map((item) => ({
          x: new Date(item.createdAt),
          y: Number(flatten(item)[name]),
        })),
        max: max * 1.1,
      };
    });
  };

  const { data, isLoading, error } = useSWR(
    `dailog-histories?${JSON.stringify({ telemetries, dateRange })}`,
    fetcher,
    { refreshInterval: fetchInterval },
  );

  useEffect(() => {
    if (data) {
      setChartData(data as any);
    }
  }, [data]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const newData = await fetcher();
      setChartData(newData as any);
    }, fetchInterval);

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [fetchInterval]);

  if (isLoading) {
    return (
      <main className="grid place-content-center">
        <Loader />
      </main>
    );
  }

  if (error) {
    return (
      <main className="grid place-content-center">
        <h3>Something went wrong.</h3>
      </main>
    );
  }

  return (
    <ReactApexChart
      options={{
        theme: { mode: "dark" },
        tooltip: { cssClass: "text-black" },
        colors: telemetries.map((telemetry) => telemetry.color || "#008FFB"),
        grid: {
          borderColor: "#797979",
          xaxis: { lines: { show: false } },
          yaxis: { lines: { show: true } },
          padding: { top: -15 },
        },
        chart: {
          id: "realtime",
          background: "transparent",
          toolbar: { show: false },
          animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: { speed: 1000 },
          },
          zoom: { enabled: false },
          selection: { enabled: false },
          dropShadow: { enabled: false },
        },
        stroke: { width: 2, curve: "smooth" },
        dataLabels: { enabled: false },
        fill: { type: "solid" },
        xaxis: {
          type: "datetime",
          axisBorder: { show: false },
          axisTicks: { show: false },
          labels: {
            showDuplicates: false,
            show: true,
            style: {
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        yaxis:
          telemetries.length === 1
            ? {
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                },
                max: (chartData[0]?.max as number) || undefined,
                min: 0,
                labels: {
                  formatter: function (value) {
                    return typeof value === "number" &&
                      value.toString().includes(".")
                      ? value.toFixed(2) + " "
                      : value + " ";
                  },
                },
              }
            : [
                {
                  seriesName: data?.[0]?.name,
                  axisTicks: {
                    show: true,
                  },
                  axisBorder: {
                    show: true,
                  },
                  title: {
                    style: {
                      color: "#008FFB",
                    },
                  },
                  labels: {
                    formatter: function (value) {
                      return typeof value === "number" &&
                        value.toString().includes(".")
                        ? value.toFixed(2) + " "
                        : value + " ";
                    },
                  },
                },

                {
                  opposite: true,
                  seriesName: data?.[1]?.name,
                  axisTicks: {
                    show: true,
                  },
                  axisBorder: {
                    show: true,
                  },
                  title: {
                    style: {
                      color: "#FEB019",
                    },
                  },
                  labels: {
                    formatter: function (value) {
                      return typeof value === "number" &&
                        value.toString().includes(".")
                        ? value.toFixed(2) + " "
                        : value + " ";
                    },
                  },
                },
              ],
      }}
      series={chartData || []}
      type="bar"
      height="100%"
    />
  );
};
