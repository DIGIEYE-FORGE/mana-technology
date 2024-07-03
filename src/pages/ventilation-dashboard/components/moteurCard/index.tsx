import ReactApexChart from "react-apexcharts";
import { ReactNode } from "react";
import { ChartTelemetry, HistoryType, Widget, flatten } from "@/utils";
import { useAppContext } from "@/Context";

import useSWR from "swr";
import Loader from "@/components/loader";
import { addMinutes } from "date-fns";

type Props = Widget & {
  children?: ReactNode;
  color: string;
  interval?: number;
};

export const MoteurCard = (props: Props) => {
  const { backendApi, dateRange } = useAppContext();

  const telemetries = (props.attributes?.telemetries || []) as ChartTelemetry[];

  const { data, isLoading, error } = useSWR(
    `histories?${JSON.stringify({
      telemetries,
      dateRange,
    })}`,
    async () => {
      if (!dateRange?.from || telemetries.length === 0) return [];
      const res = await Promise.all(
        telemetries.map(
          async ({ serial, name }) => {
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
              },
            );
            return results;
          },
          {
            // i need the interval 5 s
            interval: props.interval || undefined,
          },
        ),
      );
      return (
        res.map((item, index) => {
          const name = telemetries[index].name;
          return {
            name: telemetries[index].label || telemetries[index].name,
            data: item.map((item) => {
              return {
                x: new Date(item.createdAt),
                y: Number(flatten(item)[name]),
              };
            }),
          };
        }) || []
      );
    },
  );

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

  const finalData = data?.[0]?.data || [];
  const yaxisMax = Math.max(...finalData.map((item) => item.y)) + 50;

  return (
    <ReactApexChart
      options={{
        theme: { mode: "dark" },
        tooltip: { cssClass: "text-black" },
        colors: [props.color], // Change the line color to match the image
        grid: {
          borderColor: "#797979", // Adjust grid color to be more visible against the dark background
          xaxis: { lines: { show: false } }, // Hide x-axis grid lines
          yaxis: { lines: { show: true } }, // Hide y-axis grid lines
          padding: { top: -15 }, // Remove padding around the chart
        },
        chart: {
          background: "transparent",
          toolbar: { show: false },
          animations: { enabled: true },
          zoom: { enabled: false },
          selection: { enabled: false },
          dropShadow: { enabled: false },
        },
        stroke: { width: 2, curve: "smooth" }, // Adjust the stroke width to match the image
        dataLabels: { enabled: false },
        fill: {
          type: "solid",
        },
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
          max: yaxisMax,
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
              return value.toFixed(0);
            },
          },
        },
      }}
      series={data || []}
      type="line"
      height="100%"
    />
  );
};
