import { HistoryType, Widget, flatten, getRandomColor } from "@/utils";
import useSWR from "swr";
import { useAppContext } from "@/Context";
import Chart from "react-apexcharts";
import Loader from "@/components/loader";
import { ReactNode, useId } from "react";

export type ChartTelemetry = {
  serial: string;
  name?: string;
  calculated?: {
    names: [string, string];
    operation: "addition" | "subtraction" | "multiplication" | "division";
  };
  label?: string;
  unit?: string;
  color?: string;
  area?: boolean;
  data?: { x: Date; y: number }[];
  accumulated?: boolean;
  value?: number;
};

type Props = Widget & {
  legendPosition?: "top" | "bottom" | "left" | "right" | "none";
  children?: ReactNode;
  selectionDate?: boolean;
  max?: number;
  preLoadData?: HistoryType[];
};

export default function LineChartWidget({
  legendPosition = "bottom",
  selectionDate = true,
  correction,
  max,
  preLoadData,
  ...props
}: Props) {
  const { backendApi, dateRange } = useAppContext();
  const id = useId();

  const telemetries = (props.attributes?.telemetries || []) as ChartTelemetry[];

  const { data, isLoading, error } = useSWR(
    `histories?${
      selectionDate
        ? JSON.stringify({ telemetries, dateRange })
        : JSON.stringify({ telemetries })
    }`,
    async () => {
      if (!dateRange?.from || telemetries.length === 0) return [];
      const res = await Promise.all(
        telemetries.map(async ({ serial, name, calculated }, idx) => {
          if (telemetries[idx].data) return [];
          if (!name && !calculated) return [];
          if (preLoadData) return preLoadData;
          const { results } = await backendApi.findMany<HistoryType>(
            "/dpc-history/api/history",
            {
              pagination: { page: 1, perPage: 10_00 },
              select: name ? [name] : calculated?.names,
              orderBy: "createdAt:asc",
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
      const res1 = res?.map((item, index) => {
        const newData: { x: Date; y: number }[] = [];
        const { calculated, name } = telemetries[index];

        if (telemetries[index].data) {
          // do nothing
        } else if (name) {
          for (let i = 0; i < item.length; i++) {
            const x = new Date(item[i].createdAt);
            let y = Number(flatten(item[i])[name]) * (correction?.[name] || 1);
            if (telemetries[index].accumulated && i > 0) y += newData[i - 1].y;
            newData.push({ x, y });
          }
        } else if (calculated) {
          const [name1, name2] = calculated.names;
          for (let i = 0; i < item.length; i++) {
            const x = new Date(item[i].createdAt);
            let y1 =
              Number(flatten(item[i])[name1]) * (correction?.[name1] || 1);
            let y2 =
              Number(flatten(item[i])[name2]) * (correction?.[name2] || 1);
            if (telemetries[index].accumulated && i > 0) {
              y1 += newData[i - 1].y;
              y2 += newData[i - 1].y;
            }
            let y = 0;
            switch (calculated.operation) {
              case "addition":
                y = y1 + y2;
                break;
              case "subtraction":
                y = y1 - y2;
                break;
              case "multiplication":
                y = y1 * y2;
                break;
              case "division":
                y = y1 / y2;
                break;
            }
            newData.push({ x, y });
          }
        }

        return {
          name: telemetries[index].label || telemetries[index].name,
          type: telemetries[index].area ? "area" : "line",
          nameTelemetry: telemetries[index].name,
          color: telemetries[index].color,
          data: telemetries[index].data || newData,
        };
      });
      if (props.moyenne) {
        const res2 = [];
        if (props.moyenne === "combined") {
          const allDates = res1.flatMap((item) =>
            item?.data?.map((item) => item.x),
          );
          const allData = res1.flatMap((item) =>
            item?.data?.map((item) => item.y),
          );
          const moyenne = allData?.reduce((a, b) => a + b, 0) / allData.length;
          res2.push({
            name: "Moyenne",
            type: "line",
            color: getRandomColor(),
            data: allDates?.map((item) => ({
              x: item,
              y: Number(moyenne),
            })),
          });
        } else if (Array.isArray(props.moyenne)) {
          // Add logic for array-based 'moyenne' handling if needed
        }
        return [...(res1 || []), ...(res2 || [])];
      }
      return res1?.map((item) => ({
        name: item.name,
        type: item.type,
        data: item.data,
        color: item.color || getRandomColor(),
        sorted: true,
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
          id,
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
          opacity: telemetries?.map((item) => (item.area ? 0.33 : 1)),
        },

        legend:
          legendPosition != "none"
            ? {
                position: legendPosition,
                // markers: {
                //   width: 26,
                //   height: 12,
                // },
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
          max,
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
