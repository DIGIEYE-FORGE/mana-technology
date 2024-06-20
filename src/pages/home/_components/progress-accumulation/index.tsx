import { useAppContext } from "@/Context";
import { Card } from "@/components/card";
import { cn } from "@/lib/utils";
import { HistoryType, Widget } from "@/utils";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import useSWR from "swr";

export type ProgressAccumulationWidgetData = {
  serial?: string;
  progressTelemetryName?: string;
  accumulationTelemetryName?: string;
  progressColor?: string;
  currentTargetColor?: string;
  finalTargetColor?: string;
  unit?: string;
};

function lastOfMonth(): Date {
  return new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
}

export function ProgressAccumulation({ attributes }: Widget) {
  const { backendApi } = useAppContext();

  const {
    serial,
    progressTelemetryName,
    accumulationTelemetryName,
    currentTargetColor = "#3b82f6",
    progressColor = "#22c55e",
    finalTargetColor = "#64748b",
  } = attributes as ProgressAccumulationWidgetData;

  const key = `progressAcc?`;
  JSON.stringify({
    serial,
    progressTelemetryName,
    accumulationTelemetryName,
  });

  const { data, isLoading, error } = useSWR(
    key,
    async () => {
      if (!serial || !progressTelemetryName || !accumulationTelemetryName)
        return null;
      const { results: currentResults } =
        await backendApi.findMany<HistoryType>("/dpc-history/api/history", {
          pagination: { page: 1, perPage: 1 },
          select: [progressTelemetryName, accumulationTelemetryName],
          where: { serial, createdAt: { $lte: new Date() } },
        });
      if (currentResults.length === 0) return null;
      const { results: endOfMountResult } =
        await backendApi.findMany<HistoryType>("/dpc-history/api/history", {
          pagination: { page: 1, perPage: 1 },
          select: [accumulationTelemetryName],
          orderBy: "createdAt:desc",
          where: { serial, createdAt: { $lte: lastOfMonth() } },
        });
      if (endOfMountResult.length === 0) return null;
      const { results: current } = await backendApi.findMany<HistoryType>(
        "/dpc-history/api/history",
        {
          pagination: { page: 1, perPage: 1 },
          orderBy: "createdAt:desc",
          select: [accumulationTelemetryName, progressTelemetryName],
          where: { serial, createdAt: { $lte: new Date() } },
        },
      );

      if (current.length === 0) return null;
      const currentTarget = current[0][progressTelemetryName];
      const finalTarget = endOfMountResult[0][accumulationTelemetryName];
      const progress = currentResults[0][accumulationTelemetryName];

      return { currentTarget, finalTarget, progress } as Record<
        string,
        number | undefined
      >;
    },
    { refreshInterval: 60_000 },
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
  if (!data)
    return (
      <div className="grid h-full place-content-center">
        <h3>No data found.</h3>
      </div>
    );

  const { currentTarget = 0, finalTarget = 0, progress = 0 } = data;

  const strokeWidth = 20;
  return (
    <Card className="col-span-3 row-span-7 flex flex-col gap-4 p-4">
      <h3 className="text-center text-lg font-bold">
        % Actual vs Monthly Planned
      </h3>

      <div className="relative h-1 flex-1 p-4">
        {currentTarget && progress ? (
          <span
            className={cn(
              "absolute right-1/2 top-1/2 translate-x-1/2 text-3xl font-bold text-green-500",
              {
                "text-red-500": progress < currentTarget,
              },
            )}
          >
            {progress >= currentTarget && "+"}
            {(((progress - currentTarget) / currentTarget) * 100).toFixed(2)}%
          </span>
        ) : null}
        <svg
          className="h-full w-full"
          width="144"
          height="74"
          viewBox="0 0 144 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M10 74C10 39.7583 37.7583 12 72 12C106.242 12 134 39.7583 134 74"
            stroke={finalTargetColor}
            strokeWidth={strokeWidth}
            pathLength={100}
            strokeDasharray={100}
            initial={{
              strokeDashoffset: 100,
            }}
            animate={{
              strokeDashoffset: 0,
            }}
          />
          {progress >= currentTarget && (
            <motion.path
              d="M10 74C10 39.7583 37.7583 12 72 12C106.242 12 134 39.7583 134 74"
              stroke={progressColor}
              strokeWidth={strokeWidth}
              pathLength={100}
              strokeDasharray={100}
              strokeDashoffset={80}
              initial={{
                strokeDashoffset: 100,
              }}
              animate={{
                strokeDashoffset: 100 - (progress / finalTarget) * 100,
              }}
            />
          )}
          <motion.path
            d="M10 74C10 39.7583 37.7583 12 72 12C106.242 12 134 39.7583 134 74"
            stroke={currentTargetColor}
            strokeWidth={strokeWidth}
            pathLength={100}
            strokeDasharray={100}
            strokeDashoffset={80}
            initial={{
              strokeDashoffset: 100,
            }}
            animate={{
              strokeDashoffset: 100 - (currentTarget / finalTarget || 0) * 100,
            }}
          />
          {progress < currentTarget && (
            <motion.path
              d="M10 74C10 39.7583 37.7583 12 72 12C106.242 12 134 39.7583 134 74"
              stroke={progressColor}
              strokeWidth="20"
              pathLength={100}
              strokeDasharray={100}
              strokeDashoffset={80}
              initial={{
                strokeDashoffset: 100,
              }}
              animate={{
                strokeDashoffset: 100 - (progress / finalTarget) * 100,
              }}
            />
          )}
        </svg>
      </div>
      <div className="relative flex flex-wrap justify-center gap-x-4 text-xs font-medium">
        <div className="flex items-center gap-1">
          <span
            className="h-[12px] w-[26px] rounded-full"
            style={{ backgroundColor: finalTargetColor }}
          ></span>
          <span>Final Target: {finalTarget}</span>
        </div>
        <div className="flex items-center gap-1">
          <span
            className="h-[12px] w-[26px] rounded-full"
            style={{ backgroundColor: currentTargetColor }}
          ></span>
          <span>Current Target: {currentTarget}</span>
        </div>
        <div className="flex items-center gap-1">
          <span
            className="h-[12px] w-[26px] rounded-full"
            style={{ backgroundColor: progressColor }}
          ></span>
          <div className="flex items-center gap-2">
            <span>progress: {progress}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
