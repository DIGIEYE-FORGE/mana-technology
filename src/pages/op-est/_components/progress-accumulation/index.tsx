import { useAppContext } from "@/Context";
import Loader from "@/components/loader";
import { cn } from "@/lib/utils";
import { HistoryType, Widget } from "@/utils";
import { MotionConfig, motion } from "framer-motion";
import { Fragment } from "react/jsx-runtime";
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
  const { backendApi, dateRange } = useAppContext();

  const {
    serial,
    progressTelemetryName,
    accumulationTelemetryName,
    currentTargetColor = "#3b82f6",
    progressColor = "#22c55e",
    finalTargetColor = "#64748b",
  } = attributes as ProgressAccumulationWidgetData;

  const key =
    `progressAcc?` +
    JSON.stringify({
      serial,
      progressTelemetryName,
      accumulationTelemetryName,
      dateRange,
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
      const { results: currentProgressResults } =
        await backendApi.findMany<HistoryType>("/dpc-history/api/history", {
          pagination: { page: 1, perPage: 1 },
          orderBy: "createdAt:desc",
          select: [progressTelemetryName],
          where: {
            serial,
            createdAt: {
              $lte:
                dateRange?.to && new Date(dateRange.to) > new Date()
                  ? new Date()
                  : dateRange?.to,
            },
          },
        });
      const { results: currentTargetResults } =
        await backendApi.findMany<HistoryType>("/dpc-history/api/history", {
          pagination: { page: 1, perPage: 1 },
          orderBy: "createdAt:desc",
          select: [accumulationTelemetryName],
          where: {
            serial,
            createdAt: {
              $lte:
                dateRange?.to && new Date(dateRange.to) > new Date()
                  ? new Date()
                  : dateRange?.to,
            },
          },
        });

      const finalTarget = endOfMountResult[0][accumulationTelemetryName];
      const currentTarget = currentTargetResults[0][accumulationTelemetryName];
      const progress = currentProgressResults[0][progressTelemetryName];

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
    <Fragment>
      <div className="relative h-1 flex-1 p-2">
        <div className="absolute bottom-4 right-1/2 flex -translate-y-1/4 translate-x-1/2 flex-col items-center gap-1">
          <span className="text-2xl font-bold">
            {((progress / finalTarget) * 100).toFixed(2)} %
          </span>

          {currentTarget && progress ? (
            <span
              className={cn("text-base font-bold text-green-500", {
                "text-red-500": progress < currentTarget,
              })}
            >
              {progress >= currentTarget && "+"}
              {(((progress - currentTarget) / currentTarget) * 100).toFixed(2)}%
            </span>
          ) : null}
        </div>
        <svg
          className="h-full w-full"
          width="144"
          height="74"
          viewBox="0 0 144 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <MotionConfig
            transition={{
              duration: 0.75,
              ease: "easeInOut",
            }}
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
                strokeDashoffset:
                  100 - (currentTarget / finalTarget || 0) * 100,
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
          </MotionConfig>
        </svg>
      </div>
      <div className="relative flex flex-wrap justify-center gap-x-4 gap-y-1 px-1 pt-2 text-xs font-medium">
        <div className="flex items-center gap-1">
          <span
            className="h-[12px] w-[26px] rounded-full"
            style={{ backgroundColor: finalTargetColor }}
          ></span>
          <span>Objectif final: {finalTarget.toFixed(0)}</span>
        </div>
        <div className="flex items-center gap-1">
          <span
            className="h-[12px] w-[26px] rounded-full"
            style={{ backgroundColor: currentTargetColor }}
          ></span>
          <span>Cible à date: {currentTarget.toFixed(0)}</span>
        </div>
        <div className="flex items-center gap-1">
          <span
            className="h-[12px] w-[26px] rounded-full"
            style={{ backgroundColor: progressColor }}
          ></span>
          <div className="flex items-center gap-2">
            <span>Progrès: {progress.toFixed(0)}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
