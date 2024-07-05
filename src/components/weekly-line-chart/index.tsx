import { useAppContext } from "@/Context";
import { HistoryType } from "@/utils";
import Chart from "react-apexcharts";
import useSWR from "swr";
import Loader from "../loader";

export type WeeklyLineChartProps = {
  serial: string;
  telemetryName: string;
  weekNumberTelemetryName?: string;
  label?: string;
  color?: string;
};
export function WeeklyLineChart({
  serial,
  telemetryName,
  color,
  label,
  weekNumberTelemetryName = "WeekNumber",
}: WeeklyLineChartProps) {
  const { backendApi, dateRange } = useAppContext();
  const { data, isLoading, error } = useSWR(
    `weekly-histories` +
      JSON.stringify({
        serial,
        telemetryName,
        weekNumberTelemetryName,
        dateRange,
      }),
    async () => {
      const { results } = await backendApi.findMany<HistoryType>(
        `/dpc-history/api/history`,
        {
          pagination: { page: 1, perPage: 10_00 },
          select: [weekNumberTelemetryName, telemetryName],
          where: {
            serial,
            createdAt: {
              $gt: new Date(dateRange?.from as Date),
              $lte: dateRange?.to && new Date(dateRange?.to as Date),
            },
          },
        },
      );
      const sortedResults = results.sort((a, b) => {
        const weekA = a[weekNumberTelemetryName] as string;
        const weekB = b[weekNumberTelemetryName] as string;
        return weekA.localeCompare(weekB);
      });
      return {
        categories: sortedResults.map(
          (result) => result.WeekNumber,
        ) as string[],
        data: sortedResults.map((result) => result[telemetryName]) as number[],
      };
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
      width={"100%"}
      height={"100%"}
      type="line"
      series={[{ data: data?.data || [] }]}
      options={{
        theme: { mode: "dark" },
        chart: {
          type: "bar",
          background: "transparent",
          toolbar: { show: false },
          animations: { enabled: true },
          zoom: { enabled: false },
          selection: { enabled: false },
          dropShadow: { enabled: false },
        },
        colors: [color || "#78F6EA"],
        dataLabels: { enabled: false },
        stroke: { curve: "smooth", width: 2.5 },
        labels: [label || telemetryName],
        grid: {
          borderColor: "#797979",
          xaxis: { lines: { show: false } },
          yaxis: { lines: { show: true } },
        },
        xaxis: {
          categories: data?.categories,
        },
      }}
    />
  );
}
