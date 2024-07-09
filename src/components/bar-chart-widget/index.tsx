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

type Props = Widget;

export default function BarChartWidget(props: Props) {
  const { backendApi, dateRange } = useAppContext();

  const telemetries = (props.attributes?.telemetries || []) as ChartTelemetry[];
  const stacked = (props.attributes?.stacked || false) as boolean;

  const { data, isLoading, error } = useSWR(
    `histories?${JSON.stringify({
      telemetries,
      dateRange,
    })}`,
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
              orderBy: "createdAt:asc",
              where: {
                serial,
                createdAt: {
                  $gt: new Date(dateRange.from as Date),
                  $lte: dateRange?.to && new Date(dateRange.to as Date),
                },
              },
            },
          );
          return results;
        }),
      );
      const res1 = res.map((item, index) => {
        const newData: { x: Date; y: number }[] = [];
        if (telemetries[index].data === undefined) {
          for (let i = 0; i < item.length; i++) {
            const x = new Date(item[i].createdAt);
            let y = Number(flatten(item[i])[telemetries[index].name]);
            if (telemetries[index].accumulated && i > 0) {
              y += newData[i - 1].y;
              console.log({ x, y });
            }
            newData.push({ x, y });
          }
        }
        return {
          name: telemetries[index].label || telemetries[index].name,
          type: "bar",
          nameTelemetry: telemetries[index].name,
          data: telemetries[index].data || newData,
        };
      });
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
    <Chart
      options={{
        theme: { mode: "dark" },
        tooltip: { cssClass: "text-black",},
        legend: {
          position: "bottom",
          markers: { width: 26, height: 12, radius: 8 },
          fontWeight: 600,
          fontSize: "12px",
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
        stroke: {
          width: (data || []).map((item) => (item.type === "line" ? 2.5 : 0)),
          curve: "smooth",
        },
        grid: {
          borderColor: "#797979",
          xaxis: { lines: { show: false } },
          yaxis: { lines: { show: true } },
        },
        chart: {
          type: "bar",
          stacked,
          background: "transparent",
          toolbar: { show: false },
          animations: { enabled: true },
          zoom: { enabled: false },
          selection: { enabled: false },
          dropShadow: { enabled: false },
        },
        dataLabels: { enabled: false },
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
          // tickAmount: 4,
          max: stacked
            ? undefined
            : Math.max(
                ...(data || []).flatMap((item) =>
                  item.data.map((item) => item.y),
                ),
              ),
          labels: {
            show: true,
            formatter: function (value) {
              return Math.ceil(value) + " ";
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
