import { ChartTelemetry, LastTelemetry, Widget, flatten } from "@/utils";
import useSWR from "swr";
import { useAppContext } from "@/Context";
import ReactApexChart from "react-apexcharts";
import Loader from "@/components/loader";

type Props = Widget;

export default function DonutChartWidget(props: Props) {
  const { backendApi } = useAppContext();

  const telemetries = (props.attributes?.telemetries || []) as ChartTelemetry[];

  const getTelemetry = async (telemetry: ChartTelemetry) => {
    const { serial, name } = telemetry;
    const newName = name.split(".")[0];
    const results = await backendApi.findMany<LastTelemetry>("lastTelemetry", {
      where: {
        device: { serial },
        name: newName,
      },
      select: {
        value: true,
      },
    });
    return Number(
      flatten({
        [newName]: results.results[0]?.value,
      })?.[name] || 0,
    );
  };

  const { data, isLoading, error } = useSWR(
    `telemetries?${JSON.stringify({ telemetries })}`,
    async () => {
      return await Promise.all(telemetries.map(getTelemetry));
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
    <ReactApexChart
      series={data || []}
      options={{
        theme: { mode: "dark" },
        chart: {
          type: "donut",
          background: "transparent",
          animations: { enabled: false },
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        legend: {
          markers: {
            width: 26,
            height: 12,
          },
          fontWeight: 600,
          fontSize: "12px",
          position: "right",
          formatter: function (name, opts) {
            const value = opts.w.globals.series[opts.seriesIndex] as number;
            return name + " " + value.toFixed(0) + "%";
          },
        },
        colors: telemetries.map((t) => t.color || "#000"),
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return Number(val).toFixed(2) + "%";
          },
        },
        labels: telemetries.map(
          (t) => t.label || t.name.split(".").at(-1) || "",
        ),
      }}
      type={"donut"}
      width={"100%"}
      height={"100%"}
    />
  );
}
