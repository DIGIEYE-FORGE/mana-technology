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
        select: {
          value: true,
        },
      });
      return (res?.results[0]?.value || 0) as number;
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

  const progress = data as number;
  let legend = "";
  if (unit === "%") {
    legend = `${progress?.toFixed(2)}%`;
  } else {
    legend = `${progress?.toFixed(1)} m/s`;
  }
  // else {
  //   legend = `${progress?.toFixed(0)} ${unit}`;
  // }
  return <CircularProgress progress={progress} {...props} legend={legend} />;
};
