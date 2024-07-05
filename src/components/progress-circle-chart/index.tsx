/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from "swr";
import { useAppContext } from "@/Context";
import Loader from "../loader";
import { LastTelemetry } from "@/utils";
import { cn } from "@/lib/utils";
import { ProgressCircle, ProgressCircleProps } from "../progress-circle";

export interface ProgressCirclePropsChartProps
  extends Omit<ProgressCircleProps, "progress" | "legend"> {
  telemetry: {
    serial: string;
    name: string;
  };
  className?: string;
  interval?: number;
}

export const ProgressCirclePropsChart = ({
  telemetry,
  interval,
  className,
  ...props
}: ProgressCirclePropsChartProps) => {
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
  return (
    <ProgressCircle
      {...props}
      className={cn("size-28 text-lg", className)}
      progress={progress}
    />
  );
};
