import { ChartTelemetry, HistoryType, Widget, flatten } from "@/utils";
import useSWR from "swr";
import { useAppContext } from "@/Context";
import ReactApexChart from "react-apexcharts";
import Loader from "@/components/loader";

type Props = Widget;

export default function LineChartWidget(props: Props) {
  const { backendApi } = useAppContext();
  const dateRange = {
    from: new Date("2021-09-01"),
    to: new Date("2024-06-30"),
  };

  const telemetries = (props.attributes?.telemetries || []) as ChartTelemetry[];

  const { data, isLoading, error } = useSWR(
    `histories?${JSON.stringify({
      telemetries,
      dateRange,
    })}`,
    async () => {
      if (!dateRange.from || telemetries.length === 0) return [];
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
                  $gt: new Date(dateRange.from as Date),
                  $lte: dateRange.to && new Date(dateRange.to as Date),
                },
              },
            },
          );
          return results;
        }),
      );
      return res.map((item, index) => ({
        name: telemetries[index].label || telemetries[index].name,
        type: telemetries[index].area ? "area" : "line",
        data: item.map((item) => ({
          x: new Date(item.createdAt),
          y: Number(flatten(item)[telemetries[index].name]),
        })),
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
    <main className="main flex flex-col">
      <h1 className="text-center text-lg font-bold text-white">
        {props.title}
      </h1>
      <div className="flex-1">
        <ReactApexChart
          options={{
            theme: { mode: "dark" },
            tooltip: { cssClass: "text-black" },
            colors: telemetries.map((item) => item.color),
            grid: {
              borderColor: "#373737",
              xaxis: { lines: { show: true } },
              yaxis: { lines: { show: false } },
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
            legend: {
              position: "bottom",
              markers: {
                width: 26,
                height: 12,
              },
              fontWeight: 600,
              fontSize: "12px",
            },
            xaxis: {
              type: "datetime",
              max: dateRange.to ? new Date(dateRange.to).getTime() : undefined,
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
          // type={"area"}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </main>
  );
}
