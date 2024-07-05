/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChartsWidgetData,
  HistoryType,
  Widget,
  flatten,
  getRandomColor,
} from "@/utils";
import useSWR from "swr";
import { useAppContext } from "@/Context";
import Chart from "react-apexcharts";
import Loader from "@/components/loader";
import { Fragment } from "react/jsx-runtime";
type Props = Widget & {
  enableTooltip?: boolean;
};

export default function BarLineWidget({
  ciel = true,
  correction,
  enableTooltip = true,
  ...props
}: Props) {
  const { backendApi } = useAppContext();

  const telemetries = (props.attributes?.telemetries ||
    []) as ChartsWidgetData[];

  const { data, isLoading, error } = useSWR(
    `histories?${JSON.stringify({
      telemetries,
      dateRange: props.dateRange,
    })}`,
    async () => {
      if (telemetries.length === 0) return [];
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
                createdAt: props.dateRange && {
                  $gte: props.dateRange.from,
                  $lte: props.dateRange.to,
                },
              },
            },
          );

          return results;
        }),
      );
      const res1 = [
        ...res.map((item, index) => ({
          name: telemetries[index].label || telemetries[index].name,
          nameTelemetry: telemetries[index].name,
          type: telemetries[index].type,
          data: item.map((item) => ({
            x: new Date(item.createdAt),
            y:
              Number(
                Number(flatten(item)[telemetries[index].name]).toFixed(2),
              ) * (correction?.[telemetries[index].name] || 1),
          })),
        })),
      ];
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
              y: moyenne,
            })),
          });
        } else if (Array.isArray(props.moyenne)) {
          const newTelemetry = telemetries.filter((item) =>
            props.moyenne?.includes(item.name),
          );
          newTelemetry.forEach((item) => {
            const dataTelemetry = res1.find(
              (it) => it.nameTelemetry === item.name,
            );
            if (dataTelemetry) {
              const allDates = dataTelemetry?.data.map((item) => item.x);
              const allData = dataTelemetry?.data.map((item) => item.y);
              const moyenne =
                allData.reduce((a, b) => a + b, 0) / allData.length;
              res2.push({
                name: (item.label || item.name) + " (Moyenne)",
                type: "line",
                color: getRandomColor(),
                data: allDates.map((item) => ({
                  x: item,
                  y: moyenne,
                })),
              });
            }
          });
        }
        return [...res1, ...(res2 || [])];
      }
      return res1;
    },
  );

  if (isLoading)
    return (
      <div className="grid h-full w-full place-content-center">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="grid h-full w-full place-content-center">
        <h3>Something went wrong.</h3>
      </div>
    );

  return (
    <Fragment>
      {/* {JSON.stringify(data)} */}
      <Chart
        options={{
          theme: { mode: "dark" },
          tooltip: { cssClass: "text-black", enabled: enableTooltip },
          chart: {
            type: "line",
            background: "transparent",
            toolbar: { show: false },
            animations: { enabled: true },
            zoom: { enabled: false },
            selection: { enabled: false },
            dropShadow: { enabled: false },
            stacked: props.stacked || false,
          },
          dataLabels: { enabled: false },

          stroke: {
            width: (data || []).map((item) =>
              item.type === "line" || item.type === "area" ? 2.5 : 0,
            ),
            curve: "smooth",
          },
          xaxis: {
            type: "datetime",
            max: props.dateRange?.to?.getTime(),
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
          yaxis:
            props.yAxis === "one"
              ? {
                  axisTicks: {
                    show: true,
                  },
                  axisBorder: {
                    show: true,
                  },
                  labels: {
                    formatter: function (value) {
                      return ciel
                        ? Math.ceil(value) + " "
                        : typeof value === "number" &&
                            value.toString().includes(".")
                          ? value.toFixed(2) + " "
                          : value + " ";
                    },
                  },
                }
              : [
                  {
                    seriesName: [data?.[0]?.name, data?.[1]?.name] as any,
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
                        return ciel
                          ? Math.ceil(value) + " "
                          : typeof value === "number" &&
                              value.toString().includes(".")
                            ? value.toFixed(2) + " "
                            : value + " ";
                      },
                    },
                  },

                  {
                    opposite: true,
                    seriesName: data?.[2]?.name,
                    axisTicks: {
                      show: true,
                    },
                    axisBorder: {
                      show: true,
                    },
                    labels: {
                      formatter: function (value) {
                        return ciel
                          ? Math.ceil(value) + " "
                          : typeof value === "number" &&
                              value.toString().includes(".")
                            ? value.toFixed(2) + " "
                            : value + " ";
                      },
                    },
                    title: {
                      style: {
                        color: "#FEB019",
                      },
                    },
                  },
                ],
          grid: {
            borderColor: "#797979",
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: true } },
          },
          colors: telemetries.map((item) => item.color),
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 2,
              borderRadiusApplication: "end",
              borderRadiusWhenStacked: "all",
            },
          },
          legend: {
            position: "bottom",
            markers: { width: 26, height: 12, radius: 8 },
            fontWeight: 600,
            fontSize: "12px",
          },
        }}
        series={data as any}
        width={"100%"}
        height={"100%"}
      />
    </Fragment>
  );
}
