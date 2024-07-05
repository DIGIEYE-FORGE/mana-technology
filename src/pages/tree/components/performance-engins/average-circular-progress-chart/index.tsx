import useSWR from "swr";
import { HistoryType } from "@/utils";
import { useAppContext } from "@/Context";
import {
  CircularProgress,
  CircularProgressProps,
} from "@/components/circular-progress";
import Loader from "@/components/loader";

export interface CircularProgressChartProps
  extends Omit<CircularProgressProps, "progress" | "legend"> {
  telemetries: {
    serial: string;
    name: string;
  }[];
  interval?: number;
  selectionDate?: boolean;
}

export const AverageCircularProgressChart = ({
  telemetries,
  interval,
  selectionDate,
  unit = "%",
  ...props
}: CircularProgressChartProps) => {
  const { backendApi, dateRange } = useAppContext();

  const { data, isLoading, error } = useSWR(
    `telemetry?${telemetries.map((el) => el.name).join(",")}`,
    async () => {
      const res = await Promise.all(
        telemetries.map(async (device) => {
          const { name, serial } = device;
          const res = await backendApi.findMany<HistoryType>(
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
          return {
            sum: res.results.reduce((acc, curr) => acc + Number(curr[name]), 0),
            total: res.results.length,
          };
        }),
      );
      const sum = res.reduce((acc, curr) => acc + curr.sum, 0);
      const total = res.reduce((acc, curr) => acc + curr.total, 0);
      return (sum / total);
    },
    {
      refreshInterval: interval || undefined,
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

  const progress = data || 0;
  let legend = "";
  if (unit === "%") {
    legend = `${progress.toFixed(2)}%`;
  } else if (unit === "m/s") {
    legend = `${progress.toFixed(1)} m/s`;
  } else {
    legend = `${progress.toFixed(0)} ${unit}`;
  }
  return (
    <CircularProgress
      progress={progress}
      {...props}
      legend={legend}
      className="h-full w-full text-sm font-bold"
    />
  );
};
