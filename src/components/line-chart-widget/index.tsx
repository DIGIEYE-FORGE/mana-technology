import {
  ChartTelemetry,
  HistoryType,
  Widget,
  flatten,
  getRandomColor,
} from "@/utils";
import useSWR from "swr";
import { useAppContext } from "@/Context";
import Chart from "react-apexcharts";
import Loader from "@/components/loader";
import { ReactNode } from "react";

type Props = Widget & {
  legendPosition?: "top" | "bottom" | "left" | "right" | "none";
  children?: ReactNode;
  selectionDate?: boolean;
};

export default function LineChartWidget({
  legendPosition = "bottom",
  selectionDate = true,
  ...props
}: Props) {
  const { backendApi, dateRange } = useAppContext();

  const telemetries = (props.attributes?.telemetries ||
    []) as unknown as ChartTelemetry[];

  const { data, isLoading, error } = useSWR(
    `histories?${
      selectionDate
        ? JSON.stringify({
            telemetries,
            dateRange,
          })
        : JSON.stringify({
            telemetries,
          })
    }`,
    async () => {
      if (!dateRange?.from || telemetries.length === 0) return [];
      const res = await Promise.all(
        telemetries.map(async ({ serial, name }, idx) => {
          if (telemetries[idx].data) return [];
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
                createdAt: selectionDate
                  ? {
                      $gt: new Date(dateRange?.from as Date),
                      $lte: dateRange?.to && new Date(dateRange?.to as Date),
                    }
                  : undefined,
              },
            },
          );
          return results;
        }),
      );
      const res1 = res.map((item, index) => ({
        name: telemetries[index].label || telemetries[index].name,
        type: telemetries[index].area ? "area" : "line",
        nameTelemetry: telemetries[index].name,
        color: telemetries[index].color || getRandomColor(),
        data:
          telemetries[index].data ||
          item.map((item) => ({
            x: new Date(item.createdAt),
            y: Number(
              Number(flatten(item)[telemetries[index].name]).toFixed(2),
            ),
          })),
      }));
      if (props.moyenne) {
        const res2 = [];
        if (props.moyenne === "combined") {
          const allDates = res1.flatMap((item) =>
            item.data.map((item) => item.x),
          );
          const allData = res1.flatMap((item) =>
            item.data.map((item) => item.y),
          );
          const moyenne = allData.reduce((a, b) => a + b, 0) / allData.length;
          res2.push({
            name: "Moyenne",
            type: "line",
            color: getRandomColor(),
            data: allDates.map((item) => ({
              x: item,
              y: Number(moyenne),
            })),
          });
        } else if (Array.isArray(props.moyenne)) {
          // Add logic for array-based 'moyenne' handling if needed
        }
        return [...(res1 || []), ...(res2 || [])];
      }
      return res1.map((item) => ({
        name: item.name,
        type: item.type,
        data: item.data,
      }));
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
    <Chart
      options={{
        theme: { mode: "dark" },
        tooltip: {
          shared: true,
          hideEmptySeries: false,
        },
        grid: {
          borderColor: "#797979",
          xaxis: { lines: { show: false } },
          yaxis: { lines: { show: true } },
        },
        chart: {
          type: "bar",
          background: "transparent",
          toolbar: { show: false },
          animations: { enabled: true },
          zoom: { enabled: false },
          selection: { enabled: false },
          dropShadow: { enabled: false },
        },
        stroke: { curve: "smooth", width: 2.5 },
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
          max:
            dateRange?.to && selectionDate
              ? new Date(dateRange?.to).getTime()
              : undefined,
          tooltip: {
            enabled: false,
          },
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
          // tickAmount: 4,
          tooltip: {
            enabled: false,
          },
          labels: {
            show: true,
            formatter: function (value) {
              return value < 2
                ? value.toFixed(1)
                : Math.ceil(value).toString() + (telemetries[0].unit || "");
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
      series={data}
      width={"100%"}
      height={"100%"}
      type="line"
    />
  );
}
