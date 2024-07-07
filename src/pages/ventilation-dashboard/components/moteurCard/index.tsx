/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ReactNode } from "react";
import { ChartTelemetry, HistoryType, Widget, flatten } from "@/utils";
import { useAppContext } from "@/Context";
import useSWR from "swr";
import Loader from "@/components/loader";

type Props = Widget & {
  children?: ReactNode;
  color: string;
  interval?: number;
  max?: number;
};

export const MoteurCard = (props: Props) => {
  const { backendApi, dateRange } = useAppContext();
  const telemetries = (props.attributes?.telemetries || []) as ChartTelemetry[];
  const [chartData, setChartData] = useState([]);
  const fetchInterval = props.interval || 10000; // Default to 10 seconds if no interval is provided

  const fetcher = async () => {
    if (!dateRange?.from || telemetries.length === 0) return [];
    const res = await Promise.all(
      telemetries.map(async ({ serial, name }) => {
        const { results } = await backendApi.findMany<HistoryType>(
          "/dpc-history/api/history",
          {
            pagination: {
              page: 1,
              perPage: 20,
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
      return {
        name: telemetries[index].label || telemetries[index].name,
        data: item.map((item) => ({
          x: new Date(item.createdAt),
          y: Number(flatten(item)[name]),
        })),
      };
    });
  };

  const { data, isLoading, error } = useSWR(
    `histories?${JSON.stringify({ telemetries, dateRange })}`,
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
        colors: [props.color],
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
        yaxis: {
          min: 0,
          max: props.max,
          tickAmount: 1,
          labels: {
            show: true,
            style: {
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-yaxis-label",
            },
            formatter(value) {
              return value.toFixed(2);
            },
          },
        },
      }}
      series={chartData || []}
      type="line"
      height="100%"
    />
  );
};
