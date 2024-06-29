import useSWR from "swr";
import { CircularProgress, CircularProgressProps } from "../circular-progress";
import { useAppContext } from "@/Context";
import Loader from "../loader";
import { LastTelemetry } from "@/utils";

export interface CircularProgressChartProps
  extends Omit<CircularProgressProps, "progress" | "legend"> {
  telemetry: {
    serial: string;
    name: string;
  };
  unit?: string;
  interval?: number;
}

export const CircularProgressChart = ({
  telemetry,
  interval,
  unit = "%",
  ...props
}: CircularProgressChartProps) => {
  const { backendApi } = useAppContext();
  const { data, isLoading, error } = useSWR(
    `telemetry?${telemetry.name})}`,
    async () => {
      const res = await backendApi.findMany<LastTelemetry>("lasttelemetry", {
        where: {
          name: telemetry.name,
          device: { serial: telemetry.serial },
        },
      });
      return res.results[0];
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

  const progress = typeof data?.value === "number" ? data.value : 0;

  let legend = "";
  if (unit === "%") {
    legend = `${progress.toFixed(2)}%`;
  } else if (unit === "m/s") {
    legend = `${progress.toFixed(1)} m/s`;
  } else {
    legend = `${progress.toFixed(0)} ${unit}`;
  }
  return <CircularProgress progress={progress} {...props} legend={legend} />;
};
