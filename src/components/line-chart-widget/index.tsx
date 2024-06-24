import {
  ChartTelemetry,
  HistoryType,
  Widget,
  flatten,
  getRandomColor,
} from "@/utils";
import useSWR from "swr";
import { useAppContext } from "@/Context";
import ReactApexChart from "react-apexcharts";
import Loader from "@/components/loader";
import { ReactNode } from "react";

type Props = Widget & {
  legendPosition?: "top" | "bottom" | "left" | "right" | "none";
  children?: ReactNode;
};

export default function LineChartWidget({
  legendPosition = "bottom",
  ...props
}: Props) {
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
        telemetries.map(async ({ serial, name }) => {
          const { results } = await backendApi.findMany<HistoryType>(
            "/dpc-history/api/history",
            {
              pagination: {
                page: 1,
                perPage: 10_00,
              },
              select: [name],
              where: {
                serial,
                createdAt: {
                  $gt: new Date(dateRange?.from as Date),
                  $lte: dateRange?.to && new Date(dateRange?.to as Date),
                },
              },
            },
          );
          return results;
        }),
      );
      const res1 = res.map((item, index) => ({
        name: telemetries[index].label || telemetries[index].name,
        type: telemetries[index].area ? "area" : "line",
        data: item.map((item) => ({
          x: new Date(item.createdAt),
          y: Number(flatten(item)[telemetries[index].name]),
        })),
      }));
      if (props.moyenne) {
        const res2 = res1.map((item, index) => {
          return {
            name:
              (telemetries[index].label || telemetries[index].name) +
              " (moyenne)",
            type: "line",
            color: getRandomColor(),
            data: [
              {
                x: new Date(item.data[0].x),
                y:
                  item.data.reduce((acc, item) => acc + item.y, 0) /
                  item.data.length,
              },
              {
                x: new Date(item.data[item.data.length - 1].x),
                y:
                  item.data.reduce((acc, item) => acc + item.y, 0) /
                  item.data.length,
              },
            ],
          };
        });
        res1.push(...res2);
      }
      return res1;
    },
  );

  if (isLoading)
    return (
      <main className="grid place-content-center">
        <Loader />
      </main>
    );
  if (error)
    return (
      <main className="grid place-content-center">
        <h3>Something went wrong.</h3>
      </main>
    );
  return (
    <ReactApexChart
      options={{
        theme: { mode: "dark" },
        tooltip: { cssClass: "text-black" },
        colors: telemetries.map((item) => item.color),
        grid: {
          borderColor: "#797979",
          xaxis: { lines: { show: false } },
          yaxis: { lines: { show: true } },
        },
        chart: {
          background: "transparent",
          toolbar: { show: false },
          animations: { enabled: true },
          zoom: { enabled: false },
          selection: { enabled: false },
          dropShadow: { enabled: false },
        },
        stroke: { width: 3, curve: "smooth" },
        dataLabels: { enabled: false },
        fill: {
          type: "solid",
          opacity: telemetries.map((item) => (item.area ? 0.33 : 1)),
        },

        legend:
          legendPosition != "none"
            ? {
                position: legendPosition,
                markers: {
                  width: 26,
                  height: 12,
                },
                fontWeight: 600,
                fontSize: "12px",
              }
            : { show: false },
        xaxis: {
          type: "datetime",
          max: dateRange?.to ? new Date(dateRange?.to).getTime() : undefined,
          axisBorder: { show: false },
          axisTicks: { show: false },
          labels: {
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
          tickAmount: 4,
          labels: {
            show: true,
            formatter: function (value) {
              return value.toFixed(2);
            },
            style: {
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
      }}
      series={data || []}
      width={"100%"}
      height={"100%"}
    />
  );
}
